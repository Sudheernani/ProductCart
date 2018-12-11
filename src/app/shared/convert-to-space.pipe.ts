import {Pipe,PipeTransform} from '@angular/core';



@Pipe({
  name:'transformToSpace'

})

export class ConvertToSpace implements PipeTransform {


    transform(value: string,charecterToConvert:string) {
           if(value && value.indexOf(charecterToConvert) > 0)
           {
               return value.replace(charecterToConvert,' ');
           }
    }



}