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
        <year-cal _id={this.match.params.id}></year-cal>
      </div>
    );
  }
}
