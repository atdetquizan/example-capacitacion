import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MusicRoutingModule } from './music-routing.module';
import { MusicComponent } from './music.component';
import { ListPersonsComponent } from './list-persons/list-persons.component';
import { PersonsService } from './providers/persons.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from '../shared/interceptors/token.interceptor';


@NgModule({
  declarations: [MusicComponent, ListPersonsComponent],
  imports: [
    CommonModule,
    MusicRoutingModule,
    HttpClientModule
  ],
  providers: [
    PersonsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ]
})
export class MusicModule { }
