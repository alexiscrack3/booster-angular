import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    let text: string = null;
    switch (value) {
      case 0:
        text = 'noun';
        break;

      case 1:
        text = 'verb';
        break;

      case 2:
        text = 'adjective';
        break;

      case 3:
        text = 'phrasal verb';
        break;

      default:
        break;
    }
    return text;
  }
}
