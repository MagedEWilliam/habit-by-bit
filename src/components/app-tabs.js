import { Component, h, Prop, Element } from '@stencil/core';
import { get_data } from '../store';

@Component({
  tag: 'app-tabs',
  styleUrl: '../styles/app-tabs.css'
})

export class AppTabs {
  @Prop() _id = 0
  @Prop() year = (new Date()).getFullYear()
  @Element() comp;

  render() {
    const data = Object.values( get_data() )
    
    return (<div class="tabs">
      {data.map(d=> <stencil-route-link url={'/'+d.id}>
        <a class="tab">{d.name}</a>
      </stencil-route-link>) 
    }</div>)
  }
}