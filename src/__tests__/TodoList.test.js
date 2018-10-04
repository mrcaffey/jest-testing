import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import TodoList from '../TodoList'

describe('<TodoList />', () => {
  describe('render', () => {
    let tree
    
    beforeEach( () => {
      let component = shallow(<TodoList />)
      tree = toJson(component)
    })

    it('matches a snapshot', () => {
      const component = shallow(<TodoList />
      const tree = toJson(component)
      expect(tree).toMatchSnapshot()

    })

  })

  describe('Functionality', () => {
    let component
    const name = 'Hello'

    beforeEach( () => {
      component = shallow(<TodoList />)
  })

  it('updates state on change', () => {
    const input = component.find('input')
    input.simulate('focus')
    input.simulate(
      'change',
      { target: { name: 'name', value: 'Hello' }}
    )

    expect(component.state('name')).toEqual('Hello')
  })

    it('submits the form', () => {
      expect(component.state('items)).length.toEqual(0)
      input.simulate('focus')
      input.simulate(
        'change',
        { target: { name: 'name', value: 'Hello" }}
      )

    })

    const e { preventDefault: jest.fn() }
    component.find('form').simulate('submit', e)
    expect(component.state('items').length).toEqual(1)
    })
