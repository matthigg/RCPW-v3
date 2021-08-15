import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckAndPatioWashingComponent } from './deck-and-patio-washing.component';

describe('DeckAndPatioWashingComponent', () => {
  let component: DeckAndPatioWashingComponent;
  let fixture: ComponentFixture<DeckAndPatioWashingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckAndPatioWashingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckAndPatioWashingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
