import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateThriftsComponent } from './create-thrifts.component';

describe('CreateThriftsComponent', () => {
  let component: CreateThriftsComponent;
  let fixture: ComponentFixture<CreateThriftsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateThriftsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateThriftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
