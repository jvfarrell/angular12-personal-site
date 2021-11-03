import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatfactComponent } from './catfact.component';

describe('CatfactComponent', () => {
  let component: CatfactComponent;
  let fixture: ComponentFixture<CatfactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatfactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CatfactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
