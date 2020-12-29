import React, {useState} from "react"
import DeleteIcon from '@material-ui/icons/Delete';

const ListComp = (props)=>{

	const [line,setLine] = useState(0);

	const cutIt= ()=>{
		console.log("crossed");
		setLine(!line);
	}

	return(
		<div className="itm_list">

			<span onClick={()=>{
				props.onSelect(props.id);
			}}>
				<DeleteIcon style={{fill: "red"}}/>
			</span>
			<li onClick={cutIt} style={{textDecoration: line? "line-through" : "none"}}> {props.text} </li>

		</div>
		);
}

export default ListComp;