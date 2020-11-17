import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExampleRoutingModule } from './example-routing.module';
import { ExampleComponent } from './example.component';
import { SharedModule } from '../shared/shared.module';
import { ContainerComponent } from './container/container.component';

@NgModule({
    declarations: [ExampleComponent, ContainerComponent],
    imports: [CommonModule, ExampleRoutingModule, SharedModule],
})
export class ExampleModule {}
