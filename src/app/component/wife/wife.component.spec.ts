import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WifeComponent } from './wife.component';

describe('WifeComponent', () => {
  let component: WifeComponent;
  let fixture: ComponentFixture<WifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
