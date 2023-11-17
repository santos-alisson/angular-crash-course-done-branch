import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {CardComponent} from '../shared/components/card/card.component';

@Component({
  selector: 'app-template-component',
  templateUrl: './template-component.component.html',
  styleUrls: ['./template-component.component.scss']
})
export class TemplateComponent implements OnInit, AfterViewInit {
  textArray: Array<string> = [];
  @ViewChild('card2') cardChild2?: CardComponent; 

  constructor() {

  }

  ngOnInit(): void {
    this.textArray.push("texto 1");
    this.textArray.push("texto 2");
    this.textArray.push("texto 3");
  }

  ngAfterViewInit(): void {
    console.log(this.cardChild2);
  }

}
