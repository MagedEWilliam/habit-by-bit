import { Component, h, Prop, Element } from '@stencil/core';
import { get_data } from '../store';

@Component({
  tag: 'app-tabs',
  styleUrl: '../styles/app-tabs.css'
})

export class AppTabs {
  @Prop() _id = '0'
  @Prop() year = (new Date()).getFullYear()
  @Element() comp;

  newHabit = ()=> true

  componentDidRender(){
    this.comp.querySelectorAll('.tab').forEach(link=>{
      if(this._id == link.innerHTML){
        link.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
      }
    })
  }

  render() {
    const data = Object.values( get_data() )
    
    return (<div class="tabs">
      <div class="tab-wrapper">
      {data.map(d=> {
        if(this._id == d.id){
          this.newHabit = ()=> false;
        }
      return(<stencil-route-link url={'/'+d.id}>
        <a class="tab">{d.name}</a>
      </stencil-route-link>)
      })
    }
    <stencil-route-link style={{'display': !this.newHabit() && 'none' }} url={'/'+this._id}>
      <a class="tab">{decodeURIComponent(this._id)}</a>
    </stencil-route-link>
    </div>
    </div>)
  }
}