import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BodyComponent } from './components/body/body.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { FormatofechaPipe } from './pipes/formatofecha.pipe';
import { OperacionesPipe } from './pipes/operaciones.pipe';
import { ButtonDirective } from './directives/button.directive';
import { FormularioDirective } from './directives/formulario.directive';
import { RouterModule } from '@angular/router';
import { CardItemComponent } from './components/card-item/card-item.component';

const components = [
    // components
    BodyComponent,
    ButtonComponent,
    CardComponent,
    FooterComponent,
    HeaderComponent,
    // pipes
    FormatofechaPipe,
    OperacionesPipe,
    // directives
    ButtonDirective,
    FormularioDirective,
    CardItemComponent
];

@NgModule({
    declarations: [...components],
    exports: [...components],
    imports: [CommonModule, RouterModule],
    providers: [ButtonDirective],
})
export class SharedModule {}
