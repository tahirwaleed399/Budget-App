import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddFormComponent } from './Components/add-form/add-form.component';
import { ListsComponent } from './Components/lists/lists.component';
import { CardComponent } from './Components/card/card.component';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule }   from '@angular/forms';
import { DialogBoxComponent } from './Components/dialog-box/dialog-box.component';


@NgModule({
  declarations: [
    AppComponent,
    AddFormComponent,
    ListsComponent,
    CardComponent,
    DialogBoxComponent,


  ],
  entryComponents:[DialogBoxComponent]
  ,
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,FormsModule,MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
