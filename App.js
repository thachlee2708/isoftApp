import RootStack from './src/StackNavigator';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider, useSelector} from 'react-redux';
import {persistor, store} from './src/Redux/rootStore';
import {PersistGate} from 'redux-persist/integration/react';
import {LogBox} from 'react-native';
LogBox.ignoreAllLogs();
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <RootStack />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
