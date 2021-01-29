import { RouterModule } from '@angular/router';
import { UserModule } from './user/user.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

  import { MatToolbarModule } from '@angular/material/toolbar';
  import { MatButtonModule} from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
  import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgwWowModule } from 'ngx-wow';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { CoursesComponent } from './courses/courses.component';
import {CousrseModule} from './courses/course.module';
import { StarComponent } from './star/star.component';
import { MessagesComponent } from './messages/messages.component';
import {CourseData} from './courses/course-data'
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    MessagesComponent,
    PageNotFoundComponent,

  ],
  imports: [
    FormsModule,
    InMemoryWebApiModule.forRoot(CourseData),
    UserModule,
    CousrseModule,
    FontAwesomeModule,
    NgwWowModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FontAwesomeModule,
    AppRoutingModule,
    RouterModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
