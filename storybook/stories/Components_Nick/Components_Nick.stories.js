
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CenterView from '../CenterView';
import NavBar from '../../../comps/NavBar';
import GroupEventCard from '../../../comps/GroupEventCard';
import IndividualEventCard from '../../../comps/IndividualEventCard';
import CourseEventCard from '../../../comps/CourseEventCard';


storiesOf('Components_Nick', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('NavBar', () => <NavBar/>)
  .add('GroupEventCard', () => <GroupEventCard/>)
  .add('IndividualEventCard', () => <IndividualEventCard/>)
  .add('CourseEventCard', () => <CourseEventCard/>)
  
  
  
