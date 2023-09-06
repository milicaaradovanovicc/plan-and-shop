import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingListHomeComponent } from './shopping-list-home.component';

describe('ShoppingListHomeComponent', () => {
  let component: ShoppingListHomeComponent;
  let fixture: ComponentFixture<ShoppingListHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShoppingListHomeComponent]
    });
    fixture = TestBed.createComponent(ShoppingListHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
