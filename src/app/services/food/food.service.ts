import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }
   getFoodById(id:number){
    return this.getAll().find(food => food.id == id)!;
   }

  getAllFoodByTag(tag: string): Foods[] {
    return tag == "All" ?
      this.getAll() : this.getAll().filter(food => food.tags?.includes(tag))
    if (tag == 'All')
      return this.getAll()
    else return this.getAll().filter(food => food.tags?.includes(tag));

  }

  
  getAllTag():Tag[]{
    return [
      {name:'All',count:14},
      {name:'Bread',count:10},
      {name:'Dinner',count:6},
      {name:'Sweet',count:1},
      {name:'Biriyani',count:8},
      {name:'Lunch',count:7},
      {name:'FastFood',count:4},
      {name:'Fry',count:5},
    ];
  }
  getAll(): Foods[] {
    return [
      {
        id: 1,
        name: 'Butter Naan',
        cookTime: '20-30',
        price: 70,
        favorite: false,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: '/assets/Butter Naan.jpg',
        tags: ['Bread','Dinner'],
      },
      {
        id: 2,
        name: 'Gulab Jamun',
        price: 200,
        cookTime: '45',
        favorite: true,
        origins: ['India'],
        star: 4.7,
        imageUrl: '/assets/gulab-jamun.jpg',
        tags: ['Sweet'],
      },
      {
        id: 3,
        name: 'Mutton Biriyani',
        price: 350,
        cookTime: '10-15',
        favorite: false,
        origins: ['India'],
        star: 3.5,
        imageUrl: '/assets/Mutton Biriyani.jpg',
        tags: ['Biriyani','Lunch'],
      },
      {
        id: 4,
        name: 'Mutton Kebab',
        price: 200,
        cookTime: '15-20',
        favorite: true,
        origins: ['Inida'],
        star: 3.3,
        imageUrl: '/assets/Mutton Kebab.jpg',
        tags: ['FastFood', 'Fry','Lunch'],
      },
      {
        id: 5,
        name: 'Panner Biriyani',
        price: 180,
        cookTime: '40-50',
        favorite: false,
        origins: ['India'],
        star: 3.0,
        imageUrl: '/assets/Panner Biriyani.jpg',
        tags: ['SlowFood', 'Biriyani'],
      },
      {
        id: 6,
        name: 'Panner Butter Masala',
        price: 190,
        cookTime: '40-50',
        favorite: false,
        origins: ['Inida'],
        star: 4.0,
        imageUrl: '/assets/Panner Butter Masala.jpg',
        tags: ['FastFood',  'Lunch'],
      },
      {
        id: 7,
        name: 'Pepper BBQ',
        price: 120,
        cookTime: '20-30',
        favorite: false,
        origins: ['Indian'],
        star: 4.0,
        imageUrl: '/assets/Pepper BBQ.jpg',
        tags: ['FastFood',  'Lunch'],
      }
    ];
  }
}
