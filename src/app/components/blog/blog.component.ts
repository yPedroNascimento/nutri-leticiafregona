import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTENT } from '../../config/content';
import { LanguageService } from '../../services/language.service';
import { Article } from './blog';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  private readonly languageService = inject(LanguageService);
  protected readonly content = computed(() => CONTENT[this.languageService.getLanguage()()] || CONTENT['pt']);

  protected readonly articles: Article[] = [
    {
      image: '/images/blog-1.svg',
      title: 'Como montar um prato equilibrado para o dia a dia',
      summary: 'Estratégias simples para melhorar sua alimentação sem dietas restritivas.',
      link: '#'
    },
    {
      image: '/images/blog-2.svg',
      title: 'Nutrição para mais disposição e foco no trabalho',
      summary: 'Alimentos que apoiam energia mental e evitam picos de açúcar.',
      link: '#'
    },
    {
      image: '/images/blog-3.svg',
      title: 'O papel da nutrição no equilíbrio hormonal feminino',
      summary: 'Descubra como pequenas mudanças podem melhorar seu ciclo e bem-estar.',
      link: '#'
    }
  ];
}
