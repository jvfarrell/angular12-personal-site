import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionPanelComponent } from './champion-panel.component';

describe('ChampionPanelComponent', () => {
  let component: ChampionPanelComponent;
  let fixture: ComponentFixture<ChampionPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChampionPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
