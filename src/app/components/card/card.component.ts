import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit{
  @Input()
  gameCover: string = "";
  @Input() /*ESTE @INPUT em cima do gameLabel, diz que a string abaixo é do tipo INPUT*/
  gameLabel: string = "";
  @Input()
  gameType: string = "DIGITAL PS5";
  @Input()
  gamePrice: string = "R$ 399,90";

  constructor() {}

  ngOnInit(): void {

  }
}
