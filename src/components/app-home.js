import { Component, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-home'
})
export class AppHome {
  @Prop() match;

  render() {
    return (
      <div class="app-home">
        <app-cal _id={this.match.params._id}></app-cal>
        <mark-today _id={this.match.params._id} />
        <app-tabs />
      </div>
    );
  }
}
