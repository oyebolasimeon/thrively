import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DomesticThriftComponent } from './domestic-thrift.component';

describe('DomesticThriftComponent', () => {
  let component: DomesticThriftComponent;
  let fixture: ComponentFixture<DomesticThriftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DomesticThriftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DomesticThriftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
