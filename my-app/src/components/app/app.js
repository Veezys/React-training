import { Component } from 'react';

import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/emlpoyees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css'




class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      data: [
        {name: 'Ilvar S', salary: 2999, increase: false, id: 1, rise: false },
        {name: 'Emil F', salary: 3000, increase: false, id: 2, rise: false },
        {name: 'Maga M', salary: 300000, increase: false, id: 3, rise: false},
        {name: 'Roma F', salary: 12000, increase: false , id: 4, rise: false},
      ]   
    }
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({data}) => {
        return {
          data: data.filter(item => item.id !== id)
        }
    })
  }

  addItem = (name, salary) => {
    const newItem = {
      name,
      salary,
      increase: false,
      id: this.maxId++
    }
   
    this.setState(({data}) => {
      const newArr = [...data, newItem];
      return {
        data: newArr
      }
    });
  }

 render () {
  const {data} = this.state;
  
  return (
    <div className="app">
      <AppInfo/>

      <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
      </div>

    <EmployeesList 
    data={data}
    onDelete={this.deleteItem}/>
    <EmployeesAddForm
    onAdd={this.addItem}/>
    </div>
  );
 }
}

export default App;