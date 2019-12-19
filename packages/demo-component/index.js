import demoComponent from './src/demo-component'

demoComponent.install = function(Vue) {
  Vue.component(demoComponent.name, demoComponent)
}

export default demoComponent