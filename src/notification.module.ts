import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {NotificationWrapperComponent} from './notification-wrapper/notification-wrapper.component';
import {NotificationComponent} from './notification/notification.component';
import {NotificationService} from './notification.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NotificationWrapperComponent,
    NotificationComponent
  ],
  entryComponents: [
    NotificationWrapperComponent,
    NotificationComponent
  ],
  exports: [NotificationComponent],
  providers: [NotificationService]
})
export class NotificationModule {}
