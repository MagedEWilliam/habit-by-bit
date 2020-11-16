import { Component, h } from '@stencil/core';
import { MatchResults } from '@stencil/router';

@Component({
  tag: 'app-home',
  styleUrl:'../styles/app-home.css'
})
export class AppHome {
  @Prop() match;

  render() {
    return (
      <div class="app-home">
        <app-cal _id={this.match.params._id}></app-cal>
        <div class="mark-today">
          <button>Mark today?</button>
        </div>
        <app-tabs />
      </div>
    );
  }
}
