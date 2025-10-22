import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientSelector } from './ingredient-selector';

describe('IngredientSelector', () => {
  let component: IngredientSelector;
  let fixture: ComponentFixture<IngredientSelector>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IngredientSelector],
    }).compileComponents();

    fixture = TestBed.createComponent(IngredientSelector);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
