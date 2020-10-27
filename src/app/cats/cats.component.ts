import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnInit {

  /**
   * Liste des chats.
   */
  chats = [
    {nom:"Miaou",couleur:"gris",age:12},
    {nom:"Miiou",couleur:"noir",age:17},
    {nom:"Maou",couleur:"blanc",age:22},
    {nom:"Mouii",couleur:"tigré",age:10},
  ]

  myStyles: {
    fontSize: "30px"
  }

  constructor() { }

  ngOnInit(): void {
  }

  onClick(chat: string): void{
    alert(`${chat} miaule`)
  }

}
