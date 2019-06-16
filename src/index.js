import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import * as serviceWorker from './serviceWorker';
import App from './components/App';
import { store, persistor } from './store';
import { AppWrapper } from './components/dashboard/styled/Dashboard';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <AppWrapper>
                <App />
            </AppWrapper>
        </PersistGate>
    </Provider>,
    document.getElementById('root')
 );

serviceWorker.unregister();
