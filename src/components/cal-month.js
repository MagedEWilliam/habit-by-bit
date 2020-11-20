import { Component, h, Prop, Element } from '@stencil/core';

@Component({
  tag: 'cal-month',
  styleUrl: '../styles/app-cal.css'
})
export class CalMonth {
  @Prop() name = '';
  @Prop() num = 0;
  @Prop() days = 0;
  @Element() comp

  render() {
    return (<span class="month" month={this.num}>
      <p class="month-title" fill="#CECECE">{this.name}</p>
      {[ ...Array(this.days).keys() ].map((k, idx)=>{

        setTimeout(()=>{
          this.comp.querySelector(`#date-${this.num}-${k}`).classList.add('reveal');
        }, 30*idx, this)

        setTimeout(()=>{
          this.comp.querySelector(`#date-${this.num}-${k}`).classList.add('reveal-font-level3');
          setTimeout(()=>{
            this.comp.querySelector(`#date-${this.num}-${k}`).classList.add('reveal-font-level2');
            setTimeout(()=>{
              this.comp.querySelector(`#date-${this.num}-${k}`).classList.add('reveal-font-level1');
            }, 10*idx, this)
          }, 20*idx, this)
        }, 30*idx, this)

        return <div class="day" id={`date-${this.num}-${k}`}>{String(k).padStart(2, "0")}</div>
      })
      }
      </span>)
  }
}