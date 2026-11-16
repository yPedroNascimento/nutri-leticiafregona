import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AgendamentoService {
  bookConsultation(payload: { name: string; date: string; email: string }): Promise<boolean> {
    // Mock de agendamento; integrar Calendly ou API posteriormente.
    console.log('Agendamento solicitado:', payload);
    return Promise.resolve(true);
  }
}
