import { Team } from "../team/team";

export class Match {
    matchId : number;
    hostTeam : Team;
    guestTeam : Team;
    date  : string;
    time : string;
    goalsByHost : number;
    goalsByGuest : number;
    finished : boolean;
}