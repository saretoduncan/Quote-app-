import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuotesGenComponent } from './quotes-gen/quotes-gen.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    QuotesGenComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
