import { getToken, onMessage } from 'firebase/messaging';
import { messaging } from './firebase';

export const notificationService = {
  async requestPermission() {
    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        console.log('Notification permission granted');
        return true;
      }
      return false;
    } catch (error) {
      console.error('Error requesting notification permission:', error);
      return false;
    }
  },

  async getToken() {
    if (!messaging) {
      console.warn('Firebase messaging not supported');
      return null;
    }

    try {
      const token = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
      });
      return token;
    } catch (error) {
      console.error('Error getting FCM token:', error);
      return null;
    }
  },

  onMessageListener() {
    if (!messaging) {
      return () => {};
    }

    return new Promise((resolve) => {
      onMessage(messaging, (payload) => {
        resolve(payload);
      });
    });
  },

  async sendNotification(title, body, data = {}) {
    if ('Notification' in window && Notification.permission === 'granted') {
      new Notification(title, {
        body,
        icon: '/icons/icon-192x192.png',
        badge: '/icons/icon-72x72.png',
        data,
      });
    }
  },
};
