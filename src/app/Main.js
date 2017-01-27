import React from 'react';

import {
	View
} from 'react-native';
import {Todo} from './Todo';
import ScrollableTabView from 'react-native-scrollable-tab-view';

export const Main = () => (
  <ScrollableTabView>
    <Todo tabLabel="Todos"/>
  </ScrollableTabView>
)