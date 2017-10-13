import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemStatusBtnsComponent } from './item-status-btns.component';

describe('ItemStatusBtnsComponent', () => {
  let component: ItemStatusBtnsComponent;
  let fixture: ComponentFixture<ItemStatusBtnsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemStatusBtnsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemStatusBtnsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
