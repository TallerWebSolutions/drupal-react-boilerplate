import { configure, addDecorator } from '@kadira/storybook'
import backgrounds from 'react-storybook-addon-backgrounds'

addDecorator(backgrounds([
  { name: 'white', value: 'white', default: true },
  { name: 'alabaster', value: '#F9F9F9' },
  { name: 'eminence', value: '#6E2B78' },
  { name: 'tuna', value: '#343343' },
  { name: 'scarpa-flow', value: '#4D4C51' },
]))

function loadStories () {
  require('../stories')
}

configure(loadStories, module)
