import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductSearchPipe } from './product-search.pipe';
import { StarRatingsComponent } from './star-ratings/star-ratings.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductSearchPipe,
    StarRatingsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
