import { Component, h, Prop, Element } from '@stencil/core';
import { get_data, insert_date } from '../store';

@Component({
  tag: 'app-tabs',
  styleUrl: '../styles/app-tabs.css'
})

export class AppTabs {
  @Prop() _id = '0'
  @Prop() year = (new Date()).getFullYear()
  @Element() comp;

  // it's a real thing, it's called "Predicate"
  // a state like to avoid re-render...
  newHabit = ()=> true

  render() {
    const data = Object.values( get_data() )
    
    return (<div class="tabs">
      <div class="tab-wrapper">
      {data.map(d=> (
        <stencil-route-link url={'/'+d.id}>
          <a class="tab">{d.name}</a>
        </stencil-route-link>)
      )}
    </div>
    </div>)
  }

  componentWillRender(){
    const data = Object.values( get_data() )
    let newItem = true;
    data.map(d=> {
      if(this._id == d.id){
        newItem = false;
      }
    })

    if(newItem){
      insert_date(this._id, this.year, null)
    }
  }

  componentDidRender(){
    this.comp.querySelectorAll('.tab').forEach(link=>{
      if(this._id == link.innerHTML){
        link.scrollIntoView({behavior: "smooth", block: "center", inline: "center"})
      }
    })
  }
}