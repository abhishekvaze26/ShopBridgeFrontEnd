import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDisplayComponent } from './product-display/product-display.component';
import { ProductInsertComponent } from './product-insert/product-insert.component';
import { RouterModule } from '@angular/router';
import { SbNavbarComponent } from './sb-navbar/sb-navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { PostsComponentComponent } from './posts-component/posts-component.component';
import { from } from 'rxjs';
import { DataHandlerService } from './data-handler.service'

@NgModule({
  declarations: [
    AppComponent,
    ProductDisplayComponent,
    ProductInsertComponent,
    SbNavbarComponent,
    PostsComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path:'', component: ProductInsertComponent},
      {path:'productsDisplay', component:ProductDisplayComponent },
      {path:'posts', component:PostsComponentComponent}
    ])
  ],
  exports:[
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    DataHandlerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
