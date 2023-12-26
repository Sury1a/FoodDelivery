import { Component ,OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Cart } from 'src/app/shared/models/Cart';
import { CartItem } from 'src/app/shared/models/CartItem';
import { FoodService } from '../services/food/food.service';
@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
     cart! :Cart;
  constructor(private cartService: CartService,
    private foodService:FoodService) {
      
       this.setCart();
   }
   
   
    ngOnInit(): void {}
    setCart(){
      this.cart=this.cartService.getCart();
    }
      removeFromCart(cartItem:CartItem){
        this.cartService.removeFromCart(cartItem.food.id);
        
      }
    
      changeQuantity(cartItem:CartItem,quantityInString:string){
        const quantity = parseInt(quantityInString);
        this.cartService.changeQuantity(cartItem.food.id, quantity);
        
      }
}
    
    
  

