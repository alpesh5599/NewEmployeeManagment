import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enumKeyToValue'
})
export class EnumKeyToValuePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
