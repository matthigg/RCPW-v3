import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConcreteAndBrickWashingComponent } from './concrete-and-brick-washing.component';

describe('ConcreteAndBrickWashingComponent', () => {
  let component: ConcreteAndBrickWashingComponent;
  let fixture: ComponentFixture<ConcreteAndBrickWashingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConcreteAndBrickWashingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConcreteAndBrickWashingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
