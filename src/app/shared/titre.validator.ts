import {AbstractControl} from '@angular/forms';

export  function forbiddenTitreValidateur(control: AbstractControl): {[key: string]: any } | null {
  const forbidden = /israel/.test(control.value);
  return forbidden ? {forbiddenTitre : {value : control.value}} : null ;
}
