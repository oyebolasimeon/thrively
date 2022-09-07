import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThriftTableComponent } from './thrift-table.component';

describe('ThriftTableComponent', () => {
  let component: ThriftTableComponent;
  let fixture: ComponentFixture<ThriftTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThriftTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThriftTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
