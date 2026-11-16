import { Component, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { APP_LINKS } from '../../config/links';
import { CONTENT } from '../../config/content';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  private readonly languageService = inject(LanguageService);

  protected readonly content = computed(() => CONTENT[this.languageService.getLanguage()()] || CONTENT['pt']);

  protected readonly quickLinks = computed(() => {
    const links = this.content().header.navLinks;
    const wantedHrefs = ['#sobre', '#servicos', '#trajetoria', '#cta-final'];
    return links.filter(link => wantedHrefs.includes(link.href));
  });

  protected readonly socials = [
    { label: 'Instagram', href: APP_LINKS.instagram },
    { label: 'LinkedIn', href: APP_LINKS.linkedin },
    { label: 'WhatsApp', href: APP_LINKS.whatsapp },
    { label: 'Email', href: APP_LINKS.email }
  ];

  protected readonly contactEmail = APP_LINKS.contactEmail;
  protected readonly contactPhone = APP_LINKS.contactPhone;
  protected readonly emailLink = APP_LINKS.email;
  protected readonly whatsappLink = APP_LINKS.whatsapp;

  protected mapsLink(address: string): string {
    return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  }
}
