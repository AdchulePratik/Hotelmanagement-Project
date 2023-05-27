import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(arrayOfObject: any, inputBoxValue: any): any {

    console.log('value',arrayOfObject);
    console.log('args',inputBoxValue);
    // if(!arrayOfObject){
    //   return null;
    // }
    if(!inputBoxValue){
        return arrayOfObject;
    }
    inputBoxValue = inputBoxValue.toLowerCase();
    return arrayOfObject.filter((item:any)=>{
    return  JSON.stringify(item).toLowerCase().includes(inputBoxValue)
    })
  }

}
