export interface SoccerTeamStats {
  goals: number;
  penalties: number;
}

export interface SoccerInfo {
  date: Date;
  home: SoccerTeamStats;
  away: SoccerTeamStats;
}
