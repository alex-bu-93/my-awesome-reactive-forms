import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
import { FILLING_NEEDED_MESSAGE }                               from '../../shared/constants/validation-messages-list';
import { PATTERNS_LIST }                                        from '../../shared/constants/validation-patterns-list';

@Component({
  selector: 'app-reactive-validation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './reactive-validation.component.html',
  styleUrls: ['./reactive-validation.component.scss']
})
export class ReactiveValidationComponent implements OnChanges {

  /**
   * 'validationErrors' is reactive form errors.
   * It's nonnull in case if the control is touched and invalid,
   * which is defined on the reactive base component side.
   */
  @Input() validationErrors: object | null = null;

  errorMessage: string | null = null;

  ngOnChanges(): void {
    this.errorMessage = this.getErrorMessage();
  }

  getErrorMessage(): string | null {
    const errors = this.validationErrors;
    if (errors) {
      return errors['required'] ? FILLING_NEEDED_MESSAGE                            /** <----------- Data should be filled     */
        : errors['pattern'] ? this.getPatternMessage(errors['pattern']['requiredPattern'])  /** <----------- Data should match pattern */
          : null;                                                                           /** <----------- Data is filled correctly  */
    }
    return null;
  }

  /**
   * Method 'getPatternMessage' finds proper pattern message form patterns list
   * and returns the message.
   */
  getPatternMessage(requiredPattern: string): string {
    return PATTERNS_LIST.filter(x => x['PATTERN'] === requiredPattern)[0]['MESSAGE'];
  }
}
