import React from 'react';
import {ThemeProvider} from '@components/ThemeProvider';
import RootNavigation from '@components/RootNavigation';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import QueryProvider from '@components/QueryProvider';
import {Provider as StoreProvider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from '@store/store';

function App(): JSX.Element {
  return (
    <SafeAreaProvider>
      <StoreProvider store={store}>
        <PersistGate persistor={persistor}>
          <QueryProvider>
            <ThemeProvider>
              <RootNavigation />
            </ThemeProvider>
          </QueryProvider>
        </PersistGate>
      </StoreProvider>
    </SafeAreaProvider>
  );
}

export default App;
