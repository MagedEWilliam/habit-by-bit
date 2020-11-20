import { Component, h, Prop, Element, State, Method } from '@stencil/core';
import { get_data } from '../store';

@Component({
  tag: 'app-share'
})
export class CalMonth {
  @Prop() _id = '0';
  @Prop() year = (new Date()).getFullYear();
  @Element() comp

  render() {
    return [
    <textarea id="copy" ></textarea>,
      <button class="option" onClick={this.share.bind(this)}>[ Share ]</button>
    ]
  }

  @Method()
  async share (){
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
      year[day+2][month-1] ='*'
    })

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

    
    return year;
  }
}