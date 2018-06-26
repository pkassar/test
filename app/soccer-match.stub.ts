import { Match } from './match.interface';
import { Team } from './team.interface';
import { SoccerInfo } from './games/soccer/soccer-info.interface';

const team1: Team = {
  name: 'Manchester'
};

const team2: Team = {
  name: 'Chelsea'
};

const team3: Team = {
  name: 'Fordham'
};

const team4: Team = {
  name: 'Someotherteam'
};


const quarterFinal1: Match<SoccerInfo> = {
  seedMatches: [],
  winner: team1,
  id: 1
};

const quarterFinal2: Match<SoccerInfo> = {
  seedMatches: [],
  winner: team2,
  id: 2
};

const quarterFinal3: Match<SoccerInfo> = {
  seedMatches: [],
  winner: team3,
  id: 3
};

const quarterFinal4: Match<SoccerInfo> = {
  seedMatches: [],
  winner: team4,
  id: 4
};

const semiFinal1: Match<SoccerInfo> = {
  seedMatches: [
    quarterFinal1,
    quarterFinal2
  ],
  winner: team1,
  matchInfo: {
    date: new Date(),
    home: {
      goals: 3,
      penalties: 0
    },
    away: {
      goals: 2,
      penalties: 0
    }
  },
  id: 7
};

const semiFinal2: Match<SoccerInfo> = {
  seedMatches: [
    quarterFinal3,
    quarterFinal4
  ],
  id: 5,
  winner: team4,
  matchInfo: {
    date: new Date(),
    home: {
      goals: 0,
      penalties: 0
    },
    away: {
      goals: 2,
      penalties: 0
    }
  }
};

export const soccerMatch: Match<SoccerInfo> = {
  seedMatches: [
    semiFinal1,
    semiFinal2
  ],
  id: 6,
  winner: team1,
  matchInfo: {
    date: new Date(),
    home: {
      goals: 3,
      penalties: 0
    },
    away: {
      goals: 1,
      penalties: 0
    }
  }
};
