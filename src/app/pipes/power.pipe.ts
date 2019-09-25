import { NgModule, Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'power'
})
export class PowerPipe implements PipeTransform {

  transform(base: number, exponent: number): any {
    if(isNaN(Number(base)) || isNaN(Number(exponent))) return 'undefined';
    return Math.pow(base, exponent);
  }

}
@NgModule({
  declarations: [PowerPipe],
  exports: [PowerPipe]
})
export class PowerPipeModule { }