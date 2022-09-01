import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = 'https://api.storecove.com/api/v2/shops'
  constructor(
    private http: HttpClient
  ) { 
    
    console.log('servicio persona')
  }
  getPersonas(){
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

    return this.http.get(this.url,{
      headers: header
    });
  }
}
