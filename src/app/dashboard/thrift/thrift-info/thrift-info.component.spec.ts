import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThriftInfoComponent } from './thrift-info.component';

describe('ThriftInfoComponent', () => {
  let component: ThriftInfoComponent;
  let fixture: ComponentFixture<ThriftInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThriftInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThriftInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
