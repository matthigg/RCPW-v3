import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FenceCleaningComponent } from './fence-cleaning.component';

describe('FenceCleaningComponent', () => {
  let component: FenceCleaningComponent;
  let fixture: ComponentFixture<FenceCleaningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FenceCleaningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FenceCleaningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
