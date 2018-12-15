import {AbstractControl} from '@angular/forms';
export class CustomValidatior {
  static MatchPassword(AC: AbstractControl) {
    const password = AC.get('pwd').value; // to get value in input tag
    const confirmPassword = AC.get('confirm').value; // to get value in input tag
    if (password !== confirmPassword) {
         AC.get('confirm').setErrors( {MatchPassword: true} );
    } else {
         return null;
     }
 }
}
