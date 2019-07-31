import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Baitap4ItemProductComponent } from './baitap4-item-product.component';

describe('Baitap4ItemProductComponent', () => {
  let component: Baitap4ItemProductComponent;
  let fixture: ComponentFixture<Baitap4ItemProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Baitap4ItemProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Baitap4ItemProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
