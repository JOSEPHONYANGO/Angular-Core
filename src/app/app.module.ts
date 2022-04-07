import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { JosephComponent } from './joseph/joseph.component';
import { GroupWorkComponent } from './group-work/group-work.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    JosephComponent,
    GroupWorkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
