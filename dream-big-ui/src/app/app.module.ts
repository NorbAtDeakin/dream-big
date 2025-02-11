import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { UnitService } from './services/unit.service';
import { CategoryService } from './services/category.service';

import { CategoryComponent } from './admin/category.component';

import { UserListComponent } from './admin/user-list/user-list.component';
import { UserService } from './services/user.service';
import { CanvasComponent } from './admin/canvas.component';


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    CategoryComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    UnitService,
    UserService,
    CategoryService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
