
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import NavBar from '../../../comps/NavBar';

storiesOf('Components_Nick', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('NavBar', () => <NavBar/>)
  
  
