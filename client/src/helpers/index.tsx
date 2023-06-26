import { notification } from 'antd';

export const showNotification = (message: string, description: string, duration: number) => {
  notification.open({
    message,
    description,
    duration,
  });
};
