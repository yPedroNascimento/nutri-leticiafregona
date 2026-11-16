import { Injectable, inject } from '@angular/core';
import { APP_LINKS } from '../config/links';
import { PlatformService } from './platform.service';

@Injectable({
  providedIn: 'root'
})
export class WhatsAppService {
  private readonly platformService = inject(PlatformService);
  private readonly baseUrl = APP_LINKS.whatsapp;

  sendMessage(message: string): void {
    if (!this.platformService.isBrowser) return;
    const url = `${this.baseUrl}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  getConsultationLink(): string {
    return this.baseUrl;
  }

  getConsultationMessage(serviceName?: string): string {
    const base = 'Olá Letícia! Gostaria de agendar uma consulta.';
    if (serviceName) {
      return `${base} Tenho interesse em ${serviceName}.`;
    }
    return base;
  }
}
