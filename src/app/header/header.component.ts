import { Component , OnInit} from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  cartQuantity=0;
  user: any;
  loggedIn: any;
  authService: any;
  constructor(cartService:CartService){
    
  }
  ngOnInit(): void {
    
  }
}
