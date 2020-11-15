import { Component, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-home',
})
export class AppHome {
  @Prop() match;

  render() {
    return (
      <div class="app-home">
        <b>{this.match && this.match.params.id}</b>
      </div>
    );
  }
}
