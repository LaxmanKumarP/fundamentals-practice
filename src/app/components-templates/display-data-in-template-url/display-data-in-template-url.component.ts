import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-data-in-template-url',
  templateUrl: './display-data-in-template-url.component.html',
  styleUrls: ['./display-data-in-template-url.component.css']
})
export class DisplayDataInTemplateUrlComponent implements OnInit {
  title!: string;
  myHero!:string;
  heros:string[] = ['laxman','ram','hanuman','ravan'];
  

  constructor() { 
    this.title = 'list of heros';
    this.myHero = 'laxman';
    let age = 20;
  }

  ngOnInit(): void {
  }

}
