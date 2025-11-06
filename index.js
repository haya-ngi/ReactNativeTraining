/**
 * @format
 */
import {AppRegistry} from 'react-native';
import App from './App'; // 👈 Your main app file
import {name as appName} from './app.json';

// ✅ Required imports for gesture handler & reanimated (order matters)
import 'react-native-gesture-handler';
// import 'react-native-reanimated';

// 👇 Register your main app component
AppRegistry.registerComponent(appName, () => App);
