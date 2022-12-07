import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeatureNotReadyComponent } from './feature-not-ready.component';

describe('FeatureNotReadyComponent', () => {
  let component: FeatureNotReadyComponent;
  let fixture: ComponentFixture<FeatureNotReadyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeatureNotReadyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureNotReadyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
