import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import 'hammerjs';

@NgModule({
  imports:      
  [ BrowserModule, 
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule 
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
