import "./index.css";
import Pomodoro from "./Pomodoro"
import Todo from "./Todo";


const App = ()=>{

	return(
		<>
			<div className="main_div"> 
				
				<div className="centred_div1">	
					<Pomodoro/>
				</div>

				<div className="centred_div">
					<Todo/>
				</div>

			</div>

		</>
		);	
}

export default App