import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';


function EmployeesList ({data, onDelete}) {


	const elements = data.map(item => {
		const {id, ...itemProps} = item;
		return (
			<EmployeesListItem key="id" {...itemProps}
			onDelete={() => onDelete(id)}/>
		);

	})

	return (
		<div className="app-list">
			{elements}
		</div>
	);
}

export default EmployeesList;