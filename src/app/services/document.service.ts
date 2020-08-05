import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root',
})
export class DocumentService {
  constructor(private http: Http) { }

  getDocument() {
    return new Promise(resolve => {
      this.http.get('assets/data/document.html')
      .subscribe(response => {
        resolve(response.text());
      });
    });
  }
}
