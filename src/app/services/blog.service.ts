import { Injectable } from '@angular/core';
import { Article } from '../components/blog/blog';

@Injectable({ providedIn: 'root' })
export class BlogService {
  getFeaturedArticles(): Article[] {
    return [
      {
        image: '/assets/images/blog-1.jpg',
        title: 'Como montar um prato equilibrado para o dia a dia',
        summary: 'Estratégias simples para melhorar sua alimentação sem dietas restritivas.',
        link: '#'
      },
      {
        image: '/assets/images/blog-2.jpg',
        title: 'Nutrição para mais disposição e foco no trabalho',
        summary: 'Alimentos que apoiam energia mental e evitam picos de açúcar.',
        link: '#'
      },
      {
        image: '/assets/images/blog-3.jpg',
        title: 'O papel da nutrição no equilíbrio hormonal feminino',
        summary: 'Descubra como pequenas mudanças podem melhorar seu ciclo e bem-estar.',
        link: '#'
      }
    ];
  }
}
