import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text,TouchableOpacity } from 'react-native';
import CenterView from '../CenterView';
import RecBtn from '../../../comps/RecBtn';
import AppHeader from '../../../comps/AppHeader';
import AppTimePicker from '../../../comps/AppTimePicker';
import JoinCreate from '../../../comps/JoinCreate';
import TaskBtn from '../../../comps/taskBtn'
import TaskTable from '../../../comps/TaskTable'


storiesOf('Components_Levi', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('create_Button', () => <RecBtn/>)
  .add('taskButton', () => <TaskBtn/>)
  .add('AppHeader', () => <AppHeader/>)
  .add('AppTimePicker', () => <AppTimePicker/>)
  .add('JoinCreateCard', () => <JoinCreate/>)
  .add('TaskTable', () => <TaskTable/>)

  
