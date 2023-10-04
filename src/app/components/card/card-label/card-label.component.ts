import { Component , Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card-label',
  templateUrl: './card-label.component.html',
  styleUrls: ['./card-label.component.css']
})
export class CardLabelComponent implements OnInit{

  @Input() /*ESTE @INPUT em cima do gameLabel, diz que a string abaixo é do tipo INPUT*/
  gameLabel: string = "";

  constructor(){}

  ngOnInit(): void{

  }
}
