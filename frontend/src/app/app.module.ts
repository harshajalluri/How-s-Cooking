import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';


require('webrtc-adapter');

import { AppComponent } from './app.component';
import { SharedModule } from './shared';
import { WebRTCChatModule, WebRTCChatComponent } from './webrtc-chat';
import { WelcomeComponent } from './home/welcome.component';
import { OrderComponent } from './products/order.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductService } from './products/product.service';

const appRoutes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    OrderComponent,
    ProductListComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path : 'products', component : ProductListComponent},
      {path : 'products/:id', 
        component : ProductDetailComponent
      },
      {path : 'watchLive', component : OrderComponent},
      {path : 'welcome', component : WelcomeComponent},
      {path : '', redirectTo:'welcome', pathMatch:'full'},
      {path : '**', redirectTo:'welcome', pathMatch:'full'} 
    ]),
    SharedModule,
    WebRTCChatModule
  ],
  entryComponents: [
    AppComponent,
    WebRTCChatComponent
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
