import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipesListHomeComponent } from './recipes-list-home.component';

describe('RecipesListHomeComponent', () => {
  let component: RecipesListHomeComponent;
  let fixture: ComponentFixture<RecipesListHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipesListHomeComponent]
    });
    fixture = TestBed.createComponent(RecipesListHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
