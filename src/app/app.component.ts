import { Component }                          from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ValidationService }                  from './shared/services/validation.service';
import { CYRILLIC_PATTERN, EMAIL_PATTERN }    from './shared/constants/validation-patterns-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  feedbackForm: FormGroup = new FormGroup({
    'userName': new FormControl(
      null,
      [Validators.required, Validators.pattern(CYRILLIC_PATTERN)]),
    'userLastName': new FormControl(
      null,
      [Validators.required, Validators.pattern(CYRILLIC_PATTERN)]),
    'userEmail': new FormControl(
      null,
      [Validators.required, Validators.pattern(EMAIL_PATTERN)])
  });

  constructor(
    private validationService: ValidationService
  ) {
  }

  onSubmit(): void {
    if (this.feedbackForm.valid) {
      // Working on your validated form data
    } else {
      this.validationService.markAllFormFieldsAsTouched(this.feedbackForm);
    }
  }
}
