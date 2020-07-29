import { shallowMount } from '@vue/test-utils'
import ListComponent from '@/list'

describe('test stubs', () => {
  const ListItemStub = {
    template: `<li>{{ movie }}</li>`,
    props: ['movie']
  }
it('shallowMount', () => {
    const wrapper = shallowMount(ListComponent, {
      stubs: {
        ListItem: ListItemStub
      }
    })
    expect(wrapper).toMatchSnapshot()
  })
  
})