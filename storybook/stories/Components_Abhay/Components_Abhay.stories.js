
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import { SubMenu } from '../../../comps/SubMenu';
import {Task} from '../../../comps/Task'
import {ChatBar} from '../../../comps/ChatBar'

storiesOf('Components_Abhay', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Task Card', () => <Task/>)
  .add('statusSubMenu', () => <SubMenu/>)
  .add('Chat Bar', () => <ChatBar/>)
 

  
  
