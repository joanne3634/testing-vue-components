import ExerciseForm from '@/exercise-2';
import { mount } from '@vue/test-utils';
import { nextTick } from 'vue'
// Click the done button of the newly added task
// Expect that the final snapshot is at it's desired state

describe('test form', () => {
  it('follow the user through the form', async() => {
    const wrapper = mount(ExerciseForm)
    expect(wrapper).toMatchSnapshot()
    const form = wrapper.find('form')
    const input = form.find('input[name="add-task"]')
    const tasksList = wrapper.find('ul')

    input.setValue('my todo')
    form.trigger('submit')
    await nextTick()
    expect(wrapper).toMatchSnapshot()

    const doneBtn = tasksList.findAll('li').at(0).find('button')
    doneBtn.trigger('click')
    await nextTick()
    expect(wrapper).toMatchSnapshot()
    expect(tasksList.findAll('li').length).toBe(0)
  })
})