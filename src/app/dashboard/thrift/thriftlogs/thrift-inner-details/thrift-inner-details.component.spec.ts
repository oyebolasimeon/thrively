import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThriftInnerDetailsComponent } from './thrift-inner-details.component';

describe('ThriftInnerDetailsComponent', () => {
  let component: ThriftInnerDetailsComponent;
  let fixture: ComponentFixture<ThriftInnerDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThriftInnerDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThriftInnerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
