import { ValidatorFn } from "@angular/forms";

export function matchPasswords(passControl: string, rePassControl: string): ValidatorFn {

    return (control) => {
        let pass1 = control.get(passControl);
        let pass2 = control.get(rePassControl);
        console.log({ pass1, pass2 })
        let areMatching = pass1?.value === pass2?.value
        return areMatching ? null : {matchPasswords: true}
    }
}