import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service'


@Component({
  selector: 'app-pelicula',
  standalone: true,
  imports: [],
  templateUrl: './pelicula.component.html',
  styleUrl: './pelicula.component.css'
})
export class PeliculaComponent implements OnInit{

  id:string='';
  movie:any = null;

  constructor(private route:ActivatedRoute, private service:ApiService){
  }

  ngOnInit(): void {
    this.route.params.subscribe(param => 
      this.id = param['id']);
      console.log("Getting..."+this.id);
      this.getMovie();
  }

  getMovie(){
    console.log("Calling..."+this.id);
    this.service.getMovie(this.id)
    .subscribe(result => {
      this.movie = result;
      console.log(this.movie);
    })
  }
}
