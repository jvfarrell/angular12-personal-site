import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiteskillsComponent } from './suiteskills.component';

describe('SuiteskillsComponent', () => {
  let component: SuiteskillsComponent;
  let fixture: ComponentFixture<SuiteskillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuiteskillsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiteskillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
