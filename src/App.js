import { useState } from "react";

// IMPORTING CUSTOM STYLING
import "./style/style.scss";

// IMPORTING BOOTSTRAP
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

// IMPORTING SLIDER COMPONENT
import SliderC from "./components/Slider";

// IMPORTING SLIDER COMPONENT
import cloud from "./assets/cloud.png";

function App() {
	// STATE FOR INPUT FIELD
	const [inpField, setInpField] = useState(10);

	// ONCHANGE HANDLE START
	const handleChange = (e) => {
		setInpField(e.target.value);
	};

	// SLIDER CHANGE FUNCTION
	function slideChange(event, newValue) {
		setInpField(newValue);
	}

	// CONVERTING VALUE INTO NUMBER START
	const convertedNum = Number(inpField);

	const heightNum =
		(!(convertedNum > 50) && !(convertedNum < 10) && convertedNum) ||
		(convertedNum > 50 && 50) ||
		convertedNum < 10 ||
		10;
	// CONVERTING VALUE INTO NUMBER END

	return (
		<div className="page_container">
			{/* FILL COLOR START */}
			<div
				style={{ height: heightNum * 2.5 + "vh" }}
				className="fill_container"
			>
				<div class="bubble x1"></div>
				<div class="bubble x2"></div>
				<div class="bubble x3"></div>
				<div class="bubble x4"></div>
				<div class="bubble x5"></div>
				<div class="bubble x6"></div>
				<div class="bubble x7"></div>
				<div class="bubble x8"></div>
				<div class="bubble x9"></div>
				<div class="bubble x10"></div>
			</div>
			{/* FILL COLOR END */}

			<div className="content_container">
				{/* CONTENT START */}
				<h1 className="text-center fw-bolder">How much beere do you want?</h1>
				<br />
				{/* CONTENT END */}
				
				{/* SLIDER START */}
				<SliderC slideChange={slideChange} inpField={inpField} />
				{/* SLIDER END */}

				{/* INPUT START */}
				<input
					style={{
						border: `${
							(convertedNum > 50 && "2px solid red") ||
							(convertedNum < 10 && "2px solid red") ||
							"none"
						}`,
					}}
					type="text"
					value={inpField}
					onChange={handleChange}
					placeholder="Enter Price"
				/>
				{/* INPUT START */}

				{/* ERRORS START */}
				{convertedNum > 50 && (
					<p className="error">please enter the price less than 50</p>
				)}
				{convertedNum < 10 && (
					<p className="error">please enter the price more than 10</p>
				)}
				{/* ERRORS END */}
			</div>

			{/* CLOUD START */}
			<div
				style={{ top: `${(inpField >= 50 && "-25%") || "-200%"}` }}
				className="cloud_container d-none d-md-block"
			>
				<img src={cloud} alt="cloud" />
			</div>
			{/* CLOUD END */}

			{/* CLOUD START */}
			<div
				style={{ top: `${(inpField >= 50 && "-4%") || "-100%"}` }}
				className="cloud_container d-block d-md-none"
			>
				<img src={cloud} alt="cloud" />
			</div>
			{/* CLOUD END */}
		</div>
	);
}

export default App;
