import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExteriorHouseWashingComponent } from './exterior-house-washing.component';

describe('ExteriorHouseWashingComponent', () => {
  let component: ExteriorHouseWashingComponent;
  let fixture: ComponentFixture<ExteriorHouseWashingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExteriorHouseWashingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExteriorHouseWashingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
