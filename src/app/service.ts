import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Service {
  getMessage(): Observable<string> {
    return of('Hello');
  }
}
