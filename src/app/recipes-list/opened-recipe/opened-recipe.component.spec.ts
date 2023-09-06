import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenedRecipeComponent } from './opened-recipe.component';

describe('OpenedRecipeComponent', () => {
  let component: OpenedRecipeComponent;
  let fixture: ComponentFixture<OpenedRecipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenedRecipeComponent]
    });
    fixture = TestBed.createComponent(OpenedRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
