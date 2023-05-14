
// и компонент, который хотим протестировать
import { shallowMount } from '@vue/test-utils'
import MainPage from '../components/mainPage/mainPage.vue'
import store from '../store/index.js' //you could also mock this out.

describe('Компонент MainPage', () => {
  // Теперь монтируем компонент и получаем wrapper
  const wrapper = shallowMount(MainPage,{
    store
  })

  // it('отображает корректную разметку', () => {
  //   expect(wrapper.html()).toContain(`<p>Hi</p>`)
  // })

  it('Появился ли заголовок и его содержимое', async () => {
    const title = wrapper.find('.main_section_container_page_title')
    expect(title.text()).toBe('Cars Project')
    // hello.trigger('click')
    // await wrapper.vm.$nextTick()
    // expect(hello.text()).toBe('Buy Kitty')
  })

})

  
  
