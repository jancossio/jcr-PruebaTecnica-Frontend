import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { SeriesComponent } from './series/series.component';
import { PeliculaComponent } from './pelicula/pelicula.component';
import { SerieComponent } from './serie/serie.component';


export const routes: Routes = [

    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'peliculas',
        component: PeliculasComponent
    },
    {
        path: 'series',
        component: SeriesComponent
    },
    {
        path: 'peliculas/:id',
        component: PeliculaComponent
    },
    {
        path: 'series/:id',
        component: SerieComponent
    },
];
