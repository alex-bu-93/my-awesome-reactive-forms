import { Component }                 from '@angular/core';
import { AbstractReactiveComponent } from '../abstract-reactive.component';

@Component({
  selector: 'app-reactive-input',
  templateUrl: './reactive-input.component.html',
  styleUrls: ['./reactive-input.component.scss']
})
export class ReactiveInputComponent extends AbstractReactiveComponent {
}
