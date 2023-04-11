import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-syntax',
  templateUrl: './template-syntax.component.html',
  styleUrls: ['./template-syntax.component.css']
})
export class TemplateSyntaxComponent implements OnInit {
  currentHero ={
    name:'laxman',
    power:200
  }

  heroImageUrl = './assets/hero.jpg';
  formNotChanged = true;
  canSave = true;
  isUnchanged = false;
  isSpecial = false;

  classConditions = {
    'modified': !this.isUnchanged,
    'savable': this.canSave,
    'special': this.isSpecial
  }

  constructor() { }

  ngOnInit(): void {
  }

  getVal(){
    return 1;
  }

  getHeroImage(){
    return this.heroImageUrl;
  }
}
