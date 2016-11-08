import React from 'react'
import { storiesOf } from '@kadira/storybook'
import { withKnobs } from '@kadira/storybook-addon-knobs'
import { withSmartKnobs } from 'storybook-addon-smart-knobs'

import Application from './Application'

storiesOf('Application')
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .add('sample story', () => <Application />)
