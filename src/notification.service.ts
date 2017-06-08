import {Injectable, ComponentFactoryResolver, ComponentRef, ApplicationRef} from '@angular/core';
import {NotificationComponent} from './notification/notification.component';
import {NotificationWrapperComponent} from './notification-wrapper/notification-wrapper.component';
import {PositionType, NotificationConfig, NotificationDefaultConfig} from './notification.config';

@Injectable()
export class NotificationService {

  private wrapperRef: { [position: string]: ComponentRef<NotificationWrapperComponent>; } = {};

  constructor(private resolver: ComponentFactoryResolver, private applicationRef: ApplicationRef) {}

  createNotification(config: NotificationConfig): ComponentRef<NotificationComponent> {
    let c: NotificationConfig = {};
    Object.assign(c, NotificationDefaultConfig);
    if (config) {
      Object.assign(c, config);
    }

    if (!this.wrapperRef[c.position]) {
      let viewContainerRef = this.applicationRef.components[0].instance.viewContainerRef;

      let wrapperFactory = this.resolver.resolveComponentFactory(NotificationWrapperComponent);
      this.wrapperRef[c.position] = viewContainerRef.createComponent(wrapperFactory);
      this.wrapperRef[c.position].instance.position = c.position;
    }

    let factory = this.resolver.resolveComponentFactory(NotificationComponent);
    let componentRef = this.wrapperRef[c.position].instance.placeholder.createComponent(factory, 0);
    componentRef.instance.setConfig(c);

    componentRef.instance.close.subscribe(() => {
      componentRef.destroy();
      componentRef = null;
    });

    return componentRef;
  }

}
