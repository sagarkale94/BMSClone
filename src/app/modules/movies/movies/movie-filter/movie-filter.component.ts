import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-movie-filter',
    templateUrl: './movie-filter.component.html',
    styleUrls: ['./movie-filter.component.css']
})
export class MovieFilterComponent implements OnInit {

    arrLangauge: string[] = [
        'Tamil',
        'English',
        'Telugu',
        'Hindi',
        'Malayalam',
        'Kannada'
    ]

    arrGenre: string[] = [
        'Action',
        'Adventure',
        'Animation',
        'Biography',
        'Classic',
        'Comedy',
        'Crime',
        'Drama',
        'Fantasy',
        'Historical',
        'Horror',
        'Mystery',
        'Period',
        'Romantic',
        'Sci-fi',
        'Thriller',
    ]

    arrFormat: string[] = [
        '2D',
        '3D',
        'IMAX 3D'
    ]

    constructor() { }

    ngOnInit() {
    }

}
