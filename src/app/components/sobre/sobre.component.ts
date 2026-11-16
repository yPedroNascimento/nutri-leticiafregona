import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTENT } from '../../config/content';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-sobre',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.scss']
})
export class SobreComponent {
  private readonly languageService = inject(LanguageService);
  protected readonly content = computed(() => CONTENT[this.languageService.getLanguage()()] || CONTENT['pt']);
}
