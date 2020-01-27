import React from 'react';
import { StyleSheet, Text,  Navigator, View, StatusBar } from 'react-native';
//import {global, listView, detail-view, navbar} from 'styles';
import * as styles_global from './styles/global'
import HomeScreen from './home';
import StoriesListView from './stories-list-view';
import StoryDetailView from './story-detail-view';
// var styles = require('styles');
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
    StoriesListView: {screen: StoriesListView},
    StoryDetailView: {screen: StoryDetailView}
  },
  {
    initialRouteName: 'StoriesListView',
  });

const App = createAppContainer(MainNavigator);

export default App;
