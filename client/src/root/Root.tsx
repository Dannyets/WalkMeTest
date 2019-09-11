import React from 'react';
import { Provider } from 'react-redux';

import { routes } from './routes';

import './Root.css';
import '../app/App.css';
import { Header } from './Root.styles';

import {
  ThemeProvider,
  NavigationWithRouter,
  Router,
  configureStore,
  IRoute,
  IConfiguration
} from '../common';

const store = configureStore({
  events: {
    counts: {
      total: 0,
      count: 0,
      move: 0
    }
  }
});

const navigationLinks = convertRoutesToNavigationLinks(routes);

export const configuration: IConfiguration = {
  baseUrl: 'http://localhost:3002'
};

export const ConfigContext = React.createContext(configuration);

export const Root: React.FC = () => {
  return (
    <ConfigContext.Provider value={configuration}>
      <Provider store={store}>
          <ThemeProvider>
              <Router routes={routes}>
                <Header>
                  <NavigationWithRouter links={navigationLinks} />
                </Header>
              </Router>
          </ThemeProvider>
        </Provider>
    </ConfigContext.Provider>
  );
}

function convertRoutesToNavigationLinks(routes: IRoute[]) {
  return routes.filter(r => r.navigation && r.navigation.show)
    .map(r => {
      const { url, navigation } = r;
      const { displayName } = navigation;

      return {
        label: displayName,
        href: url
      };
    });
}