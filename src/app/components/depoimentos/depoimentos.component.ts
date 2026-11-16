import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, signal, inject, computed } from '@angular/core';
import { PlatformService } from '../../services/platform.service';
import { LanguageService } from '../../services/language.service';
import { CONTENT } from '../../config/content';
import { Depoimento } from './depoimentos';

@Component({
  selector: 'app-depoimentos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './depoimentos.component.html',
  styleUrls: ['./depoimentos.component.scss']
})
export class DepoimentosComponent implements OnInit, OnDestroy {
  private readonly languageService = inject(LanguageService);
  private readonly platformService = inject(PlatformService);

  protected readonly content = computed(() => CONTENT[this.languageService.getLanguage()()] || CONTENT['pt']);

  protected readonly depoimentos: Depoimento[] = [
    {
      name: 'Mariana Silva',
      role: 'Mãe e empreendedora',
      quote: 'Minha relação com comida mudou por completo. Hoje eu me sinto mais leve, com energia e feliz com minhas escolhas.',
      result: 'Perda de 8kg em 12 semanas',
      avatar: '/images/avatar-1.svg',
      rating: 5
    },
    {
      name: 'Carlos Ramos',
      role: 'Atleta amador',
      quote: 'O plano nutricional trouxe performance e mais foco nos treinos. Me sinto mais forte e com a recuperação mais rápida.',
      result: 'Energia elevada e melhor recuperação',
      avatar: '/images/avatar-2.svg',
      rating: 5
    },
    {
      name: 'Ana Beatriz',
      role: 'Profissional de marketing',
      quote: 'Com consultoria personalizada, meu sono melhorou, e perdi medidas sem abrir mão do prazer ao comer.',
      result: 'Emagrecimento saudável e consistente',
      avatar: '/images/avatar-3.svg',
      rating: 5
    }
  ];

  protected readonly currentIndex = signal(0);
  private intervalId = 0;

  ngOnInit(): void {
    this.intervalId = this.platformService.setInterval(() => this.next(), 10000);
  }

  ngOnDestroy(): void {
    this.platformService.clearInterval(this.intervalId);
  }

  protected next(): void {
    this.currentIndex.update((value) => (value + 1) % this.depoimentos.length);
  }

  protected previous(): void {
    this.currentIndex.update((value) => (value - 1 + this.depoimentos.length) % this.depoimentos.length);
  }

  protected select(index: number): void {
    this.currentIndex.set(index);
  }
}
