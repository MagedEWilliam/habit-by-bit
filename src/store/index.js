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

export const set_data = (id=0, name="water", color="#fff", year="2020", date="1-1", method='remove') => {
  let result = true;
  if (typeof localStorage !== 'undefined') {
    try {
      let alldata = get_data()
      if(Object.keys(alldata).length === 0){
        alldata[id] = id
        alldata[id].name = name
        alldata[id].color = color
        alldata[id].years = year
        alldata[id].years[year] = [date]
      }
      let getYearData = get_data(id, year)
      if(method == 'insert'){
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