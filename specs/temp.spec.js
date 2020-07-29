import Temprature from '@/temprature'
import { mount, createWrapper } from '@vue/test-utils'

describe('computed', () => {
  it('celsius', () => {
    const { vm } = mount(Temprature)
    expect(vm.celsius).toBe(0)
    vm.degrees = 23
    expect(vm.celsius).toBe(23)
  })

  it('fahrenheit', () => {
    const { vm } = mount(Temprature)
    expect(vm.fahrenheit).toBe(32)
    vm.degrees = 16
    expect(vm.fahrenheit).toBe(60.8)
  })

  it('temperature', () => {
    const wrapper = mount(Temprature, {
      propsData: {
        temp: 40
      }
    })
    const { vm } = wrapper 
    
    expect(vm.degrees).toBe(40)
    expect(vm.type).toBe('celsius')
    
    wrapper.setProps({
      temp: '50f'
    })
    vm.$nextTick(() => {
      expect(vm.degrees).toBe(50)
      expect(vm.type).toBe('fahrenheit')
    })
  })
})