import { Component, ViewChild, ViewContainerRef, HostBinding, Input } from '@angular/core';
import {PositionType} from "../notification.config";

@Component({
  selector: '.notification-wrapper',
  templateUrl: './notification-wrapper.component.html',
  styleUrls: ['./notification-wrapper.component.scss'],
})
export class NotificationWrapperComponent {
  @ViewChild('placeholder', { read: ViewContainerRef }) placeholder: any;

  @HostBinding('attr.data-position')
  @Input() position: PositionType;
}
