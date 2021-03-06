import { Component, h, Prop, Element, State, Method } from '@stencil/core';
import { get_data } from '../store';

@Component({
  tag: 'app-share'
})
export class CalMonth {
  @Prop() _id = '0';
  @Prop() year = (new Date()).getFullYear();
  @State() disable = true
  @Element() comp

  render() {
    return [
      <textarea id="copy" ></textarea>,
      <button class="option" onClick={this.share.bind(this)} disabled={this.disable}>[ Copy ]</button>,
      <button class="option" onClick={this.shareCSV.bind(this)} disabled={this.disable}>[ Copy CSV ]</button>,
    ]
  }

  componentDidRender(){
    const data = get_data(this._id, this.year);
    if(data == null || data.length > 1){
      this.disable = false;
    }
  }

  @Method()
  async shareDialog(year){

    try{
      if(navigator.clipboard){
        navigator.clipboard.writeText(year)
      }else{
        this.toCopy = year;
        const cp = this.comp.querySelector('#copy');
        cp.innerHTML = year;
        cp.focus();
        cp.select();
        cp.setSelectionRange(0, 99999);
        document.execCommand('copy');
      }
    }
    catch(err) {
      console.log(err)
    }
    
    try {
      if(navigator.share){
        await navigator.share({
          title: 'Habit by bit',
          text: year,
          url: 'https://habit-by-bit.netlify.com',
        })
      }
    } catch(err) {
      console.log(err)
    }
  }
  
  isLeapYear(year){
    return (year % 100 === 0) ? (year % 400 === 0) : (year % 4 === 0);
  }

  shareCSV (e){
    const fab = this.isLeapYear(this.year) ? 28 : 29;
    const month_days = [31,fab,31,30,31,30,31,31,30,31,30,31]
    const month_names = ['jan','fab','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
    const year= [];
    year.push([this._id,'','','','','','','','','','','','\n'])
    year.push(month_names)

    let month=1;
    let day=1;

    for(; day <= 31 ;day++){
      year.push(Array(12).fill(''))
      year[day][12] = '\n'
    }

    const data = get_data(this._id, this.year);

    data.map(date=>{
      const day = Number(date.replace(/[0-9]*-/, ''))
      const month = Number(date.replace(/-[0-9]*/, ''))
      year[day+2][month-1] ='x'
    })
    this.shareDialog(year)

    e.target.classList.add('done')
    setTimeout(e=> e.classList.remove('done'), 1000, e.target)
    return year;
  }


  share (e){
    const fab = this.isLeapYear(this.year) ? 29 : 28;
    const month_days = [31,fab,31,30,31,30,31,31,30,31,30,31]
    const year= [];
    const data = get_data(this._id, this.year);
    
    year.push(`I did ${data.length-1} days of ${this._id} this year.\n#${this.year}_habit_tracking\n#habit_by_bit\nhttp://habit-by-bit.netlify.app\n`)
    let month=1;
    let day=1;
    
    for(; day <= 31 ;day++){
      year.push(Array(12).fill('. '))
      year[day][12] = '\n'
      
      if(day >= fab){
        year[day].map( (d, idx)=> (month_days[idx] < day) && (year[day][idx] = '  ') )
      }
    }
    
    data.map(date=>{
      const day = Number(date.replace(/[0-9]*-/, ''))
      const month = Number(date.replace(/-[0-9]*/, ''))
      year[day+1][month-1] ='o '
    })

    this.shareDialog(year.toString().replace(/,/g,''))
    
    e.target.classList.add('done')
    setTimeout(e=> e.classList.remove('done'), 1000, e.target)
    return year;
  }
}