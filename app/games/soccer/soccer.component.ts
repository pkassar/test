import { Component, Input, OnInit } from '@angular/core';
import { SoccerInfo } from './soccer-info.interface';
import { Match } from '../../match.interface';
import { MatchService } from '../../services/match.service';

@Component({
  selector: 'sf-soccer',
  templateUrl: './soccer.component.html',
  styleUrls: ['./soccer.component.less']
})
export class SoccerComponent implements OnInit {
  private matchesPerLevel : Match<SoccerInfo>[][] = []
  @Input() matchInfo: SoccerInfo;

  constructor(private matches : MatchService) { }

  ngOnInit() {
         // Make it typed, so that it's easier to understand
         let info = this.matches.getSoccerMatchesLevelwise()

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
