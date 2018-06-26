import { Component, Input, OnInit } from '@angular/core';
import { FootballInfo } from './football-info.interface';

@Component({
  selector: 'sf-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.less']
})
export class FootballComponent implements OnInit {

  @Input() matchInfo: FootballInfo;

  constructor() { }

  ngOnInit() {
  }

}
