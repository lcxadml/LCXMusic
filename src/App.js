import React, { memo, Suspense } from 'react';
import { renderRoutes } from 'react-router-config'
import { HashRouter } from 'react-router-dom'
import routes from './router';
import { Provider } from 'react-redux';
import store from './store/index'

import AppHeader from './components/app-header';
import AppFooter from './components/app-footer'
import PlayerBar from './pages/player/app-player-bar';
const app = memo(() => {
    return (
        <Provider store={store}>
        <HashRouter>
            <AppHeader />
                <Suspense fallback={<h2>page Loading...</ h2>}>
                {renderRoutes(routes)}
                </Suspense>
            <AppFooter />
            <PlayerBar />
        </HashRouter>
        </Provider>
    );
});

export default app;