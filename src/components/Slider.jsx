import React from "react";

// IMPORTING MATERIAL UI
import Slider from "@material-ui/core/Slider";

const SliderC = ({ slideChange, inpField }) => {
	function valuetext(value) {
		return `${value}$`;
	}
	return (
		<div className="slider_container">
			<Slider
				value={inpField}
				defaultValue={10}
				getAriaValueText={valuetext}
				onChange={slideChange}
				valueLabelDisplay="auto"
				step={10}
				marks
				min={10}
				max={50}
			/>
		</div>
	);
};

export default SliderC;
