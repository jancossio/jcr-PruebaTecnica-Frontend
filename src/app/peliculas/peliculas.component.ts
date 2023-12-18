import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent implements OnInit {

  movies:any = null;

  constructor(private apiService:ApiService){
    console.log('Inicia');
  }

  ngOnInit(){
    console.log('Inicia');
    this.obtainMovies();
  }

  obtainMovies(){
    console.log('llama');
      this.apiService.getAllMovies()
      .subscribe(result => {this.movies = result})
  }
}
