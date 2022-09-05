import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = 'https://631114db19eb631f9d6ce17d.mockapi.io/api/v1/users'
  
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
