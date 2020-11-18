import { Component, h, Prop, State } from '@stencil/core';
import { get_data, deleteByID } from '../store';

@Component({
  tag: 'app-options',
  styleUrl:'../styles/app-options.css'
})
export class AppOptions {
  @State() show = false;
  @State() day = (new Date()).getDate();
  @State() month = (new Date()).getMonth()+1
  @Prop() year = (new Date()).getFullYear()
  @Prop() _id = '0';

  getNextHabit(){
    let index = 0;
    const data = Object.keys(get_data());
    data.map((d, idx)=> (d == this._id)? index = idx : null )

    if(index+1 >= data.length ){
      index = 0;
    }else{
      index++;
    }
    return get_data()[data[index]];
  }

  handleTodayClick() {
    const dayClasses = document.querySelector(`#date-${this.month}-${this.day}`)
    if(!dayClasses.classList.contains('highlight')){
      dayClasses.click();

      window.location.href = '/' + this.getNextHabit().id;
      this.show = false;
    }
  }

  @Watch('_id')
  hideReset(){
    this.show = true;
  }

  deleteByID(){
    const deleteit = confirm(`Delete ${this._id}`)
    if(deleteit){
      deleteByID(this._id)
    }
  }
  
  componentDidRender(){
    const dayClasses = document.querySelector(`#date-${this.month}-${this.day}`)
    if(dayClasses && dayClasses.classList.contains('highlight')){
      this.show = false;
    }else{
      this.show = true;
    }
  }

  render() {
    return [
      <button class="option" onClick={e=> this.deleteByID()}>[ Delete ]</button>,
      <stencil-route-link url="/new-habit"><button class="option">[ New ]</button></stencil-route-link>,
      <button class={{'show':this.show, 'today': true}} onClick={this.handleTodayClick.bind(this)}>[ Mark today? ]</button>,
    ];
  }
}
