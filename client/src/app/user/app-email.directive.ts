import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';
import {emailValidator } from './utils/email-validator';

@Directive({
  selector: '[appAppEmail]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: AppEmailDirective,
      multi: true
    }
  ]
})
export class AppEmailDirective implements Validator {
  @Input() appAppEmail: string[] = [];

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    let validatorFn = emailValidator(this.appAppEmail);
    return validatorFn(control);
  }



}
