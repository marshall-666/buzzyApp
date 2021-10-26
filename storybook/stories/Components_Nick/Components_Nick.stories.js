
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import NavBar from '../../../comps/NavBar';
import GroupEventCard from '../../../comps/GroupEventCard';

storiesOf('Components_Nick', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('NavBar', () => <NavBar/>)
  .add('GroupEventCard', () => <GroupEventCard/>)
  
  
