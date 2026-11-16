import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule, DOCUMENT } from '@angular/common';
import { APP_LINKS, NavLink } from '../../config/links';
import { CONTENT } from '../../config/content';
import { LanguageService, Language } from '../../services/language.service';
import { AnalyticsService } from '../../services/analytics.service';
import { PlatformService } from '../../services/platform.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private readonly languageService = inject(LanguageService);
  private readonly analyticsService = inject(AnalyticsService);
  private readonly platformService = inject(PlatformService);
  private readonly document = inject(DOCUMENT);

  protected readonly whatsappLink = APP_LINKS.whatsapp;
  protected readonly isMenuOpen = signal(false);
  protected readonly isLangMenuOpen = signal(false);

  protected readonly languages = this.languageService.availableLanguages;
  protected readonly currentLang = this.languageService.getLanguage();
  protected readonly content = computed(() => CONTENT[this.currentLang()] || CONTENT['pt']);

  protected toggleMenu(): void {
    this.isMenuOpen.update((value) => !value);
    this.isLangMenuOpen.set(false);
    this.analyticsService.trackMenuOpen();
    if (this.platformService.isBrowser) {
      this.document.body.style.overflow = this.isMenuOpen() ? 'hidden' : '';
    }
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
    if (this.platformService.isBrowser) {
      this.document.body.style.overflow = '';
    }
  }

  protected toggleLangMenu(): void {
    this.isLangMenuOpen.update((value) => !value);
  }

  protected closeLangMenu(): void {
    this.isLangMenuOpen.set(false);
  }

  protected selectLanguage(lang: Language): void {
    this.languageService.setLanguage(lang);
    this.closeLangMenu();
  }

  protected getCurrentFlag(): string {
    return this.languages.find(l => l.code === this.currentLang())?.flag || '🇧🇷';
  }

  protected onBrandClick(event: Event): void {
    event.preventDefault();
    this.platformService.scrollToTop();
    this.closeMenu();
  }

  protected onNavLinkClick(item: NavLink, event: Event): void {
    if (item.href === '#top' || item.href === '') {
      event.preventDefault();
      this.platformService.scrollToTop();
    }
    this.closeMenu();
  }
}
