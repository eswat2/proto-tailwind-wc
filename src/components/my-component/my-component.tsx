import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';
import { Alien } from './alien'
import { AltWrapper } from './alt-wrapper';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <div class="ds1-main">
        <Alien class="mb-4" size={48} />
        <label class="salute">Hello, World!</label>
        <AltWrapper>{this.getText()}</AltWrapper>
      </div>
    );
  }
}
