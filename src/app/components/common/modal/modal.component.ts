import { Component, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() headerTitle: string = '';

  @Input() width?: string = '';

  @Input() headerSubtitle: string = '';

  @Input() isVisible: boolean = true;

  @Input() isXCloseButtonVisible: boolean = true;

  @Output() closeModal = new EventEmitter();
}
