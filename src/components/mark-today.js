import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'mark-today',
  styleUrl:'../styles/mark-today.css'
})
export class MarkToday {
  @Prop() _id = '0';
  @State() show = false;
  @State() day = (new Date()).getDate();
  @State() month = (new Date()).getMonth()+1
  @State() year = (new Date()).getFullYear()

  handleTodayClick() {
    const dayClasses = document.querySelector(`#date-${this.month}-${this.day}`)
    if(!dayClasses.classList.contains('highlight')){
      dayClasses.click()
      this.show = false;
    }
  }

  @Watch('_id')
  hideReset(){
    this.show = true;
  }
  
  render() {

    const dayClasses = document.querySelector(`#date-${this.month}-${this.day}`)
    if(dayClasses && dayClasses.classList.contains('highlight')){
      this.show = false;
    }else{
      this.show = true;
    }

    return (
      <button class={{'show':this.show}} onClick={this.handleTodayClick.bind(this)}>[ Mark today? ]</button>
    );
  }
}
