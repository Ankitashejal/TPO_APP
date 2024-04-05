import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PlacementPage } from './placement.page';

describe('PlacementPage', () => {
  let component: PlacementPage;
  let fixture: ComponentFixture<PlacementPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
