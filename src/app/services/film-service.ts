import { HttpClient } from '@angular/common/http';
import { inject, Service } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmItemResponse } from '../interfaces/film-item-response';
import { FilmListResponse } from '../interfaces/film-list-response';

@Service()
export class FilmService {
    http = inject(HttpClient)

    getAll(): Observable<FilmListResponse>{
        return this.http.get<FilmListResponse>(`https://swapi.dev/api/films/`)
    }

    getOne(id: string):  Observable<FilmItemResponse> {
        return this.http.get<FilmItemResponse>(`https://swapi.dev/api/films/${id}`);
    }
}
