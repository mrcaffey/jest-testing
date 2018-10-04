import React from 'react'
import { shallow, mount } from 'enzyme'
import toJson from 'enzyme-to-json'
import  ConnectedComponent, { TodoList } from '../TodoList'
import { reduxHelper } from '../reduxTestHelper'
const initialState = { items: [] }

describe('<TodoList />', () => {
  describe('render', () => {
    let component

    beforeEach( () => {
      let tree = reduxHelper(ConnectedComponent, initialState).component
      component = mount(tree)
    })

    it('matches a snapshot', () => {
      expect(toJson(component)).toMatchSnapshot()
    })
    
  })

  describe('functionality', () => {
    let component
    const name = 'Hello World'

    it('updates state on change', () => {
      component = shallow(<TodoList items=[] />)
      const input = component.find('input')
      input.simulate('focus')
      input.simulate(
        'change', 
        { target: { name: 'name', value: name }}
      )

      expect(component.state('name')).toEqual(name)
    })

    it('submits the form', () => {
      const test = { dispatch: jest.fn() }
      let component = mount(<TodoList dispatch={test.dispatch} items={[]} />)
      component.setState({ name: 'Hello' })
      component.find('form').simulate('submit')
      expect(test.dispatch).toHaveBeenCalledTimes(1)
      expect(component.state('name')).equal('')
    })
  })

})