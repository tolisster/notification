import { Output, Component, OnInit, OnDestroy, EventEmitter, HostListener, HostBinding } from '@angular/core';
import {NotificationConfig} from '../notification.config';

@Component({
  selector: '.notify',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit, OnDestroy {

  @Output() public close = new EventEmitter();

  public config: NotificationConfig;

  private timer: any;

  @HostBinding('class.notify-warning')
  hasIcon: boolean = false;

  @HostBinding('class.in')
  inAnimate: boolean = false;

  setConfig(config: NotificationConfig) {
    this.config = config;
  }

  ngOnInit(): void {
    if (this.config.timeOut !== 0) {
      this.startTimeOut();
    }

    if (this.config.icon) {
      this.hasIcon = true;
    }

    setTimeout(() => this.inAnimate = true, 0);
  }

  private startTimeOut(): void {
    this.timer = setTimeout(() => this.remove(), this.config.timeOut);
  }

  @HostListener('mouseenter')
  onEnter(): void {
    if (this.config.timeOut !== 0) {
      clearTimeout(this.timer);
    }
  }

  @HostListener('mouseleave')
  onLeave(): void {
    if (this.config.timeOut !== 0) {
      this.startTimeOut();
    }
  }

  onCloseClick(): void {
    this.remove();
  }

  private remove() {
    this.close.emit();
  }

  ngOnDestroy(): void {
    if (this.config.timeOut !== 0) {
      clearTimeout(this.timer);
    }
  }
}
