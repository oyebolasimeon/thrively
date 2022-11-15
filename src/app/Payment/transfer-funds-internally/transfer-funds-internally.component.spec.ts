import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferFundsInternallyComponent } from './transfer-funds-internally.component';

describe('TransferFundsInternallyComponent', () => {
  let component: TransferFundsInternallyComponent;
  let fixture: ComponentFixture<TransferFundsInternallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransferFundsInternallyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferFundsInternallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
