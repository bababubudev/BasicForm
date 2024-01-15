import { ChangeEvent, FormEvent, useState } from "react";
import FormInput from "../components/FormInput";
import { InputParams } from "../interfaces/FormInterface";

export const USERNAME_REGEX = "^[a-zA-Z0-9_\\-]{3,16}$";
export const PASSWORD_REGEX = "^(?=.*[A-Z])(?=.*[0-9])(?=.*[-_!@#$%]).{8,24}$"

interface SignUpInterface {
	username: string;
	email: string;
	password: string;
	confirmPassword: string;
	[key: string]: string;
}

function UserActionPage() {
	const [formValues, setFormValues] = useState<SignUpInterface>({
		username: "",
		email: "",
		password: "",
		confirmPassword: ""
	});

	const inputObjects: InputParams[] = [
		{
			id: 1,
			label: "Username",
			name: "username",
			type: "text",
			placeholder: "Username",
			pattern: USERNAME_REGEX,
			autoComplete: "off",
			autoFocus: true,
			required: true,
			errors: [
				"Must be 3-16 characters",
				"No Special characters",
				"[ - ] or [ _ ] allowed"
			],
		},
		{
			id: 2,
			label: "Email",
			name: "email",
			type: "email",
			placeholder: "Email",
			required: true,
			errors: [
				"Invalid email address"
			],
		},
		{
			id: 3,
			label: "Password",
			name: "password",
			type: "password",
			placeholder: "Password",
			pattern: PASSWORD_REGEX,
			required: true,
			errors: [
				"Must be 8-24 characters long",
				"Must contain atleast one digit",
				"Must contain atleast one special character",
			],
		},
		{
			id: 4,
			label: "Confirm password",
			name: "confirmPassword",
			type: "password",
			placeholder: "Confirm password",
			pattern: formValues.password,
			required: true,
			errors: [
				"Password doesn't match"
			],
		}
	]

	function handleSubmit(e: FormEvent<HTMLFormElement>): void {
		e.preventDefault();
		const rawData = new FormData(e.target as HTMLFormElement);
		const data = Object.fromEntries(rawData.entries());

		console.log(data);
	}

	function handleChange(e: ChangeEvent<HTMLInputElement>): void {
		setFormValues({ ...formValues, [e.target.name]: e.target.value });
	}


	return (
		<div className="user-action">
			<form onSubmit={handleSubmit}>
				<h1 className="form-title">Create an account</h1>
				{inputObjects.map((input) => (
					<FormInput
						key={input.id}
						{...input}
						value={formValues[input.name]}
						handleChange={handleChange}
					/>
				))}
				<button type="submit">Submit</button>
			</form>
		</div>
	);
}

export default UserActionPage;