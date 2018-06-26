import { Component, Input, OnInit } from '@angular/core';
import { SoccerInfo } from './soccer-info.interface';

@Component({
  selector: 'sf-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.less']
})
export class SoccerComponent implements OnInit {

  @Input() matchInfo: SoccerInfo;

  constructor() { }

  ngOnInit() {
  }

}
