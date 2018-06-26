import { Component, OnInit ,Input} from '@angular/core';
import { SoccerComponent } from '../games/soccer/soccer.component';
import { SoccerInfo } from '../games/soccer/soccer-info.interface';
import { MatchService} from '../services/match.service';
import { FootballInfo } from '../games/football/football-info.interface';
import { RecurseVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Match } from '../match.interface';

@Component({
  selector: 'sf-bracket',
  templateUrl: './bracket.component.html',
  styleUrls: ['./bracket.component.less']
})
export class BracketComponent implements OnInit {
  
  @Input()
  public football : boolean = false;

  constructor() 
  { 

  }
  ngOnInit() {

  }
}


