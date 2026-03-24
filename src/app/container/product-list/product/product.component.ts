import { Component, Input } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';
import { NgStyle } from '@angular/common';
import { NgClass } from '@angular/common';
import { Product } from '../../../Model/product';
import { CardHoverDirective } from '../../customDerictive/card-hover.directive';
import { HostBindHoverDirective } from '../../customDerictive/host-bind-hover.directive';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [NgFor, NgIf, NgStyle, NgClass, CardHoverDirective, HostBindHoverDirective],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input()
  products: Product
}
