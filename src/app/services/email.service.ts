import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class EmailService {
  sendNewsletter(email: string): Promise<boolean> {
    // Mock service; no backend integrado ainda.
    console.log('Email cadastrado para newsletter:', email);
    return Promise.resolve(true);
  }

  sendContactMessage(payload: { name: string; email: string; message: string }): Promise<boolean> {
    console.log('Contato enviado:', payload);
    return Promise.resolve(true);
  }
}
