import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';


function EmployeesList ({data}) {

	const elements = data.map(item => {
		return (
			<EmployeesListItem name={item.name} salary={item.salary} increase={item.increase}/>
		);

	})

	return (
		<div className="app-list">
			{elements}
		</div>
	);
}

export default EmployeesList;