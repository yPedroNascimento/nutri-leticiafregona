import { Component, inject, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTENT } from '../../config/content';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent {
  private readonly languageService = inject(LanguageService);
  protected readonly content = computed(() => CONTENT[this.languageService.getLanguage()()] || CONTENT['pt']);
  protected readonly openIndex = signal<number | null>(null);

  protected toggle(index: number): void {
    this.openIndex.update((current) => (current === index ? null : index));
  }
}
