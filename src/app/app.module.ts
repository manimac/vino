import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ConvertToDollarPipe, UpperCasePipe } from './convert-to-dollar.pipe';
import { ConvertToUpperPipe } from './convert-to-upper.pipe';
import { SearchFilterPipe } from './search-filter.pipe';

import { HttpClientModule } from '@angular/common/http';
import { TestDirectiveDirective } from './test-directive.directive';

const route: Routes = [
  {
    path:'home', component: HomeComponent
  },{
    path:'about', component: AboutComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutComponent,
    ConvertToDollarPipe,
    ConvertToUpperPipe,
    UpperCasePipe,
    SearchFilterPipe,
    TestDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(route),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
