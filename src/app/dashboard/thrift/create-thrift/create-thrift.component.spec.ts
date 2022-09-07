import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateThriftComponent } from './create-thrift.component';

describe('CreateThriftComponent', () => {
  let component: CreateThriftComponent;
  let fixture: ComponentFixture<CreateThriftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateThriftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateThriftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
