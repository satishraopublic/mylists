import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListviewComponent } from './components/listview/listview.component';
import { MylistsApiService } from './services/mylists-api.service';

import { HttpClientModule } from '@angular/common/http';
import { MylistdisplayComponent } from './components/mylistdisplay/mylistdisplay.component';
import { ListItemsComponent } from './components/list-items/list-items.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'


@NgModule({
  declarations: [
    AppComponent,
    ListviewComponent,
    MylistdisplayComponent,
    ListItemsComponent,
    WelcomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ MylistsApiService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
