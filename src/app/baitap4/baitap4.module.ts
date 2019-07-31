import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Baitap4Component } from "./baitap4.component";
import { Baitap4HeaderComponent } from "./baitap4-header/baitap4-header.component";
import { Baitap4CarouselComponent } from "./baitap4-carousel/baitap4-carousel.component";
import { Baitap4ItemProductComponent } from "./baitap4-item-product/baitap4-item-product.component";
import { Baitap4PromotionComponent } from "./baitap4-promotion/baitap4-promotion.component";
import { LaptopComponent } from './baitap4-item-product/laptop/laptop.component';
import { SmartphoneComponent } from './baitap4-item-product/smartphone/smartphone.component';

@NgModule({
  declarations: [
    Baitap4Component,
    Baitap4HeaderComponent,
    Baitap4CarouselComponent,
    Baitap4ItemProductComponent,
    Baitap4PromotionComponent,
    LaptopComponent,
    SmartphoneComponent
  ],
  imports: [CommonModule],
  exports: [
    Baitap4Component,
    Baitap4HeaderComponent,
    Baitap4CarouselComponent,
    Baitap4ItemProductComponent,
    Baitap4PromotionComponent
  ]
})
export class Baitap4Module {}
