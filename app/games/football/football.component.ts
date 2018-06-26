import { Component, Input, OnInit } from '@angular/core';
import { FootballInfo } from './football-info.interface';
import { MatchService } from '../../services/match.service';
import { SoccerInfo } from '../soccer/soccer-info.interface';
import { Match } from '../../match.interface';

@Component({
  selector: 'sf-football',
  templateUrl: './football.component.html',
  styleUrls: ['./football.component.less']
})
export class FootballComponent implements OnInit {
  private matchesPerLevel : Match<FootballInfo>[][] = []
  
  @Input() matchInfo: FootballInfo;

  constructor(
    private matches : MatchService) {
   }

  ngOnInit() {
       // Make it typed, so that it's easier to understand
       let info = this.matches.getFootballMatchesLevelwise()

       //initialize for a max of 1000 levels
       for(let i = 0;i < 1000;i++)
         this.matchesPerLevel.push([]);

       var level = 0

       for(let id in info){
         for(var match of info[id])
           this.matchesPerLevel[level].push(match);

         level++;
       }
  }
}
