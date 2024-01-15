import { ChangeEvent, useState } from "react";
import { InputParams } from "../interfaces/FormInterface";

interface FormInputParams extends InputParams {
	value: string;
	handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

function FormInput(prop: FormInputParams) {
	const [focused, setFocused] = useState<boolean>(false);
	const { id, label, value, errors, handleChange, ...inputProps } = prop;

	return (
		<div className="input-wrapper">
			<label>{label}</label>
			<input
				className="form-input"
				{...inputProps}
				value={value}
				onChange={handleChange}
				onBlur={() => setFocused(true)}
				onFocus={() => { inputProps.name === "confirmPassword" && setFocused(true) }}
				data-was-focused={focused.toString()}
			/>
			<ul className="info-box">
				{errors.map((err, i) => (
					<li key={i}>{err}</li>
				))}
			</ul>
		</div>
	);
}

export default FormInput;