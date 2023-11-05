/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';

import { ListPlantsComponent } from './list-plants.component';
import { HttpClientModule } from '@angular/common/http';
import { PlantService } from '../plant.service';
import { Plant } from '../plant';

describe('ListPlantsComponent', () => {
  let component: ListPlantsComponent;
  let fixture: ComponentFixture<ListPlantsComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ ListPlantsComponent ],
      providers: [PlantService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPlantsComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const plant = new Plant(
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.lorem.sentence(),
        faker.number.int(),
        faker.lorem.sentence(),
        faker.lorem.sentence()
      );
      component.plants.push(plant);
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have 3 <.plant-row> elements', () => {
    expect(debug.queryAll(By.css('.plant-row'))).toHaveSize(3)
  });

  it('should have 1 <.plant-title elements', () => {
    expect(debug.queryAll(By.css('.plant-title'))).toHaveSize(1)
  });

  it('should have an img element with actor image', () => {
    expect(debug.query(By.css('img')).attributes['src']).toEqual(
      '/assets/img/plants-banner.jpg'
    );
  });
});
