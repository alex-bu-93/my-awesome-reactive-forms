import { Component }                          from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  EMAIL_PATTERN = '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,6}$';
  CYRILLIC_PATTERN = '^[А-Яа-яЁё\\s]+$';

  feedbackForm: FormGroup = new FormGroup({
    'userName': new FormControl(
      null,
      [Validators.required, Validators.pattern(this.CYRILLIC_PATTERN)]),
    'userEmail': new FormControl(
      null,
      [Validators.required, Validators.pattern(this.EMAIL_PATTERN)])
  });

  onSubmit(): void {
    if (this.feedbackForm.valid) {
      // Working on your validated form data
    } else {
      this.markAllFormFieldsAsTouched(this.feedbackForm);
    }
  }

  markAllFormFieldsAsTouched(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(
      (field) => {
        const control = formGroup.get(field);
        if (control instanceof FormControl) {
          control.markAsTouched({onlySelf: true});
        } else if (control instanceof FormGroup) {
          this.markAllFormFieldsAsTouched(control);
        }
      }
    );
  }
}
