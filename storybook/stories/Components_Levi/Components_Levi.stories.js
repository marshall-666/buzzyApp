import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text,TouchableOpacity } from 'react-native';
import CenterView from '../CenterView';
import RecBtn from '../../../Comps/RecBtn';
import AppHeader from '../../../Comps/AppHeader';
import AppTimePicker from '../../../Comps/AppTimePicker'
import JoinCreate from '../../../Comps/JoinCreate'

storiesOf('Components_Levi', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('create_Button', () => <RecBtn/>)
  .add('AppHeader', () => <AppHeader/>)
  .add('AppTimePicker', () => <AppTimePicker/>)
  .add('JoinCreateCard', () => <JoinCreate/>)
  
