import { Routes } from '@angular/router';
import { VehicleListPage } from './components/vehicle-list-page/vehicle-list-page';
import { FilmListPage } from './components/film-list-page/film-list-page';

export const routes: Routes = [
    {path: 'vehicle-list', component: VehicleListPage},
    {path: 'film-list', component: FilmListPage},
    {path: '', pathMatch: 'full', redirectTo: 'vehicle-list'}
];
