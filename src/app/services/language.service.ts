import { Injectable, inject, signal, afterNextRender } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { PlatformService } from './platform.service';

export type Language = 'pt' | 'en';

export interface LanguageOption {
  code: Language;
  label: string;
  flag: string;
}

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly STORAGE_KEY = 'preferred-language';
  private readonly platformService = inject(PlatformService);
  private readonly document = inject(DOCUMENT);

  // Always start with the same language on server and client — reading
  // localStorage during the first render causes an SSR hydration mismatch
  // (NG0500) that breaks all event listeners on the page.
  private readonly currentLanguage = signal<Language>('pt');

  readonly availableLanguages: LanguageOption[] = [
    { code: 'pt', label: 'PT-BR', flag: '🇧🇷' },
    { code: 'en', label: 'EN-US', flag: '🇺🇸' }
  ];

  constructor() {
    afterNextRender(() => {
      const stored = this.platformService.getItem(this.STORAGE_KEY) as Language | null;
      if (stored && this.availableLanguages.some(l => l.code === stored)) {
        this.currentLanguage.set(stored);
        this.document.documentElement.lang = stored;
      }
    });
  }

  getLanguage() {
    return this.currentLanguage.asReadonly();
  }

  setLanguage(lang: Language): void {
    this.currentLanguage.set(lang);
    this.document.documentElement.lang = lang;
    this.platformService.setItem(this.STORAGE_KEY, lang);
  }
}
