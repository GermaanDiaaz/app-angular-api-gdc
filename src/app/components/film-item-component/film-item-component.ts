import { Component, inject, input } from '@angular/core';
import { Film } from '../../interfaces/film-list-response';
import { FilmListPage } from '../film-list-page/film-list-page';

@Component({
  imports: [],
  selector: 'app-film-item-component',
  styleUrl: './film-item-component.css',
  templateUrl: './film-item-component.html',
})
export class FilmItemComponent {
  film = input<Film>();

  private route = inject(FilmListPage);

  constructor() {
    this.route.params.subscribe((params: { [id: string]: any; }) => {
      const view = params['view'];
      const filter = params['filter'];
    });
  }
}