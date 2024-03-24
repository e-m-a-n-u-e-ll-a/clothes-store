import { ValidatorFn } from "@angular/forms";

export function emailValidator(domains: String[]): ValidatorFn {
    let domainStr = domains.join('|');
    let regExp = new RegExp(`[A-Za-z]+@gmail(${domainStr})`);
    return (control) => {
      let isEmailInalid = control.value === '' || regExp.test(control.value);
      return isEmailInalid ? null : { emailValidator: true }
    }
  }