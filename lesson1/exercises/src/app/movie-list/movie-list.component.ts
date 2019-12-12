import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Age of Ondra', 'Oceans 8', 'The Dawn Wall', 'The Prestige'];

   constructor() { }

   ngOnInit() {
   }

}
