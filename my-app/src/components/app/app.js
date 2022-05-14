import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/emlpoyees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css'




function App () {

  const data = [
    {name: 'Ilvar S', salary: 2999, increase: false },
    {name: 'Emil F', salary: 3000, increase: false },
    {name: 'Maga M', salary: 300000, increase: true},
    {name: 'Roma F', salary: 12000, increase: false },
  ];

  return (
    <div className="app">
      <AppInfo/>

      <div className="search-panel">
          <SearchPanel/>
          <AppFilter/>
      </div>

    <EmployeesList data={data}/>
    <EmployeesAddForm/>
    </div>
  );
}

export default App;