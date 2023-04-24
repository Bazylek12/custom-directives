import { Directive, HostListener, Input } from '@angular/core';
import { ProductsService } from '../services/products.service';

@Directive({ selector: '[deleteProduct]' })
export class DeleteProductDirective  {
  constructor(private _productsService: ProductsService) {
  }
  @Input() deleteProduct!: string

  @HostListener('click')
  delete() {
    return this._productsService.delete(this.deleteProduct).subscribe()
  }
}
