import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { PlatformService } from './platform.service';
import { APP_LINKS } from '../config/links';

export interface SeoConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private readonly meta = inject(Meta);
  private readonly title = inject(Title);
  private readonly document = inject(DOCUMENT);
  private readonly platformService = inject(PlatformService);

  private readonly defaultConfig: SeoConfig = {
    title: 'Letícia Fregona | Nutricionista Clínica em Obesidade e GLP-1 | CRN-3 86956',
    description: 'Nutricionista com foco em obesidade, microbiota intestinal e composição corporal. Pesquisadora FMUSP. Atendimento presencial e online.',
    keywords: 'nutricionista, obesidade, microbiota intestinal, composição corporal, GLP-1, análogos de GLP-1, cirurgia bariátrica, antropometria ISAK, recomposição corporal, atendimento online',
    url: 'https://nutrileticia.com',
    type: 'website'
  };

  updateSeo(config?: Partial<SeoConfig>): void {
    const seo = { ...this.defaultConfig, ...config };

    this.title.setTitle(seo.title);
    this.meta.updateTag({ name: 'description', content: seo.description });
    if (seo.keywords) {
      this.meta.updateTag({ name: 'keywords', content: seo.keywords });
    }

    // Open Graph
    this.meta.updateTag({ property: 'og:title', content: seo.title });
    this.meta.updateTag({ property: 'og:description', content: seo.description });
    this.meta.updateTag({ property: 'og:type', content: seo.type || 'website' });
    this.meta.updateTag({ property: 'og:url', content: seo.url || '' });
    if (seo.image) {
      this.meta.updateTag({ property: 'og:image', content: seo.image });
    }

    // Twitter Card
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: seo.title });
    this.meta.updateTag({ name: 'twitter:description', content: seo.description });
  }

  injectSchemaOrg(): void {
    if (!this.platformService.isBrowser) return;

    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Letícia Fregona',
      jobTitle: 'Nutricionista',
      description: 'Nutricionista clínica (CRN-3 86956) com foco em obesidade, microbiota intestinal e composição corporal. Pesquisadora no MetaNutri, FMUSP.',
      identifier: 'CRN-3 86956',
      telephone: '+55 11 97255-2959',
      email: 'nutri.leticiafregona@gmail.com',
      url: 'https://nutrileticia.com',
      knowsAbout: ['Obesidade', 'Microbiota intestinal', 'Composição corporal', 'Análogos de GLP-1', 'Nutrição na cirurgia bariátrica', 'Antropometria ISAK'],
      sameAs: [APP_LINKS.linkedin, APP_LINKS.instagram]
    };

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    this.document.head.appendChild(script);
  }
}
