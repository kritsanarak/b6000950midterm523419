import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { productsModel } from 'src/app/product.model';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProduct: productsModel = [];
  constructor(private cartService: CartService) { 
    this.cartProduct = this.cartService.getCart();}

  ngOnInit(): void {
  }
  getCounter(){
    return this.cartService.getCounter();
  }

  getSumPrice(){
    return this.cartService.getsumPrice();
  }
}
