import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinThriftComponent } from './join-thrift.component';

describe('JoinThriftComponent', () => {
  let component: JoinThriftComponent;
  let fixture: ComponentFixture<JoinThriftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinThriftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinThriftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
