import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquaticChartComponent } from './aquatic-chart.component';

describe('AquaticChartComponent', () => {
  let component: AquaticChartComponent;
  let fixture: ComponentFixture<AquaticChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquaticChartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AquaticChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
