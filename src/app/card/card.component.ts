import { Component, Input, OnInit } from '@angular/core';
import { itemInfo } from '../shared-file/shared-class';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() cardItem:itemInfo = new itemInfo();

  constructor() { }

  ngOnInit(): void {
  }

}
