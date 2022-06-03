import React from 'react';
import {Provider} from 'react-redux';
import {persistor, store} from './src/Redux/rootStore';
import {PersistGate} from 'redux-persist/integration/react';
import {LogBox} from 'react-native';
import Main from './src/Main';
LogBox.ignoreAllLogs();
const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        {/* <NavigationContainer ref={navigationRef}>
          <RootStack routeName={routeName} />
        </NavigationContainer> */}
        <Main />
      </PersistGate>
    </Provider>
  );
};

export default App;
