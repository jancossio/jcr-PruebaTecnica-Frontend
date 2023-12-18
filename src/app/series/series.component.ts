import { Component } from '@angular/core';
import { ApiService } from '../services/api.service'
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-series',
  standalone: true,
  imports: [],
  templateUrl: './series.component.html',
  styleUrl: './series.component.css'
})
export class SeriesComponent {

  series:any = null;

  constructor(private apiService:ApiService){}

  ngOnInit(){
    this.obtainSeries();
  }

  obtainSeries(){
      this.apiService.getAllSeries()
      .subscribe(result => {this.series = result})
  }
}
