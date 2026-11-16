import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_LINKS } from '../../config/links';
import { CONTENT } from '../../config/content';
import { LanguageService } from '../../services/language.service';
import { AnalyticsService } from '../../services/analytics.service';

@Component({
  selector: 'app-cta-final',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cta-final.component.html',
  styleUrls: ['./cta-final.component.scss']
})
export class CtaFinalComponent {
  private readonly languageService = inject(LanguageService);
  private readonly analyticsService = inject(AnalyticsService);

  protected readonly whatsappLink = APP_LINKS.whatsapp;
  protected readonly emailLink = APP_LINKS.email;
  protected readonly content = computed(() => CONTENT[this.languageService.getLanguage()()] || CONTENT['pt']);

  protected onCtaClick(): void {
    this.analyticsService.trackCtaClick('cta-final');
  }
}
