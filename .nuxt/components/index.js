export { default as ButtonCustomBtn } from '../..\\components\\Button\\CustomBtn.vue'
export { default as Category } from '../..\\components\\Category\\Category.vue'
export { default as Footer } from '../..\\components\\Footer\\Footer.vue'
export { default as HeaderMainHeader } from '../..\\components\\Header\\MainHeader.vue'
export { default as Navbar } from '../..\\components\\Navbar\\Navbar.vue'
export { default as NavbarNavMobile } from '../..\\components\\Navbar\\NavMobile.vue'
export { default as ProductItem } from '../..\\components\\ProductItem\\ProductItem.vue'
export { default as ProductList } from '../..\\components\\ProductList\\ProductList.vue'

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
