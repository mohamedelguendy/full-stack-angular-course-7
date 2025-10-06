import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Data {
  GetMessage(): string {
    return 'Hello from Data Service!';
  }
}
