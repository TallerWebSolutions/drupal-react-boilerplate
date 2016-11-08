jest.unmock('../Application')

import React from 'react'
import { mount } from 'enzyme'

import Application from '../Application'

describe('[Component] Application', () => {
  it('should show "Hello world!"', () => {
    const ApplicationWrapper = mount(<Application />)
    expect(ApplicationWrapper.text()).toContain('Hello world!')
  })
})
