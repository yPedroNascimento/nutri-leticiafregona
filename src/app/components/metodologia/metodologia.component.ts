import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTENT } from '../../config/content';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-metodologia',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './metodologia.component.html',
  styleUrls: ['./metodologia.component.scss']
})
export class MetodologiaComponent {
  /** Limite de caracteres do título do passo — acima disso é truncado com reticências */
  protected readonly TITLE_MAX_LENGTH = 26;

  private readonly languageService = inject(LanguageService);
  protected readonly content = computed(() => CONTENT[this.languageService.getLanguage()()] || CONTENT['pt']);

  /** Limita o texto a `max` caracteres, cortando em fronteira de palavra e adicionando "…" */
  protected limitText(text: string, max = this.TITLE_MAX_LENGTH): string {
    const trimmed = text.trim();
    if (trimmed.length <= max) return trimmed;
    const cut = trimmed.slice(0, max - 1);
    const lastSpace = cut.lastIndexOf(' ');
    return `${cut.slice(0, lastSpace > 0 ? lastSpace : cut.length).trimEnd()}…`;
  }
}
