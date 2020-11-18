import { Component, h, Prop, State } from '@stencil/core';
import { MatchResults, RouterHistory } from '@stencil/router';
import { get_data } from '../store';

@Component({
  tag: 'app-home'
})
export class AppHome {
  @Prop() match;
  @Prop() history;

  goToFirstHabit(){
    const data = Object.values( get_data() )
    return data.length === 0 ?  null : data[0].id
  }

  render() {
    return (
      <div class="app-home">
        {this.match.params._id ?
          [
          <app-cal _id={this.match.params._id} year={this.match.params.year} />,
          <mark-today _id={this.match.params._id}/>,
          <app-tabs _id={this.match.params._id} />] 
          : ( !this.goToFirstHabit() ? 
            <app-new/> 
          : this.history.push('/'+this.goToFirstHabit() ) )
        }
      </div>
    );
  }
}
