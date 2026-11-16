import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class PlatformService {
  private readonly platformId = inject(PLATFORM_ID);

  get isBrowser(): boolean {
    return isPlatformBrowser(this.platformId);
  }

  get isServer(): boolean {
    return isPlatformServer(this.platformId);
  }

  // Wrapper seguro para window.setInterval
  setInterval(callback: () => void, delay: number): number {
    if (this.isBrowser) {
      return window.setInterval(callback, delay);
    }
    return 0;
  }

  // Wrapper seguro para window.clearInterval
  clearInterval(id: number): void {
    if (this.isBrowser) {
      window.clearInterval(id);
    }
  }

  // Wrapper seguro para window.setTimeout
  setTimeout(callback: () => void, delay: number): number {
    if (this.isBrowser) {
      return window.setTimeout(callback, delay);
    }
    return 0;
  }

  // Wrapper seguro para window.clearTimeout
  clearTimeout(id: number): void {
    if (this.isBrowser) {
      window.clearTimeout(id);
    }
  }

  // Wrapper seguro para localStorage
  getItem(key: string): string | null {
    if (this.isBrowser) {
      return localStorage.getItem(key);
    }
    return null;
  }

  setItem(key: string, value: string): void {
    if (this.isBrowser) {
      localStorage.setItem(key, value);
    }
  }

  removeItem(key: string): void {
    if (this.isBrowser) {
      localStorage.removeItem(key);
    }
  }

  // Wrapper seguro para sessionStorage
  getSessionItem(key: string): string | null {
    if (this.isBrowser) {
      return sessionStorage.getItem(key);
    }
    return null;
  }

  setSessionItem(key: string, value: string): void {
    if (this.isBrowser) {
      sessionStorage.setItem(key, value);
    }
  }

  // Wrapper seguro para window.scrollTo
  scrollTo(x: number, y: number): void {
    if (this.isBrowser) {
      window.scrollTo(x, y);
    }
  }

  // Scroll suave para o topo sem alterar a URL
  scrollToTop(): void {
    if (this.isBrowser) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  // Wrapper seguro para window.location
  get location(): Location | null {
    return this.isBrowser ? window.location : null;
  }

  // Wrapper seguro para navigator
  get userAgent(): string {
    if (this.isBrowser) {
      return navigator.userAgent;
    }
    return '';
  }
}
