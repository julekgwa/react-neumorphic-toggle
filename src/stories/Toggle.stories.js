import {
  storiesOf
} from '@storybook/react';

import React from 'react';

const stories = storiesOf('Toggle', module);

import {
  Switch
} from '../index';

stories.add('Toggle', () => {

  return <Switch />

});