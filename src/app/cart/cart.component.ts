import { Component, OnInit } from '@angular/core';
import { CartService } from '../shared/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems = this.cartService.getCartIems()

  constructor(private cartService: CartService) {
    console.log(this.cartItems)
  }

  ngOnInit(): void {
  }

}
