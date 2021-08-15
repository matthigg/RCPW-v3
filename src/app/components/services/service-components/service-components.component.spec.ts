import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ServiceComponentsComponent } from './service-components.component';

describe('ServiceComponentsComponent', () => {
  let component: ServiceComponentsComponent;
  let fixture: ComponentFixture<ServiceComponentsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
