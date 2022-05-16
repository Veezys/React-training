import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';


function EmployeesList ({data}) {


	const elements = data.map(item => {
		const {id, ...itemProps} = item;
		return (
			<EmployeesListItem key="id" {...itemProps}/>
		);

	})

	return (
		<div className="app-list">
			{elements}
		</div>
	);
}

export default EmployeesList;