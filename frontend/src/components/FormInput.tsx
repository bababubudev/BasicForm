import { ChangeEvent } from "react";
import { InputParams } from "../interfaces/FormInterface";

interface FormInputParams extends InputParams {
	value: string;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function FormInput(prop: FormInputParams) {
	const { id, value, handleChange, ...inputProps } = prop;

	return (
		<div className="form-input">
			{/* <label>Username</label> */}
			<input
				{...inputProps}
				value={value}
				onChange={handleChange}
			/>
		</div>
	);
}

export default FormInput;