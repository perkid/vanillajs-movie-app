///// Component /////
interface ComponentPayload {
  tagName?: string,
  props?: {
    [key: string]: unknown
  }
  state?: {
    [key: string]: unknown
  }
}

export class Component {
  public el
  public state
  public props
  constructor(payload: ComponentPayload = {}) {
    const { 
      tagName = 'div', 
      state = {},
      props = {}
    } = payload
    this.el = document.createElement(tagName)
    this.state = state
    this.props = props
    this.render()
  }
  render() {
    // ...
  }
}