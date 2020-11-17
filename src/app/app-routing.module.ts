import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ValidarRutaGuard } from './guards/validar-ruta.guard';

const routes: Routes = [

  {
    path:  'contacts/:id',
    canActivate: [ ValidarRutaGuard ],
    component: AppComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
