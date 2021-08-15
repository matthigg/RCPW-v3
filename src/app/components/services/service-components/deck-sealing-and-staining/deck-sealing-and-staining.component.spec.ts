import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeckSealingAndStainingComponent } from './deck-sealing-and-staining.component';

describe('DeckSealingAndStainingComponent', () => {
  let component: DeckSealingAndStainingComponent;
  let fixture: ComponentFixture<DeckSealingAndStainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeckSealingAndStainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeckSealingAndStainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
