import { useState, useEffect } from 'react';
import { getToken, onMessage } from 'firebase/messaging';
import { messaging } from '../services/firebase';

export const useNotification = () => {
  const [notification, setNotification] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (!messaging) return;

    const requestPermission = async () => {
      try {
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
          const currentToken = await getToken(messaging, {
            vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY,
          });
          setToken(currentToken);
        }
      } catch (error) {
        console.error('Error getting notification permission:', error);
      }
    };

    requestPermission();

    const unsubscribe = onMessage(messaging, (payload) => {
      setNotification(payload);
    });

    return () => unsubscribe();
  }, []);

  return { notification, token };
};
