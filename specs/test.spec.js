import TestComponent from '@/test'
import List from '@/list'
import { mount } from '@vue/test-utils'

test('renders the correct test html', () => {
  const wrapper = mount(TestComponent, {
    propsData: {
      value: 'VueSchool'
    }
  })
  expect(wrapper).toMatchSnapshot()
})

test('ListComponent', async () => {
  const wrapper = mount(List)
  const movies = wrapper.vm.marvelMovies
  wrapper.setData({ marvelMovies: [ ...movies, 'Endgame' ]})
  await wrapper.vm.$nextTick()
  expect(wrapper).toMatchSnapshot()
})
