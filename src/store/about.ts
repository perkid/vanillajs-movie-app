import { Store } from '../core'

interface State {
  photo: string
  name: string
  email: string
  blog: string
  github: string
  repository: string
}
export default new Store<State>({
  photo: '',
  name: 'YUE / KoYuJun',
  email: 'perkid90@gmail.com',
  blog: '',
  github: 'https://github.com/perkid',
  repository: 'https://github.com/perkid/vanillajs-movie-app'
})