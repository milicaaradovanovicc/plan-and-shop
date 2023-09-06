import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomShoppingListComponent } from './custom-shopping-list.component';

describe('CustomShoppingListComponent', () => {
  let component: CustomShoppingListComponent;
  let fixture: ComponentFixture<CustomShoppingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomShoppingListComponent]
    });
    fixture = TestBed.createComponent(CustomShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
