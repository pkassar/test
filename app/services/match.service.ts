import { Component, Input, OnInit, Injectable } from '@angular/core';
import { Match } from '../match.interface';
import { footballMatch } from '../football-match.stub';
import { soccerMatch} from '../soccer-match.stub';
import { SoccerInfo } from '../games/soccer/soccer-info.interface';
import { FootballInfo } from '../games/football/football-info.interface';

@Injectable()
export class MatchService {


  ngOnInit() {
  }

  // Obtain the matches that we will visualize
  private getMatchToLevelMapping(isFootball : boolean) {

    let levelMap = new Map<number,any[]>();
    if(isFootball)
      levelMap[1000] = [footballMatch]
    else
      levelMap[1000]= [soccerMatch]

    if(isFootball)
      this.getMatches(footballMatch,levelMap, 999);
    else{
      this.getMatches(soccerMatch,levelMap, 999);
    }

    return levelMap
  }


  public getFootballMatchesLevelwise(){
    return this.getMatchToLevelMapping(true)
  }

  public getSoccerMatchesLevelwise(){
    return this.getMatchToLevelMapping(false)
  }

  //    Create the graph of the matches by 
  // using the final match
  private getMatches<T>(final : Match<T>, 
                    levelMap,
                    currentLevel : number){
    for(let seedMatch of final.seedMatches){
      if(levelMap[currentLevel]==null)levelMap[currentLevel] = []
      levelMap[currentLevel].push(seedMatch);
      this.getMatches(seedMatch,levelMap,currentLevel-1)
    }
    
    return levelMap;
  }

}
