import {AbstractControl} from '@angular/forms';

export function passwordValidator(control: AbstractControl): {[key: string]: any} | boolean {
   const titre = control.get('titre') ;
   const auteur = control.get('auteur') ;
   if (titre.pristine || auteur.pristine) {
     return true ;
   }
   return titre && auteur && titre.value !== auteur.value ? { different : true} : null ;
}
