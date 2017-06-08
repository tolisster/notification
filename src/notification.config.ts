export type PositionType = 'top-right' | 'bottom-right' | 'bottom-left' | 'top-left';

export interface NotificationConfig {
  message?: string;
  icon?: string;
  timeOut?: number;
  position?: PositionType;
}

export const NotificationDefaultConfig: NotificationConfig = {
  message: '',
  icon: null,
  timeOut: 5000,
  position: 'top-right'
};
