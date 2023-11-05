import { Component, OnInit } from '@angular/core';
import { Plant } from '../plant';
import { PlantService } from '../plant.service';

@Component({
  selector: 'app-list-plants',
  templateUrl: './list-plants.component.html',
  styleUrls: ['./list-plants.component.css']
})
export class ListPlantsComponent implements OnInit {

  plants: Plant[] = []

  constructor(private plantService: PlantService) { }

  ngOnInit() {
    this.getPlants()
  }

  getPlants(): void {
    this.plantService.getPlants().subscribe(plants => {
      this.plants = plants;
    })
  }

  getTotalInteriorPlant():number {
    let aux_plants = this.plants.filter(plant => plant.tipo == 'Interior');
    return aux_plants.reduce((acumulator, currentValue) => acumulator + 1 ,0);
  }

  getTotalExteriorPlant():number {
    let aux_plants = this.plants.filter(plant => plant.tipo == 'Exterior');
    return aux_plants.reduce((acumulator, currentValue) => acumulator + 1 ,0);
  }

}
