import { BrowserModule }       from '@angular/platform-browser';
import { NgModule }            from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule }            from './app-routing.module';
import { AppComponent }                from './app.component';
import { ReactiveValidationComponent } from './reactive-form-components/reactive-validation/reactive-validation.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveValidationComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
