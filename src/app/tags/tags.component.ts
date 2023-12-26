import { Component , Input, OnInit} from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Tag } from '../shared/models/Tag';
@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {
  @Input()
  foodPageTags?:string[];
  @Input()
  justifyContent?:string='none';
  
  tags:Tag[] =[];
  constructor(foodService:FoodService){
    
  }
  
  ngOnInit(): void {
   
  }
   
}
