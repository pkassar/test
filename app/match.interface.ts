import { Team } from './team.interface';

export interface Match<T> {
  seedMatches: Match<T>[];
  winner: Team;
  matchInfo?: T;
  id : number;
}
