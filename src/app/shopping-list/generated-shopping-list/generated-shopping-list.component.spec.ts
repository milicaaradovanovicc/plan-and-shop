import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratedShoppingListComponent } from './generated-shopping-list.component';

describe('GeneratedShoppingListComponent', () => {
  let component: GeneratedShoppingListComponent;
  let fixture: ComponentFixture<GeneratedShoppingListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GeneratedShoppingListComponent]
    });
    fixture = TestBed.createComponent(GeneratedShoppingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
