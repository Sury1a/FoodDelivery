import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RatingModule } from 'ng-starrating';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodPageComponent } from './foodpage/foodpage.component';

import { NotFoundComponent } from './not-found/not-found.component';
import { TitleComponent } from './title/title.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    CartPageComponent,
    FoodPageComponent,
    NotFoundComponent,
    TitleComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RatingModule,
    
    FormsModule
    
   

    
  ],
  providers:[],
   
  bootstrap: [AppComponent]
})
export class AppModule { }
