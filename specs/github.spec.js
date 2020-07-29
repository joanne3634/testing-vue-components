import GithubCard from '@/github-card'
import { mount } from '@vue/test-utils'

describe('methods', () => {
  it('composeUrl', () => {
    const { composeUrl } = GithubCard.methods
    expect(composeUrl(123)).toBe('https://api.github.com/users/123')
    expect(composeUrl('freddyMercury')).toBe('https://api.github.com/users/freddyMercury')
  })

  it('fetchData', async () => {
    const jsonMock = jest.fn().mockResolvedValue('GITHUB DATA')

    window.fetch = jest.fn().mockResolvedValue({
      json: jsonMock
    })

    const wrapper = mount(GithubCard)
    await wrapper.vm.fetchData('')
    expect(window.fetch).toHaveBeenCalled()
    expect(jsonMock).toHaveBeenCalled()
    expect(wrapper.vm.data).toBe('GITHUB DATA')
  })
})
