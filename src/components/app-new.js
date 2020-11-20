import { Component, h, Element, State } from '@stencil/core';

@Component({
  tag: 'app-new',
  styleUrl:'../styles/app-new.css'
})

export class AppNew {
  @State() habit_name = '';
  @Element() comp;

  render() {
    return (<div class="app-new">
      <form class="form">
        <label for="newhabit">Habit Name:</label>
        <input class="newhabit" name="newhabit" placeholder="Drinking water..." type="text" onInput={e=> this.habit_name = e.target.value} value={this.habit_name} onKeyPress={ e=> this.goOnEnter(e)} />
        <br/>
        <br/>
        <stencil-route-link url={'/'+this.habit_name}>
          <button class="start">Create</button>
        </stencil-route-link>
      </form>
    </div>)
  }

  goOnEnter(e) {
    if(e.keyCode === 13){
      this.comp.querySelector('.start').click();
    }
  } 
  componentDidRender(){
    // something to do with lazy loading
    setTimeout( ()=>{
      this.comp.querySelector('.newhabit').focus()
    }, 1, this)
  }
}