import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Meal.TsComponent } from './meal.ts.component';

describe('Meal.TsComponent', () => {
  let component: Meal.TsComponent;
  let fixture: ComponentFixture<Meal.TsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Meal.TsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Meal.TsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
