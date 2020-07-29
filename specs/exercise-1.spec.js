import UserList from '@/exercise-1';
import { mount } from '@vue/test-utils';
import { name } from 'faker'

describe('test exercise 1', () => {
  // Add at least two more names to the users array, 
  // and test that they are all rendered in the DOM
  it('Add two more names and rendered in the DOM', () => {
    const wrapper = mount(UserList, {
      propsData: {
        users: [name.findName()]
      }
    })
    expect(wrapper.find('li').text()).toBe(wrapper.props('users')[0])
  })
  // Add one of the names to the filter, 
  // and expect that only this name is rendered in the DOM
  it('Filter to show only Joanne', async () => {
    const wrapper = mount(UserList, {
      propsData: {
        users: [name.findName(), name.findName()]
      }
    })
    expect(wrapper.findAll('li').length).toBe(2)

    // simulate input 
    const pickedName = wrapper.findAll('li').at(0).text()
    wrapper.find('input').setValue(pickedName)
    await wrapper.vm.$nextTick()
    expect(wrapper.find('li').text()).toBe(pickedName)
  })
})

