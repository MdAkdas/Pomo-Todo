import React, {useState} from "react";
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import "./index.css";

import ListComp from "./ListComp";
import Pomodoro from "./Pomodoro"


const Todo = ()=>{

	const [item,setItem] = useState("")
	const [newItem,setNewItem] = useState([])


	const itemEvent = (event)=>{
		setItem(event.target.value);
	}

	const addItem = ()=>{
		setNewItem((prevVal)=>{

			return [item,...prevVal]
		});
		setItem(" ");
	}

	const deleteItem=(id)=>{
		console.log("delete",id);
		console.log(newItem);

		setNewItem((newItem)=>{
			return newItem.filter((elm,idx)=>{
				return idx!==id;
			});
		});		
	};

	const hitEnter=(event)=>{
		if (event.key === 'Enter'){
                  addItem();
        }
	};

	return(
		<>
			<h1> Todo List </h1>
			

			<div className="inpt_btn">

				<input type="text" value={item} placeholder="Add an item" onChange={itemEvent} onKeyPress={hitEnter}/>

				<Button className="newBtn"
				style={{borderRadius:"35px",backgroundColor: "#21b6ae", hover:"#fff"}}
				onClick={addItem}>

					<AddIcon/>

				</Button>

 			</div>

 			
 			<ol>	
 			{
 				newItem.map((val,idx)=>{
 					return <ListComp key={idx} text={val} id={idx} onSelect={deleteItem}/>
 				})
 			}
 			</ol>
		</>
		);	
}

export default Todo;