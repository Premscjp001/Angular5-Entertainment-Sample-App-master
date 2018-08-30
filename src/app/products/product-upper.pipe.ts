import {Pipe,PipeTransform} from '@angular/core';

@Pipe({
    name:'productUpper'
})

export class UpperPipe implements PipeTransform{
    transform(value:string){
        value = value.toUpperCase();
        return
    }
}