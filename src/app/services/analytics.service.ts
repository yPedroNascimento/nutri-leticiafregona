import { Injectable, inject } from '@angular/core';
import { PlatformService } from './platform.service';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {
  private readonly platformService = inject(PlatformService);

  trackEvent(action: string, category: string, label?: string, value?: number): void {
    if (!this.platformService.isBrowser || typeof window.gtag === 'undefined') return;

    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value
    });
  }

  trackPageView(path: string, title?: string): void {
    if (!this.platformService.isBrowser || typeof window.gtag === 'undefined') return;

    window.gtag('event', 'page_view', {
      page_path: path,
      page_title: title
    });
  }

  trackCtaClick(location: string): void {
    this.trackEvent('cta_click', 'engagement', location);
  }

  trackMenuOpen(): void {
    this.trackEvent('menu_open', 'navigation');
  }

  trackCarouselInteraction(direction: 'next' | 'prev'): void {
    this.trackEvent('carousel_navigation', 'engagement', direction);
  }

  trackNewsletterSignup(): void {
    this.trackEvent('newsletter_signup', 'conversion', 'footer');
  }
}
