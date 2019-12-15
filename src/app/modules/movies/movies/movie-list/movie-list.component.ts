import { Component, OnInit } from '@angular/core';

interface Movie {
    name: string;
    rating: number;
    votes: number;
    certificate: string;
    langauge: string;
    posterUrl: string;
}

@Component({
    selector: 'app-movie-list',
    templateUrl: './movie-list.component.html',
    styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

    movies: Movie[] = [
        {
            name: 'Jumanji: The Next Level',
            rating: 3,
            votes: 12453,
            certificate: 'UA',
            langauge: 'Tamil, English',
            posterUrl: 'assets/images/movies/m1.jpg'
        },
        {
            name: 'Venky Mama',
            rating: 80,
            votes: 27774,
            certificate: 'UA',
            langauge: 'Telugu',
            posterUrl: 'assets/images/movies/m2.jpg'
        },
        {
            name: 'Kaalidas',
            rating: 82,
            votes: 1165,
            certificate: 'UA',
            langauge: 'Tamil',
            posterUrl: 'assets/images/movies/m3.jpg'
        },
        {
            name: 'Pati Patni Aur Woh',
            rating: 78,
            votes: 62696,
            certificate: 'UA',
            langauge: 'Hindi',
            posterUrl: 'assets/images/movies/m4.jpg'
        },
        {
            name: 'Ford v Ferrari',
            rating: 93,
            votes: 50759,
            certificate: 'UA',
            langauge: 'English',
            posterUrl: 'assets/images/movies/m5.jpg'
        },
        {
            name: 'The Body',
            rating: 64,
            votes: 1815,
            certificate: 'UA',
            langauge: 'Hindi',
            posterUrl: 'assets/images/movies/m6.jpg'
        },
        {
            name: 'Frozen 2',
            rating: 85,
            votes: 82761,
            certificate: 'U',
            langauge: 'English, Tamil',
            posterUrl: 'assets/images/movies/m7.jpg'
        },
        {
            name: 'Bala',
            rating: 80,
            votes: 189642,
            certificate: 'UA',
            langauge: 'Hindi',
            posterUrl: 'assets/images/movies/m8.jpg'
        },
    ];

    constructor() { }

    ngOnInit() {
    }

}
