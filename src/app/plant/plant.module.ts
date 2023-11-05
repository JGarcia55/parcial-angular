import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPlantsComponent } from './list-plants/list-plants.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ListPlantsComponent],
  exports: [ListPlantsComponent]
})
export class PlantModule { }
