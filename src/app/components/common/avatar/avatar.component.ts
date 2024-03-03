import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss'],
})
export class AvatarComponent implements OnInit {
  constructor() {}

  @Input() avatar_url: string | ArrayBuffer | undefined | null;

  @Input() username: string = '';

  @Input() size: number = 32;

  @Output() clicked = new EventEmitter<any>();

  custom_style: object = {
    width: '32px',
    height: '32px',
  };

  ngOnInit(): void {
    this.custom_style = {
      width: `${this.size}px`,
      height: `${this.size}px`,
    };
    if (!this.avatar_url) this.avatar_url = '../../../../assets/images/avatar-default.jpg';
  }

  handleClick() {
    this.clicked.emit('clicked');
  }
}
