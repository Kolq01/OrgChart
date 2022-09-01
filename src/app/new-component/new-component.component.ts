import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../services/persona.service';

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  title = 'client';
  public personas:Array<any> = []

  constructor(
    private personaService:PersonaService
  ){
    this.personaService.getPersonas().subscribe((resp: any)=>{
      this.personas = resp
    })
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
