import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CuentasRoutingModule } from './cuentas-routing.module';
import { CuentasComponent } from './cuentas.component';
import { UsersService } from '../shared/services/users.service';

@NgModule({
    declarations: [CuentasComponent],
    imports: [CommonModule, CuentasRoutingModule, HttpClientModule],
    providers: [UsersService]
})
export class CuentasModule {}
