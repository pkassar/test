export interface FootballTeamStats {
  score: number;
  touchDowns: number;
  fieldGoals: number;
}

export interface FootballInfo {
  date: Date;
  home: FootballTeamStats;
  away: FootballTeamStats;
}
