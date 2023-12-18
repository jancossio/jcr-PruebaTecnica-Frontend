import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-serie',
  standalone: true,
  imports: [],
  templateUrl: './serie.component.html',
  styleUrl: './serie.component.css'
})
export class SerieComponent{

  id:string='';
  tv:any = null;

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
      this.tv = result;
      console.log(this.tv);
    })
  }
}
