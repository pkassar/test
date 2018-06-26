import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FootballComponent } from './games/football/football.component';
import { SoccerComponent } from './games/soccer/soccer.component';
import { MatchService} from './services/match.service';
import { BracketComponent } from './bracket/bracket.component';


@NgModule({
  declarations: [
    AppComponent,
    FootballComponent,
    SoccerComponent,
    BracketComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [MatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
