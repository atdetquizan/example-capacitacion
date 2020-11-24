import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';

@Component({
    selector: 'app-formularios',
    templateUrl: './formularios.component.html',
    styleUrls: ['./formularios.component.scss'],
})
export class FormulariosComponent implements OnInit {
    form: FormGroup;
    contacts: FormArray;

    constructor(private fb: FormBuilder) {
        this.createForm();
        this.contacts = this.form.get('contacts') as FormArray;
    }

    ngOnInit(): void {
        const result = {
            contacts: [
                { name: 'atdetquizan1', phone: '123', email: 'asdsad' },
                { name: 'atdetquizan2', phone: 'das', email: 'dsad' },
                { name: 'atdetquizan3', phone: 'sadas', email: 'dsad' },
                { name: 'atdetquizan4', phone: 'sadas', email: 'dsad' },
                { name: 'atdetquizan5', phone: 'sadas', email: 'dsad' },
                { name: 'atdetquizan6', phone: 'sadas', email: 'dsad' },
                { name: 'atdetquizan7', phone: 'sadas', email: 'dsad' },
                { name: 'atdetquizan8', phone: 'sadas', email: 'dsad' },
            ],
        };
        result.contacts.forEach((value, index) => {
          if (index > 0) {
            this.onClickAdd();
          }
        });
        this.form.patchValue(result);
    }

    onClickAdd(): void {
        this.contacts.push(this.formItem());
    }

    onClickSave(): void {
        console.log(this.form.value);
    }

    private createForm(): void {
        this.form = this.fb.group({
            contacts: this.fb.array([this.formItem()]),
        });
    }

    private formItem(): FormGroup {
        return this.fb.group({
            name: [
                null,
                [
                    Validators.required,
                    Validators.maxLength(50),
                    Validators.minLength(5),
                ],
            ],
            phone: [
                null,
                [
                    Validators.required,
                    Validators.minLength(9),
                    Validators.maxLength(9),
                    CustomValidators.digits,
                ],
            ],
            email: [null, [Validators.required, CustomValidators.email]],
        });
    }
}
