import { Component, h, Prop, Element } from '@stencil/core';
import { get_data, remove_date, insert_date } from '../store';

@Component({
  tag: 'app-cal',
  styleUrl: '../styles/app-cal.css'
})
export class AppCal {
  // TODO: try to not pass any state to prevent rerender
  
  @Prop() _id = '0';
  @Prop() name = '⛵️';
  @Prop() color = '#00ffff';
  @Prop() day = (new Date()).getDate()
  @Prop() month = (new Date()).getMonth()+1
  @Prop() year = (new Date()).getFullYear()
  @Element() comp;

  render() {
    console.log('i souldnt rerender much')
    return (
      <div class="year" year={this.year.toString()}>
        <cal-month name={'jan'} num={1} days={31} />
        <cal-month name={'feb'} num={2} days={this.isLeapYear(this.year)? 29:28} />
        <cal-month name={'mar'} num={3} days={31} />
        <cal-month name={'apr'} num={4} days={30} />
        <cal-month name={'may'} num={5} days={31} />
        <cal-month name={'jun'} num={6} days={30} />
        <cal-month name={'jul'} num={7} days={31} />
        <cal-month name={'aug'} num={8} days={31} />
        <cal-month name={'sep'} num={9} days={30} />
        <cal-month name={'oct'} num={10} days={31} />
        <cal-month name={'nov'} num={11} days={30} />
        <cal-month name={'dec'} num={12} days={31} />
    </div>
    );
  }
  
  isLeapYear(year){
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
  }

  handleDayClick(e) {
    
    const dayClasses = e.target.classList;
    const date = e.target.id.replace('date-', '');

    
    if(dayClasses.contains('highlight')){
      // remove
      remove_date(this._id, this.year, date)
      dayClasses.remove('highlight')
    }else{
      // add
      insert_date(this._id, this.year, date)
      dayClasses.add('highlight')
    }
    
    if(this.comp.querySelector('.select.highlight')){
      document.querySelector('app-options').show = false;
    }else{
      document.querySelector('app-options').show = true;
    }
  }

  setHiglightOnCal(data){
    if(data && Object.keys(data).length !== 0){
      data.map(date=>{
        this.comp.querySelector(`#date-${date}`).classList.add('highlight')
      })
    }
  }

  x = this.handleDayClick.bind(this)
  componentDidRender(){
    this.comp.querySelector(`#date-${this.month}-${this.day}`).classList.add('select')
    this.comp.querySelectorAll('.day').forEach(day=>{
      day.removeEventListener('click', this.x )
      day.classList.remove('highlight')
      day.addEventListener('click', this.x )
    })
    
    this.setHiglightOnCal(get_data(this._id, this.year))
  }
  
  disconnectedCallback(){
    this.comp.querySelectorAll('.day').forEach(day=>{
      day.removeEventListener('click', this.handleDayClick.bind(this), true )
    })
  }
}
