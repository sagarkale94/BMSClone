import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { NowShowingComponent } from './movies/now-showing/now-showing.component';
import { ComingSoonComponent } from './movies/coming-soon/coming-soon.component';
import { ExclusiveComponent } from './movies/exclusive/exclusive.component';

const routes: Routes = [
    {
        path: '',
        component: MoviesComponent,
        children: [
            {
                path: '',
                redirectTo: 'now-showing',
                pathMatch: 'full'
            },
            {
                path: 'now-showing',
                component: NowShowingComponent
            },
            {
                path: 'coming-soon',
                component: ComingSoonComponent
            },
            {
                path: 'exclusive',
                component: ExclusiveComponent
            }
        ]
    },
    {
        path: 'movie-details/:movieId',
        component: MovieDetailsComponent
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MoviesRoutingModule { }
