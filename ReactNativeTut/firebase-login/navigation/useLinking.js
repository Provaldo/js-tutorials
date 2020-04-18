import { useLinking } from '@react-navigation/native';
import { Linking } from 'expo';

export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Root: {
        path: 'root',
        screens: {
          Home: 'home',
          Links: 'links',
          Login: 'login',
          SignUp: 'signup',
          Load: 'load',
          Settings: 'settings',
        },
      },
      MainScreen:
      {
        path: 'mainscreen',
        screens: {
         Profile:'profile',
         ListUsers:'listU',
         Main:'logout',
         Load: 'load',
        },
      }
    },
  });
}
