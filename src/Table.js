import React, {Component} from "react"


class Table extends Component{
	render() {

		let tableContents = this.props.tableContent.map((row, index) => {
						return(
							<tr key={index}>
								<td>{row.name}</td>
								<td>{row.job}</td>
								<td><button className="btn btn-primary" onClick={() => this.props.removeContent(index)} > Delete </button></td>
							</tr>)
						});

		return(
			<div>
				<table className="table">
					<thead>
					<th>
						Name</th>
						<th>Job</th><th>Action</th>
					</thead>
					<tbody>
						{tableContents}	
					</tbody>
				</table>
			</div>
		) 
	};
}
export default Table;