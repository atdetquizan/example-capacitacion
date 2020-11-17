import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'operaciones'
})
export class OperacionesPipe implements PipeTransform {

  transform(value1: number, value2: number, operador: string): unknown {
    switch (operador) {
      case 'suma':
        return value1 + value2;

      case 'resta':
        return value1 - value2;

      case 'multiplica':
        return value1 * value2;

      default:
        return value1 / value2;
    }
  }

}
