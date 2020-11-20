import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'cal-month',
  styleUrl: '../styles/app-cal.css'
})
export class CalMonth {
  @Prop() name = '';
  @Prop() num = 0;
  @Prop() days = 0;

  render() {
    return (<span class="month" month={this.num}>
      <p class="month-title" fill="#CECECE">{this.name}</p>
      {[ ...Array(this.days).keys() ].map(k=><div class="day" id={`date-${this.num}-${k}`}>{String(k).padStart(2, "0")}</div>)}
      </span>)
  }
}