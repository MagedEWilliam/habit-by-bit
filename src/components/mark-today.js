import { Component, h, Prop, State } from '@stencil/core';

@Component({
  tag: 'mark-today',
  styleUrl:'../styles/mark-today.css'
})
export class MarkToday {
  @Prop() _id = '0';
  @State() opacity = 0;
  @State() day = (new Date()).getDate();
  @State() month = (new Date()).getMonth()+1
  @State() year = (new Date()).getFullYear()

  handleTodayClick() {
    const dayClasses = document.querySelector(`#date-${this.month}-${this.day}`)
    if(!dayClasses.classList.contains('highlight')){
      dayClasses.click()
      this.opacity = 0;
    }
  }

  @Watch('_id')
  opacityReset(){
    this.opacity = 1;
  }
  
  render() {

    setTimeout( e=> {
      const dayClasses = document.querySelector(`#date-${this.month}-${this.day}`)
      if(dayClasses && dayClasses.classList.contains('highlight')){
        this.opacity = 0;
      }else{
        this.opacity = 1;
      }
    }, 1, this)

    return (
        <button style={{'opacity':this.opacity}} onClick={this.handleTodayClick.bind(this)}>Mark today?</button>
    );
  }
}
