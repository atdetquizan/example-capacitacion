import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';
import { environment } from 'src/environments/environment';

@Pipe({
    name: 'formatofecha',
})
export class FormatofechaPipe implements PipeTransform {
    transform(value: string, type: string): unknown {
      switch (type) {
        case 'A':
          return moment(value).format('YYYY-MM-DD');

        default:
          return moment(value).format('DD-MM-YYYY');
      }
    }
}
