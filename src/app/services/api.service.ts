import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZjQ2Yjc1YTAxZDhmNGUzMTc4MzEyZWM0NTA3NmM5ZCIsInN1YiI6IjY1ODA2ZTNmMmY4ZDA5MDkzMmE3YWM1YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.afUN_adlhQu7_fJhjrlVYackFuYWkL-Jlh7sY1vxcXQ';
const urlMovies = 'https://api.themoviedb.org/3/movie/?api_key=<<';
const urlSeries = 'https://api.themoviedb.org/3/tv/?api_key=<<';
const urlMovie = 'https://api.themoviedb.org/3/movie/';
const urlSerie = 'https://api.themoviedb.org/3/tv/';
const apiKey = 'df46b75a01d8f4e3178312ec45076c9d';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  http = inject(HttpClient);


  constructor() { }

  getAllMovies():Observable<any[]>{

    let header = new HttpHeaders().set("Authorization: ", token);
    console.log(header);
    console.log(urlMovies+apiKey+'>>'+"Authorization: " +token + '"');
    return this.http.get<any[]>(urlMovies+apiKey+'>> ', {headers : {"Authorization": token}   
  });
  }

  getAllSeries():Observable<any[]>{

    let header = new HttpHeaders().set("Authorization", token);
    return this.http.get<any[]>(urlSeries+apiKey+'>>', {headers : {"Authorization": token}   
  });
  }

    getMovie(id:any):Observable<any>{

      let header = new HttpHeaders().set("Authorization", token);
      return this.http.get(urlMovie+id+'?api_key=<<'+apiKey+'>>', {headers : {"Authorization": token}
    });
  }

  getSerie(id:any):Observable<any>{

    let header = new HttpHeaders().set("Authorization", token);
    return this.http.get(urlSerie+id+'?api_key=<<'+apiKey+'>>', {headers : {"Authorization": token}
  });
}
}