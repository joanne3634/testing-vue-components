import AlertMessage from '@/alert-message'
import { mount } from '@vue/test-utils'

jest.useFakeTimers()

describe('lifecycle methods', () => {
  it('mounted assigns interval', () => {
    const wrapper = mount(AlertMessage)
    expect(wrapper.vm.interval).not.toBe(undefined)
  })

  it('counter works', () => {
    const { vm } = mount(AlertMessage)
    expect(vm.counter).toBe(0)
    jest.advanceTimersByTime(1000)
    expect(vm.counter).toBe(1)
    jest.advanceTimersByTime(1000)
    expect(vm.counter).toBe(2)
  })

  it('instance gets destroyed', () => {
    const beforeDestroyedSpy = jest.spyOn(AlertMessage, 'beforeDestroy')
    const { vm } = mount(AlertMessage)
    vm.counter = vm.timer - 1
    jest.advanceTimersByTime(1000)
    expect(beforeDestroyedSpy).toHaveBeenCalled()
    expect(vm.interval).toBe(false)
  })
})