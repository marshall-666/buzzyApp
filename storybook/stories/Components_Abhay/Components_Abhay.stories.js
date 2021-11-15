
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import { SubMenu } from '../../../comps/SubMenu';
import {Task} from '../../../comps/Task'
import {ChatBar} from '../../../comps/ChatBar'
import {CreateGroup} from  '../../../comps/CreateGroup'
import {CalAgenda} from '../../../comps/Agenda'
import {HomeCalendar} from '../../../comps/Calendar'
import {TimeCalendar} from '../../../comps/TimeCalendar'

storiesOf('Components_Abhay', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Task Card', () => <Task/>)
  .add('statusSubMenu', () => <SubMenu/>)
  .add('Chat Bar', () => <ChatBar/>)
  .add ('Create group', ()=> <CreateGroup/>)
  .add ('CalAgenda', ()=> <CalAgenda/>)
  .add ('HomeCalendar', ()=> <HomeCalendar/>)
  .add ('TimeCalendar', ()=> <TimeCalendar/>)