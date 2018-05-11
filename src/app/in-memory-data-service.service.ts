import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataServiceService implements InMemoryDbService {

  createDb() {
    let matches = [
      {
          "id" : 1,
          "hostTeam" : 
          {
              "id": 1,
              "code" : "RUS",
              "name" : "Russia",
              "flag_small" : "assets/images/rus.png"
          },
          "guestTeam" : 
          {
              "id" : 2,
              "code" : "KSA",
              "name" : "Saudi Arabia",
              "flag_small" : "assets/images/ksa.png"
          },
          "date" : "14 Jun 2018",
          "time" : "17:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 2,
          "hostTeam" : 
          {
              "id" : 3,
              "code" : "EGY",
              "name" : "Egypt",
              "flag_small" : "assets/images/egy.png"
          },
          "guestTeam" : 
          {
              "id" : 4,
              "code" : "URU",
              "name" : "Uruguay",
              "flag_small" : "assets/images/uru.png"
          },
          "date" : "15 Jun 2018",
          "time" : "14:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 3,
          "hostTeam" : 
          {
              "id" : 5,
              "code" : "POR",
              "name" : "Portugal",
              "flag_small" : "assets/images/por.png"
          },
          "guestTeam" : 
          {
              "id" : 6,
              "code" : "ESP",
              "name" : "Spain",
              "flag_small" : "assets/images/esp.png"
          },
          "date" : "15 Jun 2018",
          "time" : "20:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 4,
          "hostTeam" : 
          {
              "id" : 7,
              "code" : "MAR",
              "name" : "Morocco",
              "flag_small" : "assets/images/mar.png"
          },
          "guestTeam" : 
          {
              "id" : 8,
              "code" : "IRN",
              "name" : "IR Iran",
              "flag_small" : "assets/images/irn.png"
          },
          "date" : "15 Jun 2018",
          "time" : "17:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 5,
          "hostTeam" : 
          {
              "id" : 9,
              "code" : "FRA",
              "name" : "France",
              "flag_small" : "assets/images/fra.png"
          },
          "guestTeam" : 
          {
              "id" : 10,
              "code" : "AUS",
              "name" : "Australia",
              "flag_small" : "assets/images/aus.png"
          },
          "date" : "16 Jun 2018",
          "time" : "12:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 6,
          "hostTeam" : 
          {
              "id" : 11,
              "code" : "PER",
              "name" : "Peru",
              "flag_small" : "assets/images/per.png"
          },
          "guestTeam" : 
          {
              "id" : 12,
              "code" : "DEN",
              "name" : "Denmark",
              "flag_small" : "assets/images/den.png"
          },
          "date" : "16 Jun 2018",
          "time" : "18:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 7,
          "hostTeam" : 
          {
              "id" : 13,
              "code" : "ARG",
              "name" : "Argentina",
              "flag_small" : "assets/images/arg.png"
          },
          "guestTeam" : 
          {
              "id" : 14,
              "code" : "ISL",
              "name" : "Iceland",
              "flag_small" : "assets/images/isl.png"
          },
          "date" : "16 Jun 2018",
          "time" : "18:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 8,
          "hostTeam" : 
          {
              "id" : 15,
              "code" : "CRO",
              "name" : "Croatia",
              "flag_small" : "assets/images/cro.png"
          },
          "guestTeam" : 
          {
              "id" : 16,
              "code" : "NGA",
              "name" : "Nigeria",
              "flag_small" : "assets/images/nga.png"
          },
          "date" : "16 Jun 2018",
          "time" : "21:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 9,
          "hostTeam" : 
          {
              "id" : 17,
              "code" : "BRA",
              "name" : "Brazil",
              "flag_small" : "assets/images/bra.png"
          },
          "guestTeam" : 
          {
              "id" : 18,
              "code" : "SUI",
              "name" : "Switzerland",
              "flag_small" : "assets/images/sui.png"
          },
          "date" : "17 Jun 2018",
          "time" : "20:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 10,
          "hostTeam" : 
          {
              "id" : 19,
              "code" : "CRC",
              "name" : "Costa Rica",
              "flag_small" : "assets/images/crc.png"
          },
          "guestTeam" : 
          {
              "id" : 20,
              "code" : "SRB",
              "name" : "Serbia",
              "flag_small" : "assets/images/srb.png"
          },
          "date" : "17 Jun 2018",
          "time" : "14:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 11,
          "hostTeam" : 
          {
              "id" : 21,
              "code" : "GER",
              "name" : "Germany",
              "flag_small" : "assets/images/ger.png"
          },
          "guestTeam" : 
          {
              "id" : 22,
              "code" : "MEX",
              "name" : "Mexico",
              "flag_small" : "assets/images/mex.png"
          },
          "date" : "17 Jun 2018",
          "time" : "17:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 12,
          "hostTeam" : 
          {
              "id" : 23,
              "code" : "SWE",
              "name" : "Sweden",
              "flag_small" : "assets/images/swe.png"
          },
          "guestTeam" : 
          {
              "id" : 24,
              "code" : "KOR",
              "name" : "Korea Republic",
              "flag_small" : "assets/images/kor.png"
          },
          "date" : "18 Jun 2018",
          "time" : "14:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 13,
          "hostTeam" : 
          {
              "id" : 25,
              "code" : "BEL",
              "name" : "Belgium",
              "flag_small" : "assets/images/bel.png"
          },
          "guestTeam" : 
          {
              "id" : 26,
              "code" : "PAN",
              "name" : "Panama",
              "flag_small" : "assets/images/pan.png"
          },
          "date" : "18 Jun 2018",
          "time" : "17:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 14,
          "hostTeam" : 
          {
              "id" : 27,
              "code" : "TUN",
              "name" : "Tunisia",
              "flag_small" : "assets/images/tun.png"
          },
          "guestTeam" : 
          {
              "id" : 28,
              "code" : "ENG",
              "name" : "England",
              "flag_small" : "assets/images/eng.png"
          },
          "date" : "18 Jun 2018",
          "time" : "20:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 15,
          "hostTeam" : 
          {
              "id" : 29,
              "code" : "POL",
              "name" : "Poland",
              "flag_small" : "assets/images/pol.png"
          },
          "guestTeam" : 
          {
              "id" : 30,
              "code" : "SEN",
              "name" : "Senegal",
              "flag_small" : "assets/images/sen.png"
          },
          "date" : "19 Jun 2018",
          "time" : "17:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 16,
          "hostTeam" : 
          {
              "id" : 31,
              "code" : "COL",
              "name" : "Columbia",
              "flag_small" : "assets/images/col.png"
          },
          "guestTeam" : 
          {
              "id" : 32,
              "code" : "JPN",
              "name" : "Japan",
              "flag_small" : "assets/images/jpn.png"
          },
          "date" : "19 Jun 2018",
          "time" : "14:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" :17 ,
          "hostTeam" : 
          {
              "id": 1,
              "code" : "RUS",
              "name" : "Russia",
              "flag_small" : "assets/images/rus.png"
          },
          "guestTeam" : 
          {
              "id" : 3,
              "code" : "EGY",
              "name" : "Egypt",
              "flag_small" : "assets/images/egy.png"
          },
          "date" : "19 Jun 2018",
          "time" : "20:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 18,
          "hostTeam" : 
          {
              "id" : 4,
              "code" : "URU",
              "name" : "Uruguay",
              "flag_small" : "assets/images/uru.png"
          },
          "guestTeam" : 
          {
              "id" : 2,
              "code" : "KSA",
              "name" : "Saudi Arabia",
              "flag_small" : "assets/images/ksa.png"
          },
          "date" : "20 Jun 2018",
          "time" : "17:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 19,
          "hostTeam" : 
          {
              "id" : 5,
              "code" : "POR",
              "name" : "Portugal",
              "flag_small" : "assets/images/por.png"
          },
          "guestTeam" : 
          {
              "id" : 7,
              "code" : "MAR",
              "name" : "Morocco",
              "flag_small" : "assets/images/mar.png"
          },
          "date" : "20 Jun 2018",
          "time" : "14:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 20,
          "hostTeam" : 
          {
              "id" : 8,
              "code" : "IRN",
              "name" : "IR Iran",
              "flag_small" : "assets/images/irn.png"
          },
          "guestTeam" : 
          {
              "id" : 6,
              "code" : "ESP",
              "name" : "Spain",
              "flag_small" : "assets/images/esp.png"
          },
          "date" : "20 Jun 2018",
          "time" : "20:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 21,
          "hostTeam" : 
          {
              "id" : 9,
              "code" : "FRA",
              "name" : "France",
              "flag_small" : "assets/images/fra.png"
          },
          "guestTeam" : 
          {
              "id" : 11,
              "code" : "PER",
              "name" : "Peru",
              "flag_small" : "assets/images/per.png"
          },
          "date" : "21 Jun 2018",
          "time" : "17:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 22,
          "hostTeam" : 
          {
              "id" : 12,
              "code" : "DEN",
              "name" : "Denmark",
              "flag_small" : "assets/images/den.png"
          },
          "guestTeam" : 
          {
              "id" : 10,
              "code" : "AUS",
              "name" : "Australia",
              "flag_small" : "assets/images/aus.png"
          },
          "date" : "21 Jun 2018",
          "time" : "14:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" :23 ,
          "hostTeam" : 
          {
              "id" : 13,
              "code" : "ARG",
              "name" : "Argentina",
              "flag_small" : "assets/images/arg.png"
          },
          "guestTeam" : 
          {
              "id" : 15,
              "code" : "CRO",
              "name" : "Croatia",
              "flag_small" : "assets/images/cro.png"
          },
          "date" : "21 Jun 2018",
          "time" : "20:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 24,
          "hostTeam" : 
          {
              "id" : 16,
              "code" : "NGA",
              "name" : "Nigeria",
              "flag_small" : "assets/images/nga.png"
          },
          "guestTeam" : 
          {
              "id" : 14,
              "code" : "ISL",
              "name" : "Iceland",
              "flag_small" : "assets/images/isl.png"
          },
          "date" : "22 Jun 2018",
          "time" : "17:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 25,
          "hostTeam" : 
          {
              "id" : 17,
              "code" : "BRA",
              "name" : "Brazil",
              "flag_small" : "assets/images/bra.png"
          },
          "guestTeam" : 
          {
              "id" : 19,
              "code" : "CRC",
              "name" : "Costa Rica",
              "flag_small" : "assets/images/crc.png"
          },
          "date" : "22 Jun 2018",
          "time" : "14:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 26,
          "hostTeam" : 
          {
              "id" : 20,
              "code" : "SRB",
              "name" : "Serbia",
              "flag_small" : "assets/images/srb.png"
          },
          "guestTeam" : 
          {
              "id" : 18,
              "code" : "SUI",
              "name" : "Switzerland",
              "flag_small" : "assets/images/sui.png"
          },
          "date" : "22 Jun 2018",
          "time" : "20:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 27,
          "hostTeam" : 
          {
              "id" : 21,
              "code" : "GER",
              "name" : "Germany",
              "flag_small" : "assets/images/ger.png"
          },
          "guestTeam" : 
          {
              "id" : 23,
              "code" : "SWE",
              "name" : "Sweden",
              "flag_small" : "assets/images/swe.png"
          },
          "date" : "23 Jun 2018",
          "time" : "20:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 28,
          "hostTeam" : 
          {
              "id" : 24,
              "code" : "KOR",
              "name" : "Korea Republic",
              "flag_small" : "assets/images/kor.png"
          },
          "guestTeam" : 
          {
              "id" : 22,
              "code" : "MEX",
              "name" : "Mexico",
              "flag_small" : "assets/images/mex.png"
          },
          "date" : "23 Jun 2018",
          "time" : "17:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 29,
          "hostTeam" : 
          {
              "id" : 25,
              "code" : "BEL",
              "name" : "Belgium",
              "flag_small" : "assets/images/bel.png"
          },
          "guestTeam" : 
          {
              "id" : 27,
              "code" : "TUN",
              "name" : "Tunisia",
              "flag_small" : "assets/images/tun.png"
          },
          "date" : "23 Jun 2018",
          "time" : "14:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 30,
          "hostTeam" : 
          {
              "id" : 28,
              "code" : "ENG",
              "name" : "England",
              "flag_small" : "assets/images/eng.png"
          },
          "guestTeam" : 
          {
              "id" : 26,
              "code" : "PAN",
              "name" : "Panama",
              "flag_small" : "assets/images/pan.png"
          },
          "date" : "24 Jun 2018",
          "time" : "14:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 31,
          "hostTeam" : 
          {
              "id" : 29,
              "code" : "POL",
              "name" : "Poland",
              "flag_small" : "assets/images/pol.png"
          },
          "guestTeam" : 
          {
              "id" : 31,
              "code" : "COL",
              "name" : "Columbia",
              "flag_small" : "assets/images/col.png"
          },
          "date" : "24 Jun 2018",
          "time" : "20:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 32,
          "hostTeam" : 
          {
              "id" : 32,
              "code" : "JPN",
              "name" : "Japan",
              "flag_small" : "assets/images/jpn.png"
          },
          "guestTeam" : 
          {
              "id" : 30,
              "code" : "SEN",
              "name" : "Senegal",
              "flag_small" : "assets/images/sen.png"
          },
          "date" : "24 Jun 2018",
          "time" : "17:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 33,
          "hostTeam" : 
          {
              "id" : 4,
              "code" : "URU",
              "name" : "Uruguay",
              "flag_small" : "assets/images/uru.png"
          },
          "guestTeam" : 
          {
              "id": 1,
              "code" : "RUS",
              "name" : "Russia",
              "flag_small" : "assets/images/rus.png"
          },
          "date" : "25 Jun 2018",
          "time" : "16:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 34,
          "hostTeam" : 
          {
              "id" : 2,
              "code" : "KSA",
              "name" : "Saudi Arabia",
              "flag_small" : "assets/images/ksa.png"
          },
          "guestTeam" : 
          {
              "id" : 3,
              "code" : "EGY",
              "name" : "Egypt",
              "flag_small" : "assets/images/egy.png"
          },
          "date" : "25 Jun 2018",
          "time" : "16:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 35,
          "hostTeam" : 
          {
              "id" : 8,
              "code" : "IRN",
              "name" : "IR Iran",
              "flag_small" : "assets/images/irn.png"
          },
          "guestTeam" : 
          {
              "id" : 5,
              "code" : "POR",
              "name" : "Portugal",
              "flag_small" : "assets/images/por.png"
          },
          "date" : "25 Jun 2018",
          "time" : "20:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 36,
          "hostTeam" : 
          {
              "id" : 6,
              "code" : "ESP",
              "name" : "Spain",
              "flag_small" : "assets/images/esp.png"
          },
          "guestTeam" : 
          {
              "id" : 7,
              "code" : "MAR",
              "name" : "Morocco",
              "flag_small" : "assets/images/mar.png"
          },
          "date" : "25 Jun 2018",
          "time" : "20:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 37,
          "hostTeam" : 
          {
              "id" : 12,
              "code" : "DEN",
              "name" : "Denmark",
              "flag_small" : "assets/images/den.png"
          },
          "guestTeam" : 
          {
              "id" : 9,
              "code" : "FRA",
              "name" : "France",
              "flag_small" : "assets/images/fra.png"
          },
          "date" : "26 Jun 2018",
          "time" : "16:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 38,
          "hostTeam" : 
          {
              "id" : 10,
              "code" : "AUS",
              "name" : "Australia",
              "flag_small" : "assets/images/aus.png"
          },
          "guestTeam" : 
          {
              "id" : 11,
              "code" : "PER",
              "name" : "Peru",
              "flag_small" : "assets/images/per.png"
          },
          "date" : "26 Jun 2018",
          "time" : "16:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 39,
          "hostTeam" : 
          {
              "id" : 16,
              "code" : "NGA",
              "name" : "Nigeria",
              "flag_small" : "assets/images/nga.png"
          },
          "guestTeam" : 
          {
              "id" : 13,
              "code" : "ARG",
              "name" : "Argentina",
              "flag_small" : "assets/images/arg.png"
          },
          "date" : "26 Jun 2018",
          "time" : "20:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 40,
          "hostTeam" : 
          {
              "id" : 14,
              "code" : "ISL",
              "name" : "Iceland",
              "flag_small" : "assets/images/isl.png"
          },
          "guestTeam" : 
          {
              "id" : 15,
              "code" : "CRO",
              "name" : "Croatia",
              "flag_small" : "assets/images/cro.png"
          },
          "date" : "26 Jun 2018",
          "time" : "20:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 41,
          "hostTeam" : 
          {
              "id" : 20,
              "code" : "SRB",
              "name" : "Serbia",
              "flag_small" : "assets/images/srb.png"
          },
          "guestTeam" : 
          {
              "id" : 17,
              "code" : "BRA",
              "name" : "Brazil",
              "flag_small" : "assets/images/bra.png"
          },
          "date" : "27 Jun 2018",
          "time" : "20:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 42,
          "hostTeam" : 
          {
              "id" : 18,
              "code" : "SUI",
              "name" : "Switzerland",
              "flag_small" : "assets/images/sui.png"
          },
          "guestTeam" : 
          {
              "id" : 19,
              "code" : "CRC",
              "name" : "Costa Rica",
              "flag_small" : "assets/images/crc.png"
          },
          "date" : "27 Jun 2018",
          "time" : "20:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 43,
          "hostTeam" : 
          {
              "id" : 24,
              "code" : "KOR",
              "name" : "Korea Republic",
              "flag_small" : "assets/images/kor.png"
          },
          "guestTeam" : 
          {
              "id" : 21,
              "code" : "GER",
              "name" : "Germany",
              "flag_small" : "assets/images/ger.png"
          },
          "date" : "27 Jun 2018",
          "time" : "16:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 44,
          "hostTeam" : 
          {
              "id" : 22,
              "code" : "MEX",
              "name" : "Mexico",
              "flag_small" : "assets/images/mex.png"
          },
          "guestTeam" : 
          {
              "id" : 23,
              "code" : "SWE",
              "name" : "Sweden",
              "flag_small" : "assets/images/swe.png"
          },
          "date" : "27 Jun 2018",
          "time" : "16:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 45,
          "hostTeam" : 
          {
              "id" : 28,
              "code" : "ENG",
              "name" : "England",
              "flag_small" : "assets/images/eng.png"
          },
          "guestTeam" : 
          {
              "id" : 25,
              "code" : "BEL",
              "name" : "Belgium",
              "flag_small" : "assets/images/bel.png"
          },
          "date" : "28 Jun 2018",
          "time" : "20:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 46,
          "hostTeam" : 
          {
              "id" : 26,
              "code" : "PAN",
              "name" : "Panama",
              "flag_small" : "assets/images/pan.png"
          },
          "guestTeam" : 
          {
              "id" : 27,
              "code" : "TUN",
              "name" : "Tunisia",
              "flag_small" : "assets/images/tun.png"
          },
          "date" : "28 Jun 2018",
          "time" : "20:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 47,
          "hostTeam" : 
          {
              "id" : 32,
              "code" : "JPN",
              "name" : "Japan",
              "flag_small" : "assets/images/jpn.png"
          },
          "guestTeam" : 
          {
              "id" : 29,
              "code" : "POL",
              "name" : "Poland",
              "flag_small" : "assets/images/pol.png"
          },
          "date" : "28 Jun 2018",
          "time" : "16:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 48,
          "hostTeam" : 
          {
              "id" : 30,
              "code" : "SEN",
              "name" : "Senegal",
              "flag_small" : "assets/images/sen.png"
          },
          "guestTeam" : 
          {
              "id" : 31,
              "code" : "COL",
              "name" : "Columbia",
              "flag_small" : "assets/images/col.png"
          },
          "date" : "28 Jun 2018",
          "time" : "16:00",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 49,
          "hostTeam" : {},
          "guestTeam" : {},
          "date" : "30 Jun 2018",
          "time" : "21:00 (Local time)",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 50,
          "hostTeam" : {},
          "guestTeam" : {},
          "date" : "30 Jun 2018",
          "time" : "17:00 (Local time)",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 51,
          "hostTeam" : {},
          "guestTeam" : {},
          "date" : "1 Jul 2018",
          "time" : "17:00 (Local time)",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 52,
          "hostTeam" : {},
          "guestTeam" : {},
          "date" : "1 Jul 2018",
          "time" : "21:00 (Local time)",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 53,
          "hostTeam" : {},
          "guestTeam" : {},
          "date" : "2 Jul 2018",
          "time" : "18:00 (Local time)",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 54,
          "hostTeam" : {},
          "guestTeam" : {},
          "date" : "2 Jul 2018",
          "time" : "21:00 (Local time)",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 55,
          "hostTeam" : {},
          "guestTeam" : {},
          "date" : "3 Jul 2018",
          "time" : "17:00 (Local time)",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 56,
          "hostTeam" : {},
          "guestTeam" : {},
          "date" : "3 Jul 2018",
          "time" : "21:00 (Local time)",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 57,
          "hostTeam" : {},
          "guestTeam" : {},
          "date" : "6 Jul 2018",
          "time" : "17:00 (Local time)",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 58,
          "hostTeam" : {},
          "guestTeam" : {},
          "date" : "6 Jul 2018",
          "time" : "21:00 (Local time)",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 59,
          "hostTeam" : {},
          "guestTeam" : {},
          "date" : "7 Jul 2018",
          "time" : "21:00 (Local time)",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 60,
          "hostTeam" : {},
          "guestTeam" : {},
          "date" : "7 Jul 2018",
          "time" : "18:00 (Local time)",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 61,
          "hostTeam" : {},
          "guestTeam" : {},
          "date" : "10 Jul 2018",
          "time" : "21:00 (Local time)",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 62,
          "hostTeam" : {},
          "guestTeam" : {},
          "date" : "11 Jul 2018",
          "time" : "21:00 (Local time)",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 63,
          "hostTeam" : {},
          "guestTeam" : {},
          "date" : "14 Jul 2018",
          "time" : "17:00 (Local time)",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      },
      {
          "id" : 64,
          "hostTeam" : {},
          "guestTeam" : {},
          "date" : "15 Jul 2018",
          "time" : "18:00 (Local time)",
          "goalsByHost" : 0,
          "goalsByGuest" : 0,
          "finished" : false
      }
  ];

  let groups = [
    {
        "name" : "A",
        "id" : 1,
        "teams" : [
            {
                "id": 1,
                "code" : "RUS",
                "name" : "Russia",
                "flag_small" : "assets/images/rus.png"
            },
            {
                "id" : 2,
                "code" : "KSA",
                "name" : "Saudi Arabia",
                "flag_small" : "assets/images/ksa.png"
            },
            {
                "id" : 3,
                "code" : "EGY",
                "name" : "Egypt",
                "flag_small" : "assets/images/egy.png"
            },
            {
                "id" : 4,
                "code" : "URU",
                "name" : "Uruguay",
                "flag_small" : "assets/images/uru.png"
            }
        ],
        "matches" : [1,2,17,18,33,34]
    },
    {
        "name" : "B",
        "id" : 2,
        "teams" : [
            {
                "id" : 5,
                "code" : "POR",
                "name" : "Portugal",
                "flag_small" : "assets/images/por.png"
            },
            {
                "id" : 6,
                "code" : "ESP",
                "name" : "Spain",
                "flag_small" : "assets/images/esp.png"
            },
            {
                "id" : 7,
                "code" : "MAR",
                "name" : "Morocco",
                "flag_small" : "assets/images/mar.png"
            },
            {
                "id" : 8,
                "code" : "IRN",
                "name" : "IR Iran",
                "flag_small" : "assets/images/irn.png"
            }
        ],
        "matches" : [3,4,19,20,35,36]
    },
    {
        "name" : "C",
        "id" : 3,
        "teams" : [
            {
                "id" : 9,
                "code" : "FRA",
                "name" : "France",
                "flag_small" : "assets/images/fra.png"
            },
            {
                "id" : 10,
                "code" : "AUS",
                "name" : "Australia",
                "flag_small" : "assets/images/aus.png"
            },
            {
                "id" : 11,
                "code" : "PER",
                "name" : "Peru",
                "flag_small" : "assets/images/per.png"
            },
            {
                "id" : 12,
                "code" : "DEN",
                "name" : "Denmark",
                "flag_small" : "assets/images/den.png"
            }
        ],
        "matches" : [5,6,21,22,37,38]
    },
    {
        "name" : "D",
        "id" : 4,
        "teams" : [
            {
                "id" : 13,
                "code" : "ARG",
                "name" : "Argentina",
                "flag_small" : "assets/images/arg.png"
            },
            {
                "id" : 14,
                "code" : "ISL",
                "name" : "Iceland",
                "flag_small" : "assets/images/isl.png"
            },
            {
                "id" : 15,
                "code" : "CRO",
                "name" : "Croatia",
                "flag_small" : "assets/images/cro.png"
            },
            {
                "id" : 16,
                "code" : "NGA",
                "name" : "Nigeria",
                "flag_small" : "assets/images/nga.png"
            }
        ],
        "matches" : [7,8,23,24,39,40]
    },
    {
        "name" : "E",
        "id" : 5,
        "teams" : [
            {
                "id" : 17,
                "code" : "BRA",
                "name" : "Brazil",
                "flag_small" : "assets/images/bra.png"
            },
            {
                "id" : 18,
                "code" : "SUI",
                "name" : "Switzerland",
                "flag_small" : "assets/images/sui.png"
            },
            {
                "id" : 19,
                "code" : "CRC",
                "name" : "Costa Rica",
                "flag_small" : "assets/images/crc.png"
            },
            {
                "id" : 20,
                "code" : "SRB",
                "name" : "Serbia",
                "flag_small" : "assets/images/srb.png"
            }
        ],
        "matches" : [9,10,25,26,41,42]
    },
    {
        "name" : "F",
        "id" : 6,
        "teams" : [
            {
                "id" : 21,
                "code" : "GER",
                "name" : "Germany",
                "flag_small" : "assets/images/ger.png"
            },
            {
                "id" : 22,
                "code" : "MEX",
                "name" : "Mexico",
                "flag_small" : "assets/images/mex.png"
            },
            {
                "id" : 23,
                "code" : "SWE",
                "name" : "Sweden",
                "flag_small" : "assets/images/swe.png"
            },
            {
                "id" : 24,
                "code" : "KOR",
                "name" : "Korea Republic",
                "flag_small" : "assets/images/kor.png"
            }
        ],
        "matches" : [11,12,27,28,43,44]
    },
    {
        "name" : "G",
        "id" : 7,
        "teams" : [
            {
                "id" : 25,
                "code" : "BEL",
                "name" : "Belgium",
                "flag_small" : "assets/images/bel.png"
            },
            {
                "id" : 26,
                "code" : "PAN",
                "name" : "Panama",
                "flag_small" : "assets/images/pan.png"
            },
            {
                "id" : 27,
                "code" : "TUN",
                "name" : "Tunisia",
                "flag_small" : "assets/images/tun.png"
            },
            {
                "id" : 28,
                "code" : "ENG",
                "name" : "England",
                "flag_small" : "assets/images/eng.png"
            }
        ],
        "matches" : [13,14,29,30,45,46]
    },
    {
        "name" : "H",
        "id" : 8,
        "teams" : [
            {
                "id" : 29,
                "code" : "POL",
                "name" : "Poland",
                "flag_small" : "assets/images/pol.png"
            },
            {
                "id" : 30,
                "code" : "SEN",
                "name" : "Senegal",
                "flag_small" : "assets/images/sen.png"
            },
            {
                "id" : 31,
                "code" : "COL",
                "name" : "Columbia",
                "flag_small" : "assets/images/col.png"
            },
            {
                "id" : 32,
                "code" : "JPN",
                "name" : "Japan",
                "flag_small" : "assets/images/jpn.png"
            }
        ],
        "matches" : [15,16,31,32,47,48]
    }

];

let teams =
 [
  {
    "id": 1,
    "code" : "RUS",
    "name" : "Russia",
    "flag_small" : "assets/images/rus.png"
  },
  {
    "id" : 2,
    "code" : "KSA",
    "name" : "Saudi Arabia",
    "flag_small" : "assets/images/ksa.png"
  },
  {
    "id" : 3,
    "code" : "EGY",
    "name" : "Egypt",
    "flag_small" : "assets/images/egy.png"
  },
  {
    "id" : 4,
    "code" : "URU",
    "name" : "Uruguay",
    "flag_small" : "assets/images/uru.png"
  },
  {
    "id" : 5,
    "code" : "POR",
    "name" : "Portugal",
    "flag_small" : "assets/images/por.png"
  },
  {
    "id" : 6,
    "code" : "ESP",
    "name" : "Spain",
    "flag_small" : "assets/images/esp.png"
  },
  {
    "id" : 7,
    "code" : "MAR",
    "name" : "Morocco",
    "flag_small" : "assets/images/mar.png"
  },
  {
    "id" : 8,
    "code" : "IRN",
    "name" : "IR Iran",
    "flag_small" : "assets/images/irn.png"
  },
  {
    "id" : 9,
    "code" : "FRA",
    "name" : "France",
    "flag_small" : "assets/images/fra.png"
  },
  {
    "id" : 10,
    "code" : "AUS",
    "name" : "Australia",
    "flag_small" : "assets/images/aus.png"
  },
  {
    "id" : 11,
    "code" : "PER",
    "name" : "Peru",
    "flag_small" : "assets/images/per.png"
  },
  {
    "id" : 12,
    "code" : "DEN",
    "name" : "Denmark",
    "flag_small" : "assets/images/den.png"
  },
  {
    "id" : 13,
    "code" : "ARG",
    "name" : "Argentina",
    "flag_small" : "assets/images/arg.png"
  },
  {
    "id" : 14,
    "code" : "ISL",
    "name" : "Iceland",
    "flag_small" : "assets/images/isl.png"
  },
  {
    "id" : 15,
    "code" : "CRO",
    "name" : "Croatia",
    "flag_small" : "assets/images/cro.png"
  },
  {
    "id" : 16,
    "code" : "NGA",
    "name" : "Nigeria",
    "flag_small" : "assets/images/nga.png"
  },
  {
    "id" : 17,
    "code" : "BRA",
    "name" : "Brazil",
    "flag_small" : "assets/images/bra.png"
  },
  {
    "id" : 18,
    "code" : "SUI",
    "name" : "Switzerland",
    "flag_small" : "assets/images/sui.png"
  },
  {
    "id" : 19,
    "code" : "CRC",
    "name" : "Costa Rica",
    "flag_small" : "assets/images/crc.png"
  },
  {
    "id" : 20,
    "code" : "SRB",
    "name" : "Serbia",
    "flag_small" : "assets/images/srb.png"
  },
  {
    "id" : 21,
    "code" : "GER",
    "name" : "Germany",
    "flag_small" : "assets/images/ger.png"
  },
  {
    "id" : 22,
    "code" : "MEX",
    "name" : "Mexico",
    "flag_small" : "assets/images/mex.png"
  },
  {
    "id" : 23,
    "code" : "SWE",
    "name" : "Sweden",
    "flag_small" : "assets/images/swe.png"
  },
  {
    "id" : 24,
    "code" : "KOR",
    "name" : "Korea Republic",
    "flag_small" : "assets/images/kor.png"
  },
  {
    "id" : 25,
    "code" : "BEL",
    "name" : "Belgium",
    "flag_small" : "assets/images/bel.png"
  },
  {
    "id" : 26,
    "code" : "PAN",
    "name" : "Panama",
    "flag_small" : "assets/images/pan.png"
  },
  {
    "id" : 27,
    "code" : "TUN",
    "name" : "Tunisia",
    "flag_small" : "assets/images/tun.png"
  },
  {
    "id" : 28,
    "code" : "ENG",
    "name" : "England",
    "flag_small" : "assets/images/eng.png"
  },
  {
    "id" : 29,
    "code" : "POL",
    "name" : "Poland",
    "flag_small" : "assets/images/pol.png"
  },
  {
    "id" : 30,
    "code" : "SEN",
    "name" : "Senegal",
    "flag_small" : "assets/images/sen.png"
  },
  {
    "id" : 31,
    "code" : "COL",
    "name" : "Columbia",
    "flag_small" : "assets/images/col.png"
  },
  {
    "id" : 32,
    "code" : "JPN",
    "name" : "Japan",
    "flag_small" : "assets/images/jpn.png"
  }
];


  return {matches, groups, teams};

  }
  constructor() { }
}
