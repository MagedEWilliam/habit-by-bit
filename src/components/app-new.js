import { Component, h, State } from '@stencil/core';

@Component({
  tag: 'app-new',
  styleUrl:'../styles/app-new.css'
})

export class AppNew {
  @State() habit_name = '';

  goOnEnter(e) {
    if(e.keyCode === 13){
      window.location.href = '/' + this.habit_name;
    }
  } 
  render() {
    return (<div class="app-new">
      <div class="form">
        <label for="newhabit">Habit Name:</label><br/>
        <input class="newhabit" name="newhabit" placeholder="Drinking water..." type="text" onInput={e=> this.habit_name = e.target.value} value={this.habit_name} onKeyPress={ e=> this.goOnEnter(e)} ></input><br/><br/>
        <a class="start" href={'/'+this.habit_name}>Create</a>
      </div>
    </div>)
  }
}