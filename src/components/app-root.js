import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
})
export class AppRoot {
  render() {
    return (
      <div>
        <main>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
              <stencil-route url="/:_id/:year" component="app-home" />
              <stencil-route url="/:_id" component="app-home" />
              <stencil-route url="/" component="app-home"/>
            </stencil-route-switch>
          </stencil-router>
        </main>
      </div>
    );
  }
}
