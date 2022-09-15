import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AquaticTableComponent } from './aquatic-table.component';

describe('AquaticTableComponent', () => {
  let component: AquaticTableComponent;
  let fixture: ComponentFixture<AquaticTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AquaticTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AquaticTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
