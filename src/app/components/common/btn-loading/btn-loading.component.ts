import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-btn-loading',
  templateUrl: './btn-loading.component.html',
  styleUrls: ['./btn-loading.component.scss'],
})
export class BtnLoadingComponent {
  @Input() disabled: boolean = false;

  // @Input() label: string = '';

  @Input() color: string = 'primary';

  @Input() isLoading: boolean = false;

  @Output() clicked = new EventEmitter<any>();

  @Input() type: string = '';

  handleClick() {
    this.clicked.emit('click');
  }
}
