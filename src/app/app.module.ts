import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListModule } from '@angular/material/list';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import 'hammerjs';
import { MenuComponent } from './menu/menu.component';

@NgModule({
  imports:      
  [ BrowserModule, 
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatListModule
  ],
  declarations: [ AppComponent, HelloComponent, MenuComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
