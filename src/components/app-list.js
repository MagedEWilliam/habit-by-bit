import { Component, h, Prop, State, Element, Listen } from '@stencil/core';
import { get_data, insert_date, deleteByID } from '../store';

@Component({
  tag: 'app-list',
  styleUrl: '../styles/app-list.css'
})
export class AppHome {
  @Prop() _id = '0'
  @Prop() year = (new Date()).getFullYear()
  @Element() comp;
  @State() day = (new Date()).getDate();
  @State() month = (new Date()).getMonth() + 1
  @State() hideList = false;
  @State() timeout;
  @Prop() go;

  @Listen('resize', { target: 'window' })
  handleScroll(ev) {
    if (this.timeout) {
      window.cancelAnimationFrame(this.timeout);
    }
    this.timeout = window.requestAnimationFrame(() => {
      if (window.innerWidth <= 700) {
        if (!this.hideList) {
          this.hideList = true;
        }
      } else {
        this.hideList = false;
      }
    });
  }

  // it's a real thing, it's called "Predicate"
  // a state like, to avoid re-render...
  newHabit = () => true

  render() {
    const data = Object.values(get_data())

    return (
      <div class={{ "list": true, 'hide': this.hideList }}>
        <div class={{ "list-wrapper": true, 'hide': this.hideList }}>
          {data.map(d => (
            <div class="list-item">
              <stencil-route-link url={'/' + d.id}>
                <a class="tab">{d.name}</a>

                <button
                  id={'mark_' + d.id}
                  onClick={e => this.handleTodayClick(e, d.id)}
                >[ Mark Today ]</button>

              </stencil-route-link>
              <button class="option" onClick={e => this.deleteByID(d.id, d.name)}>x</button>
            </div>
          )
          )}
        </div>
        <div class="options">
          <stencil-route-link url="/new-habit"><button class="option">[ New ]</button></stencil-route-link>
          <button
            class="list-toggle"
            onClick={e => this.handleListToggle(e)}
          >[ {!this.hideList ?
            'Close' : 'List'} ]</button>
        </div>

      </div>
    )
  }

  deleteByID(id, name) {
    const deleteit = confirm(`Delete all of ${name}?`)
    if (deleteit) {
      deleteByID(id)
      this.go('/')
    }
  }

  handleListToggle() {
    this.hideList = !this.hideList
    this.hideList ?
      this.comp.classList.add('hide')
      : this.comp.classList.remove('hide')
  }

  handleTodayClick(e, id) {
    setTimeout(() => {
      const dayClasses = document.querySelector(`#date-${this.month}-${this.day}`)
      if (!dayClasses.classList.contains('highlight')) {
        dayClasses.click();
      }
    }, 100, id)
  }

  componentWillRender() {
    const data = Object.values(get_data())
    let newItem = true;
    data.map(d => {
      if (this._id == d.id) {
        newItem = false;
      }
    })

    if (newItem) {
      insert_date(this._id, this.year, null)
    }
  }

  componentWillLoad() {
    // this.handleListToggle()
  }
}