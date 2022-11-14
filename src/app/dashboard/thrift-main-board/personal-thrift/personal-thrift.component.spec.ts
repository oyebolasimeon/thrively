import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalThriftComponent } from './personal-thrift.component';

describe('PersonalThriftComponent', () => {
  let component: PersonalThriftComponent;
  let fixture: ComponentFixture<PersonalThriftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalThriftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalThriftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
