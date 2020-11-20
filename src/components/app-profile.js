import { Component, Prop, h } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';

@Component({
  tag: 'app-profile',
})
export class AppProfile {
  @Prop() match;
  @Prop() history;
  
  render() {
    if (this.match && this.match.params.name) {
      return (
        <div class="app-profile">
          <p>Hello! My name is {this.normalize(this.match.params.name)}. My name was passed in through a route param!</p>
          <stencil-route-link url="/profile/yo">
            <button>Profile page</button>
          </stencil-route-link>

          <button onClick={()=> this.history.goBack()}>back</button>
        </div>
      );
    }
  }

  normalize(name) {
    if (name) {
      return name.substr(0, 1).toUpperCase() + name.substr(1).toLowerCase();
    }
    return '';
  }
}
