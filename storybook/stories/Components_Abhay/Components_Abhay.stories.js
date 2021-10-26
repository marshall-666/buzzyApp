
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import NavBar from '../../../comps/NavBar';
import { SubMenu } from '@/Comps/SubMenu';
import {Task} from '../../../Comps/Task'

storiesOf('Components_Nick', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Task Card', () => <Task/>)
  .add('statusSubMenu', () => <SubMenu/>)
 

  
  
