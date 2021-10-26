import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: string[] = [];

  add(message: string): void {
    this.messages.push(message);
  }

  clear(): void {
    this.messages = [];
  }
}
// FIFO = F + IFO
// LIFO = L + IFO
// IFO = In First Out
// F = First
// L = Last
// ARRAY = FIFO
