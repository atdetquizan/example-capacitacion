import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './body/body.component';
import { CardComponent } from './card/card.component';
import { ButtonComponent } from './button/button.component';
import { FormatofechaPipe } from './pipes/formatofecha.pipe';
import { OperacionesPipe } from './pipes/operaciones.pipe';
import { ButtonDirective } from './directives/button.directive';
import { FormularioDirective } from './directives/formulario.directive';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        BodyComponent,
        CardComponent,
        ButtonComponent,
        FormatofechaPipe,
        OperacionesPipe,
        ButtonDirective,
        FormularioDirective,
    ],
    imports: [BrowserModule, AppRoutingModule],
    providers: [ButtonDirective],
    bootstrap: [AppComponent],
})
export class AppModule {}
