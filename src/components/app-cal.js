import { Component, h, Prop, Element } from '@stencil/core';
import { get_data, remove_date, insert_date } from '../store';

@Component({
  tag: 'app-cal',
  styleUrl: '../styles/app-cal.css'
})
export class AppCal {
  @Prop() _id = '0';
  @Prop() name = '⛵️';
  @Prop() color = '#00ffff';
  @Prop() day = (new Date()).getDate()
  @Prop() month = (new Date()).getMonth()+1
  @Prop() year = (new Date()).getFullYear()
  @Element() comp;

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
  }

  setHiglightOnCal(data){
    if(Object.keys(data).length !== 0){
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

  render() {
    return (
      <div class="year" year={this.year.toString()}>
      <span class="month" month="1">
        <p class="month-title" fill="#CECECE">jan</p>
        <div class="day" id="date-1-1">1</div>
        <div class="day" id="date-1-2">2</div>
        <div class="day" id="date-1-3">3</div>
        <div class="day" id="date-1-4">4</div>
        <div class="day" id="date-1-5">5</div>
        <div class="day" id="date-1-6">6</div>
        <div class="day" id="date-1-7">7</div>
        <div class="day" id="date-1-8">8</div>
        <div class="day" id="date-1-9">9</div>
        <div class="day" id="date-1-10">10</div>
        <div class="day" id="date-1-11">11</div>
        <div class="day" id="date-1-12">12</div>
        <div class="day" id="date-1-13">13</div>
        <div class="day" id="date-1-14">14</div>
        <div class="day" id="date-1-15">15</div>
        <div class="day" id="date-1-16">16</div>
        <div class="day" id="date-1-17">17</div>
        <div class="day" id="date-1-18">18</div>
        <div class="day" id="date-1-19">19</div>
        <div class="day" id="date-1-20">20</div>
        <div class="day" id="date-1-21">21</div>
        <div class="day" id="date-1-22">22</div>
        <div class="day" id="date-1-23">23</div>
        <div class="day" id="date-1-24">24</div>
        <div class="day" id="date-1-25">25</div>
        <div class="day" id="date-1-26">26</div>
        <div class="day" id="date-1-27">27</div>
        <div class="day" id="date-1-28">28</div>
        <div class="day" id="date-1-29">29</div>
        <div class="day" id="date-1-30">30</div>
        <div class="day" id="date-1-31">31</div>
      </span>
      <span class="month" month="2">
        <p class="month-title" fill="#CECECE">feb</p>
        <div class="day" id="date-2-1">1</div>
        <div class="day" id="date-2-2">2</div>
        <div class="day" id="date-2-3">3</div>
        <div class="day" id="date-2-4">4</div>
        <div class="day" id="date-2-5">5</div>
        <div class="day" id="date-2-6">6</div>
        <div class="day" id="date-2-7">7</div>
        <div class="day" id="date-2-8">8</div>
        <div class="day" id="date-2-9">9</div>
        <div class="day" id="date-2-10">10</div>
        <div class="day" id="date-2-11">11</div>
        <div class="day" id="date-2-12">12</div>
        <div class="day" id="date-2-13">13</div>
        <div class="day" id="date-2-14">14</div>
        <div class="day" id="date-2-15">15</div>
        <div class="day" id="date-2-16">16</div>
        <div class="day" id="date-2-17">17</div>
        <div class="day" id="date-2-18">18</div>
        <div class="day" id="date-2-19">19</div>
        <div class="day" id="date-2-20">20</div>
        <div class="day" id="date-2-21">21</div>
        <div class="day" id="date-2-22">22</div>
        <div class="day" id="date-2-23">23</div>
        <div class="day" id="date-2-24">24</div>
        <div class="day" id="date-2-25">25</div>
        <div class="day" id="date-2-26">26</div>
        <div class="day" id="date-2-27">27</div>
        <div class="day" id="date-2-28">28</div>
        {this.isLeapYear(this.year) 
        && <div class="day" id="date-2-29 leap">29</div>
        }
      </span>
      <span class="month" month="3">
        <p class="month-title" fill="#CECECE">mar</p>
        <div class="day" id="date-3-1">1</div>
        <div class="day" id="date-3-2">2</div>
        <div class="day" id="date-3-3">3</div>
        <div class="day" id="date-3-4">4</div>
        <div class="day" id="date-3-5">5</div>
        <div class="day" id="date-3-6">6</div>
        <div class="day" id="date-3-7">7</div>
        <div class="day" id="date-3-8">8</div>
        <div class="day" id="date-3-9">9</div>
        <div class="day" id="date-3-10">10</div>
        <div class="day" id="date-3-11">11</div>
        <div class="day" id="date-3-12">12</div>
        <div class="day" id="date-3-13">13</div>
        <div class="day" id="date-3-14">14</div>
        <div class="day" id="date-3-15">15</div>
        <div class="day" id="date-3-16">16</div>
        <div class="day" id="date-3-17">17</div>
        <div class="day" id="date-3-18">18</div>
        <div class="day" id="date-3-19">19</div>
        <div class="day" id="date-3-20">20</div>
        <div class="day" id="date-3-21">21</div>
        <div class="day" id="date-3-22">22</div>
        <div class="day" id="date-3-23">23</div>
        <div class="day" id="date-3-24">24</div>
        <div class="day" id="date-3-25">25</div>
        <div class="day" id="date-3-26">26</div>
        <div class="day" id="date-3-27">27</div>
        <div class="day" id="date-3-28">28</div>
        <div class="day" id="date-3-29">29</div>
        <div class="day" id="date-3-30">30</div>
        <div class="day" id="date-3-31">31</div>
      </span>
      <span class="month" month="4">
        <p class="month-title" fill="#CECECE">apr</p>
        <div class="day" id="date-4-1">1</div>
        <div class="day" id="date-4-2">2</div>
        <div class="day" id="date-4-3">3</div>
        <div class="day" id="date-4-4">4</div>
        <div class="day" id="date-4-5">5</div>
        <div class="day" id="date-4-6">6</div>
        <div class="day" id="date-4-7">7</div>
        <div class="day" id="date-4-8">8</div>
        <div class="day" id="date-4-9">9</div>
        <div class="day" id="date-4-10">10</div>
        <div class="day" id="date-4-11">11</div>
        <div class="day" id="date-4-12">12</div>
        <div class="day" id="date-4-13">13</div>
        <div class="day" id="date-4-14">14</div>
        <div class="day" id="date-4-15">15</div>
        <div class="day" id="date-4-16">16</div>
        <div class="day" id="date-4-17">17</div>
        <div class="day" id="date-4-18">18</div>
        <div class="day" id="date-4-19">19</div>
        <div class="day" id="date-4-20">20</div>
        <div class="day" id="date-4-21">21</div>
        <div class="day" id="date-4-22">22</div>
        <div class="day" id="date-4-23">23</div>
        <div class="day" id="date-4-24">24</div>
        <div class="day" id="date-4-25">25</div>
        <div class="day" id="date-4-26">26</div>
        <div class="day" id="date-4-27">27</div>
        <div class="day" id="date-4-28">28</div>
        <div class="day" id="date-4-29">29</div>
        <div class="day" id="date-4-30">30</div>
      </span>
      <span class="month" month="5">
        <p class="month-title" fill="#CECECE">may</p>
        <div class="day" id="date-5-1">1</div>
        <div class="day" id="date-5-2">2</div>
        <div class="day" id="date-5-3">3</div>
        <div class="day" id="date-5-4">4</div>
        <div class="day" id="date-5-5">5</div>
        <div class="day" id="date-5-6">6</div>
        <div class="day" id="date-5-7">7</div>
        <div class="day" id="date-5-8">8</div>
        <div class="day" id="date-5-9">9</div>
        <div class="day" id="date-5-10">10</div>
        <div class="day" id="date-5-11">11</div>
        <div class="day" id="date-5-12">12</div>
        <div class="day" id="date-5-13">13</div>
        <div class="day" id="date-5-14">14</div>
        <div class="day" id="date-5-15">15</div>
        <div class="day" id="date-5-16">16</div>
        <div class="day" id="date-5-17">17</div>
        <div class="day" id="date-5-18">18</div>
        <div class="day" id="date-5-19">19</div>
        <div class="day" id="date-5-20">20</div>
        <div class="day" id="date-5-21">21</div>
        <div class="day" id="date-5-22">22</div>
        <div class="day" id="date-5-23">23</div>
        <div class="day" id="date-5-24">24</div>
        <div class="day" id="date-5-25">25</div>
        <div class="day" id="date-5-26">26</div>
        <div class="day" id="date-5-27">27</div>
        <div class="day" id="date-5-28">28</div>
        <div class="day" id="date-5-29">29</div>
        <div class="day" id="date-5-30">30</div>
        <div class="day" id="date-5-31">31</div>
      </span>
      <span class="month" month="6">
        <p class="month-title" fill="#CECECE">jun</p>
        <div class="day" id="date-6-1">1</div>
        <div class="day" id="date-6-2">2</div>
        <div class="day" id="date-6-3">3</div>
        <div class="day" id="date-6-4">4</div>
        <div class="day" id="date-6-5">5</div>
        <div class="day" id="date-6-6">6</div>
        <div class="day" id="date-6-7">7</div>
        <div class="day" id="date-6-8">8</div>
        <div class="day" id="date-6-9">9</div>
        <div class="day" id="date-6-10">10</div>
        <div class="day" id="date-6-11">11</div>
        <div class="day" id="date-6-12">12</div>
        <div class="day" id="date-6-13">13</div>
        <div class="day" id="date-6-14">14</div>
        <div class="day" id="date-6-15">15</div>
        <div class="day" id="date-6-16">16</div>
        <div class="day" id="date-6-17">17</div>
        <div class="day" id="date-6-18">18</div>
        <div class="day" id="date-6-19">19</div>
        <div class="day" id="date-6-20">20</div>
        <div class="day" id="date-6-21">21</div>
        <div class="day" id="date-6-22">22</div>
        <div class="day" id="date-6-23">23</div>
        <div class="day" id="date-6-24">24</div>
        <div class="day" id="date-6-25">25</div>
        <div class="day" id="date-6-26">26</div>
        <div class="day" id="date-6-27">27</div>
        <div class="day" id="date-6-28">28</div>
        <div class="day" id="date-6-29">29</div>
        <div class="day" id="date-6-30">30</div>
      </span>
      <span class="month" month="7">
        <p class="month-title" fill="#CECECE">jul</p>
        <div class="day" id="date-7-1">1</div>
        <div class="day" id="date-7-2">2</div>
        <div class="day" id="date-7-3">3</div>
        <div class="day" id="date-7-4">4</div>
        <div class="day" id="date-7-5">5</div>
        <div class="day" id="date-7-6">6</div>
        <div class="day" id="date-7-7">7</div>
        <div class="day" id="date-7-8">8</div>
        <div class="day" id="date-7-9">9</div>
        <div class="day" id="date-7-10">10</div>
        <div class="day" id="date-7-11">11</div>
        <div class="day" id="date-7-12">12</div>
        <div class="day" id="date-7-13">13</div>
        <div class="day" id="date-7-14">14</div>
        <div class="day" id="date-7-15">15</div>
        <div class="day" id="date-7-16">16</div>
        <div class="day" id="date-7-17">17</div>
        <div class="day" id="date-7-18">18</div>
        <div class="day" id="date-7-19">19</div>
        <div class="day" id="date-7-20">20</div>
        <div class="day" id="date-7-21">21</div>
        <div class="day" id="date-7-22">22</div>
        <div class="day" id="date-7-23">23</div>
        <div class="day" id="date-7-24">24</div>
        <div class="day" id="date-7-25">25</div>
        <div class="day" id="date-7-26">26</div>
        <div class="day" id="date-7-27">27</div>
        <div class="day" id="date-7-28">28</div>
        <div class="day" id="date-7-29">29</div>
        <div class="day" id="date-7-30">30</div>
        <div class="day" id="date-7-31">31</div>
      </span>
      <span class="month" month="8">
        <p class="month-title" fill="#CECECE">aug</p>
        <div class="day" id="date-8-1">1</div>
        <div class="day" id="date-8-2">2</div>
        <div class="day" id="date-8-3">3</div>
        <div class="day" id="date-8-4">4</div>
        <div class="day" id="date-8-5">5</div>
        <div class="day" id="date-8-6">6</div>
        <div class="day" id="date-8-7">7</div>
        <div class="day" id="date-8-8">8</div>
        <div class="day" id="date-8-9">9</div>
        <div class="day" id="date-8-10">10</div>
        <div class="day" id="date-8-11">11</div>
        <div class="day" id="date-8-12">12</div>
        <div class="day" id="date-8-13">13</div>
        <div class="day" id="date-8-14">14</div>
        <div class="day" id="date-8-15">15</div>
        <div class="day" id="date-8-16">16</div>
        <div class="day" id="date-8-17">17</div>
        <div class="day" id="date-8-18">18</div>
        <div class="day" id="date-8-19">19</div>
        <div class="day" id="date-8-20">20</div>
        <div class="day" id="date-8-21">21</div>
        <div class="day" id="date-8-22">22</div>
        <div class="day" id="date-8-23">23</div>
        <div class="day" id="date-8-24">24</div>
        <div class="day" id="date-8-25">25</div>
        <div class="day" id="date-8-26">26</div>
        <div class="day" id="date-8-27">27</div>
        <div class="day" id="date-8-28">28</div>
        <div class="day" id="date-8-29">29</div>
        <div class="day" id="date-8-30">30</div>
        <div class="day" id="date-8-31">31</div>
      </span>
      <span class="month" month="9">
        <p class="month-title" fill="#CECECE">sep</p>
        <div class="day" id="date-9-1">1</div>
        <div class="day" id="date-9-2">2</div>
        <div class="day" id="date-9-3">3</div>
        <div class="day" id="date-9-4">4</div>
        <div class="day" id="date-9-5">5</div>
        <div class="day" id="date-9-6">6</div>
        <div class="day" id="date-9-7">7</div>
        <div class="day" id="date-9-8">8</div>
        <div class="day" id="date-9-9">9</div>
        <div class="day" id="date-9-10">10</div>
        <div class="day" id="date-9-11">11</div>
        <div class="day" id="date-9-12">12</div>
        <div class="day" id="date-9-13">13</div>
        <div class="day" id="date-9-14">14</div>
        <div class="day" id="date-9-15">15</div>
        <div class="day" id="date-9-16">16</div>
        <div class="day" id="date-9-17">17</div>
        <div class="day" id="date-9-18">18</div>
        <div class="day" id="date-9-19">19</div>
        <div class="day" id="date-9-20">20</div>
        <div class="day" id="date-9-21">21</div>
        <div class="day" id="date-9-22">22</div>
        <div class="day" id="date-9-23">23</div>
        <div class="day" id="date-9-24">24</div>
        <div class="day" id="date-9-25">25</div>
        <div class="day" id="date-9-26">26</div>
        <div class="day" id="date-9-27">27</div>
        <div class="day" id="date-9-28">28</div>
        <div class="day" id="date-9-29">29</div>
        <div class="day" id="date-9-30">30</div>
      </span>
      <span class="month" month="10">
        <p class="month-title" fill="#CECECE">oct</p>
        <div class="day" id="date-10-1">1</div>
        <div class="day" id="date-10-2">2</div>
        <div class="day" id="date-10-3">3</div>
        <div class="day" id="date-10-4">4</div>
        <div class="day" id="date-10-5">5</div>
        <div class="day" id="date-10-6">6</div>
        <div class="day" id="date-10-7">7</div>
        <div class="day" id="date-10-8">8</div>
        <div class="day" id="date-10-9">9</div>
        <div class="day" id="date-10-10">10</div>
        <div class="day" id="date-10-11">11</div>
        <div class="day" id="date-10-12">12</div>
        <div class="day" id="date-10-13">13</div>
        <div class="day" id="date-10-14">14</div>
        <div class="day" id="date-10-15">15</div>
        <div class="day" id="date-10-16">16</div>
        <div class="day" id="date-10-17">17</div>
        <div class="day" id="date-10-18">18</div>
        <div class="day" id="date-10-19">19</div>
        <div class="day" id="date-10-20">20</div>
        <div class="day" id="date-10-21">21</div>
        <div class="day" id="date-10-22">22</div>
        <div class="day" id="date-10-23">23</div>
        <div class="day" id="date-10-24">24</div>
        <div class="day" id="date-10-25">25</div>
        <div class="day" id="date-10-26">26</div>
        <div class="day" id="date-10-27">27</div>
        <div class="day" id="date-10-28">28</div>
        <div class="day" id="date-10-29">29</div>
        <div class="day" id="date-10-30">30</div>
        <div class="day" id="date-10-31">31</div>
      </span>
      <span class="month" month="11">
        <p class="month-title" fill="#CECECE">nov</p>
        <div class="day" id="date-11-1">1</div>
        <div class="day" id="date-11-2">2</div>
        <div class="day" id="date-11-3">3</div>
        <div class="day" id="date-11-4">4</div>
        <div class="day" id="date-11-5">5</div>
        <div class="day" id="date-11-6">6</div>
        <div class="day" id="date-11-7">7</div>
        <div class="day" id="date-11-8">8</div>
        <div class="day" id="date-11-9">9</div>
        <div class="day" id="date-11-10">10</div>
        <div class="day" id="date-11-11">11</div>
        <div class="day" id="date-11-12">12</div>
        <div class="day" id="date-11-13">13</div>
        <div class="day" id="date-11-14">14</div>
        <div class="day" id="date-11-15">15</div>
        <div class="day" id="date-11-16">16</div>
        <div class="day" id="date-11-17">17</div>
        <div class="day" id="date-11-18">18</div>
        <div class="day" id="date-11-19">19</div>
        <div class="day" id="date-11-20">20</div>
        <div class="day" id="date-11-21">21</div>
        <div class="day" id="date-11-22">22</div>
        <div class="day" id="date-11-23">23</div>
        <div class="day" id="date-11-24">24</div>
        <div class="day" id="date-11-25">25</div>
        <div class="day" id="date-11-26">26</div>
        <div class="day" id="date-11-27">27</div>
        <div class="day" id="date-11-28">28</div>
        <div class="day" id="date-11-29">29</div>
        <div class="day" id="date-11-30">30</div>
      </span>
      <span class="month" month="12">
        <p class="month-title" fill="#CECECE">dec</p>
        <div class="day" id="date-12-1">1</div>
        <div class="day" id="date-12-2">2</div>
        <div class="day" id="date-12-3">3</div>
        <div class="day" id="date-12-4">4</div>
        <div class="day" id="date-12-5">5</div>
        <div class="day" id="date-12-6">6</div>
        <div class="day" id="date-12-7">7</div>
        <div class="day" id="date-12-8">8</div>
        <div class="day" id="date-12-9">9</div>
        <div class="day" id="date-12-10">10</div>
        <div class="day" id="date-12-11">11</div>
        <div class="day" id="date-12-12">12</div>
        <div class="day" id="date-12-13">13</div>
        <div class="day" id="date-12-14">14</div>
        <div class="day" id="date-12-15">15</div>
        <div class="day" id="date-12-16">16</div>
        <div class="day" id="date-12-17">17</div>
        <div class="day" id="date-12-18">18</div>
        <div class="day" id="date-12-19">19</div>
        <div class="day" id="date-12-20">20</div>
        <div class="day" id="date-12-21">21</div>
        <div class="day" id="date-12-22">22</div>
        <div class="day" id="date-12-23">23</div>
        <div class="day" id="date-12-24">24</div>
        <div class="day" id="date-12-25">25</div>
        <div class="day" id="date-12-26">26</div>
        <div class="day" id="date-12-27">27</div>
        <div class="day" id="date-12-28">28</div>
        <div class="day" id="date-12-29">29</div>
        <div class="day" id="date-12-30">30</div>
        <div class="day" id="date-12-31">31</div>
      </span>
    </div>
    );
  }
}
