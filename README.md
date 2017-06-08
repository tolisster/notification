# Installing

> npm i --save @pe/ui-notification

# Import module

```typescript
import { NotificationModule } from '@pe/ui-notification';

export class YourModule {
    imports: [
        ...
        NotificationModule
        ...
    ]
}
```

# Inject the view ref in the app component

app.component.ts:

```typescript
export class AppComponent {
  constructor(public viewContainerRef: ViewContainerRef) {}
```

## Config

- message - Default ""
- icon - Default null
- timeOut - Default 5000
- position - Default "top-right"


Config interface can be imported from @pe/ui-notification if needed

## Create from service
Factory method:
````typescript
createNotification(config: ConfirmationDialogConfig): ComponentRef<NotificationComponent> {}
````
### Example
Import service
````typescript
import {NotificationService} from '@pe/ui-notification/src/notification.service';
````

Component
````typescript
export class MyComponent {

  constructor(private notificationService: NotificationService) {
  }

  createNotification() {
    let notificationRef = this.notificationService.createNotification({message: 'Hello from server!'});
    notificationRef.onDestroy(() => {
      console.log('closed');
    });
  }
}
````

Template
````html
    <button class="btn btn-default" (click)="createNotification()">
      Notification
    </button>
````