import { v4 as uuidv4 } from "uuid";

/*
checkIn: {
  id: {
    name: "name",
    color: "#000",
    years: {
      2020: ['1-1','4-2','20-9'],
      2021: ['1-1','4-2','20-9']
    }
  },
 id: {
    name: "name",
    color: "#fff",
    years: {
      2020: ['1-1','4-2','20-9'],
      2021: ['1-1','4-2','20-9']
    }
  },
}
*/

export const get_data = (id=null, year=null) => {
  let result = {};
  if (typeof localStorage !== 'undefined') {
    try {
      const retriveHabits = JSON.parse( localStorage.getItem('checkIn') );
      if(retriveHabits && Object.keys(retriveHabits).length > 0){
        if(id != null && year != null){
          result = retriveHabits[id]? (retriveHabits[id].years? retriveHabits[id].years[year]:{}) : {}
        } else if(id != null){
          result = retriveHabits? retriveHabits[id] : {}
        } else{
          result = retriveHabits
        }
      }
    }
    catch(e) {
      console.log(e)
     }
  }
  return result;
}

const set_data = (id='0', year="2020", date="1-1", method='remove') => {
  let result = true;
  if (typeof localStorage !== 'undefined') {
    try {
      let alldata = get_data()
      let iddata = get_data(id)
      if(Object.keys(alldata).length === 0 || !iddata ){
        alldata[id] = {}
        alldata[id].id = id
        alldata[id].name = decodeURIComponent(id)
        alldata[id].color = '#00FFFF'
        alldata[id].years = {}
      }
      if(!alldata[id].years[year] && date != null){
        alldata[id].years[year] = [date]
      }
      let getYearData = get_data(id, year)
      if(method == 'insert' && date != null){
        alldata[id].years[year].push(date);
      }else if(method == 'remove'){
        alldata[id].years[year] = getYearData.filter(d => d != date);
      }
      localStorage.setItem('checkIn', JSON.stringify(alldata) );
    }
    catch(e) {
      result = false;
      console.log(e)
    }
  }
  return result;
}

export const remove_date = (id=0, year="2020", date="1-1") => {
  set_data(id, year, date, 'remove')
}

export const insert_date = (id=0, year="2020", date="1-1") => {
  set_data(id, year, date, 'insert')
}

export const deleteByID = (id=0) => {
  if (typeof localStorage !== 'undefined') {
    try {
      const newData = get_data()
      delete newData[id]
      localStorage.setItem('checkIn', JSON.stringify(newData))
    }
    catch (e){
      console.log(e)
    }
  }
}