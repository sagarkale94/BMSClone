import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliderComponent } from './slider/slider.component';
import { MaterialModule } from './material.module';

@NgModule({
    declarations: [
        SliderComponent
    ],
    imports: [
        CommonModule,
        MaterialModule
    ],
    exports: [
        SliderComponent
    ]
})
export class SharedModule { }
