import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { MaterialModule } from '../../shared/material.module';
import { MoviesComponent } from './movies/movies.component';
import { MovieFilterComponent } from './movies/movie-filter/movie-filter.component';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NowShowingComponent } from './movies/now-showing/now-showing.component';
import { ComingSoonComponent } from './movies/coming-soon/coming-soon.component';
import { ExclusiveComponent } from './movies/exclusive/exclusive.component';

@NgModule({
    declarations: [
        MoviesComponent,
        MovieFilterComponent,
        MovieListComponent,
        MovieDetailsComponent,
        NowShowingComponent,
        ComingSoonComponent,
        ExclusiveComponent
    ],
    imports: [
        CommonModule,
        MoviesRoutingModule,
        SharedModule,
        MaterialModule
    ]
})
export class MoviesModule { }
