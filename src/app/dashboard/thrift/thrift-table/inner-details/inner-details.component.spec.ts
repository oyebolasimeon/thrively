import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnerDetailsComponent } from './inner-details.component';

describe('InnerDetailsComponent', () => {
  let component: InnerDetailsComponent;
  let fixture: ComponentFixture<InnerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InnerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InnerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
