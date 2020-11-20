import { Component, h, Prop, State, Element } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
import { get_data } from '../store';

@Component({
  tag: 'app-home',
  styleUrl: '../styles/app-home.css'
})
export class AppHome {
  @Prop() match;
  @Prop() history;

  @Element() comp;

  render() {
    return (
      <div class="app-home">
        {this.match.params._id ?
          [
          <app-cal _id={this.match.params._id} year={this.match.params.year} />,
          <app-options go={this.proxyHistory.bind(this)} _id={this.match.params._id} year={this.match.params.year}/>,
          <app-tabs _id={this.match.params._id} />] 
          : ( !this.goToFirstHabit() ? 
            <app-new/> 
          : this.history.push('/'+this.goToFirstHabit() ) )
        }
      </div>
    );
  }

  goToFirstHabit(){
    const data = Object.values( get_data() )
    return data.length === 0 ?  null : data[0].id
  }

  proxyHistory(url){
    this.history.push(url)
  }
}
