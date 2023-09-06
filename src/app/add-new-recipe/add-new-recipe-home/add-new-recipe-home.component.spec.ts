import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewRecipeHomeComponent } from './add-new-recipe-home.component';

describe('AddNewRecipeHomeComponent', () => {
  let component: AddNewRecipeHomeComponent;
  let fixture: ComponentFixture<AddNewRecipeHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddNewRecipeHomeComponent]
    });
    fixture = TestBed.createComponent(AddNewRecipeHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
