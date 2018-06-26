import { Match } from './match.interface';
import { Team } from './team.interface';
import { FootballInfo } from './games/football/football-info.interface';

const team1: Team = {
  name: 'Bears'
};

const team2: Team = {
  name: 'Giants'
};

const team3: Team = {
  name: 'Patriots'
};

const team4: Team = {
  name: 'Lions'
};


const quarterFinal1: Match<FootballInfo> = {
  seedMatches: [],
  winner: team1,
  id:6
};

const quarterFinal2: Match<FootballInfo> = {
  seedMatches: [],
  winner: team2,
  id:5
};

const quarterFinal3: Match<FootballInfo> = {
  seedMatches: [],
  winner: team3,
  id:4
};

const quarterFinal4: Match<FootballInfo> = {
  seedMatches: [],
  winner: team4,
  id:3
};

const semiFinal1: Match<FootballInfo> = {
  seedMatches: [
    quarterFinal1,
    quarterFinal2
  ],
  winner: team1,
  matchInfo: {
    date: new Date(),
    home: {
      score: 12,
      touchDowns: 1,
      fieldGoals: 2,
    },
    away: {
      score: 9,
      touchDowns: 1,
      fieldGoals: 1,
    }
  },
  id:2
};

const semiFinal2: Match<FootballInfo> = {
  seedMatches: [
    quarterFinal3,
    quarterFinal4
  ],
  winner: team4,
  matchInfo: {
    date: new Date(),
    away: {
      score: 20,
      touchDowns: 2,
      fieldGoals: 2,
    },
    home: {
      score: 9,
      touchDowns: 1,
      fieldGoals: 1,
    }
  },
  id:1
};

export const footballMatch: Match<FootballInfo> = {
  seedMatches: [
    semiFinal1,
    semiFinal2,
    quarterFinal1
  ],
  winner: team1,
  matchInfo: {
    date: new Date(),
    home: {
      score: 15,
      touchDowns: 2,
      fieldGoals: 1,
    },
    away: {
      score: 9,
      touchDowns: 1,
      fieldGoals: 1,
    }
  },
  id : 0
};
