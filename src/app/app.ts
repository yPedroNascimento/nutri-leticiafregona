import { Component, signal, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { ServicosComponent } from './components/servicos/servicos.component';
import { MetodologiaComponent } from './components/metodologia/metodologia.component';
import { TrajetoriaComponent } from './components/trajetoria/trajetoria.component';
import { FaqComponent } from './components/faq/faq.component';
import { CtaFinalComponent } from './components/cta-final/cta-final.component';
import { FooterComponent } from './components/footer/footer.component';
import { SeoService } from './services/seo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    SobreComponent,
    ServicosComponent,
    TrajetoriaComponent,
    MetodologiaComponent,
    FaqComponent,
    CtaFinalComponent,
    FooterComponent
  ],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App implements OnInit {
  protected readonly title = signal('leticia-nutricionista');
  private readonly seoService = inject(SeoService);

  ngOnInit(): void {
    this.seoService.updateSeo();
    this.seoService.injectSchemaOrg();
  }
}
