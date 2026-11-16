import { Component, inject, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CONTENT } from '../../config/content';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-trajetoria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trajetoria.component.html',
  styleUrls: ['./trajetoria.component.scss']
})
export class TrajetoriaComponent {
  private readonly languageService = inject(LanguageService);
  protected readonly content = computed(() => CONTENT[this.languageService.getLanguage()()] || CONTENT['pt']);

  protected readonly activeCategory = signal('todos');

  protected readonly items = computed(() => {
    const active = this.activeCategory();
    const all = this.content().trajetoria.items;
    return active === 'todos' ? all : all.filter((item) => item.category === active);
  });

  protected categoryLabel(id: string): string {
    return this.content().trajetoria.categories.find((category) => category.id === id)?.label ?? '';
  }

  protected select(id: string): void {
    this.activeCategory.set(id);
  }
}
