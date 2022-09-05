import { Component, Input, OnInit } from '@angular/core';
import { TreeNode } from 'angular13-organization-chart';
import { PersonaService } from '../services/persona.service';

interface MyTreeNode extends TreeNode {
  name: string;
  description?: string;
  image?: string;
  children: MyTreeNode[];
}

@Component({
  selector: 'app-new-component',
  templateUrl: './new-component.component.html',
  styleUrls: ['./new-component.component.css']
})
export class NewComponentComponent implements OnInit {
  title = 'client';
  //public personas:<TreeNode> = []

  @Input()
  personas!: MyTreeNode[];

  constructor(
    private personaService:PersonaService
  ){

  }
  ngOnInit(): void {
    this.personaService.getPersonas().subscribe((data:any)=>{
      console.log(data)
      data.forEach(element => {
        console.log(element);
        this.personas.push(element)
      });
      this.personas = data;
    })
  }
}
