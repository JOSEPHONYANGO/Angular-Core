import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { JosephComponent } from './INTRO TO ANGULAR/joseph/joseph.component';
import { GroupWorkComponent } from './INTRO TO ANGULAR/group-work/group-work.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { MainComponent } from './PROJECT-VOTE/quotes-application/main/main.component';
import { HeaderComponent } from './PROJECT-VOTE/quotes-application/header/header.component';
import { QuotesComponent } from './PROJECT-VOTE/quotes-application/quotes/quotes.component';
import { PostQuoteComponent } from './PROJECT-VOTE/quotes-application/post-quote/post-quote.component';

import { PropertyBindingComponent } from './BASICS/Data-Binding/property-binding/property-binding.component';
import { EventBindingComponent } from './BASICS/Data-Binding/event-binding/event-binding.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    JosephComponent,
    GroupWorkComponent,
    InterpolationComponent,
    MainComponent,
    HeaderComponent,
    QuotesComponent,
    PostQuoteComponent,    
    PropertyBindingComponent, EventBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
