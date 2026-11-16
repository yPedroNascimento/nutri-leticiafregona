import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTENT } from '../../config/content';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  private readonly languageService = inject(LanguageService);
  protected readonly content = computed(() => CONTENT[this.languageService.getLanguage()()] || CONTENT['pt']);
}
