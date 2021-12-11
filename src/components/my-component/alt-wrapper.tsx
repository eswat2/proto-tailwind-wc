import { FunctionalComponent, h } from '@stencil/core';
import { Spinner } from './spinner'

const AltWrapper: FunctionalComponent = (_props, children) => {
  return (
    <label class="container flex items-center">
      <Spinner class="mr-2" /> I'm
      <span class="my-label ml-1">{children}</span>
    </label>
  )
}

export { AltWrapper }
export default AltWrapper
