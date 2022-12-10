import React, {useState} from "react";

//create your first component
const Home = () => {
	const [lightUp, setLightUp] = useState("red");



	return (
		<div className="text-center">
		<div className="trafficLight">
			<div className={"light alert " +(lightUp == "red"? "bg" : "alert") + "-danger"}
				onClick={()=>{setLightUp("red")}}/>
			<div className={"light alert " + (lightUp == "yellow"? "bg" : "alert") + "-warning"}
				onClick={()=>{setLightUp("yellow")}}/>
			<div className={"light alert " + (lightUp == "green"? "bg" : "alert") + "-success"}
				onClick={()=>{setLightUp("green")}}/>
				 
		</div>
		
	</div>
	);
};

export default Home;
