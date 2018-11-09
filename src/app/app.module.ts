import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ContactComponent} from './components/contact/contact.component';
import {QuizComponent} from './components/quiz/quiz.component';
import {HomeComponent} from './components/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BlogComponent } from './components/blog/blog.component';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogItemImageComponent } from './components/blog-item-image/blog-item-image.component';
import { BlogItemTextComponent } from './components/blog-item-text/blog-item-text.component';
import {HttpClientModule} from '@angular/common/http';
import {DataSerivce} from './services/data-service';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule } from '@angular/forms';


const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'quiz',
    component: QuizComponent,
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    QuizComponent,
    HomeComponent,
    NavbarComponent,
    BlogComponent,
    BlogItemComponent,
    BlogItemImageComponent,
    BlogItemTextComponent,
    FilterPipe
  ],
  imports: [

    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule

  ],
  providers: [DataSerivce],
  bootstrap: [AppComponent]
})
export class AppModule {
}
