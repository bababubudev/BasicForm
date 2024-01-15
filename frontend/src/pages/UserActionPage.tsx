import { ChangeEvent, FormEvent, useState } from "react";
import FormInput from "../components/FormInput";
import { InputParams } from "../interfaces/FormInterface";

export const USERNAME_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
export const PASSWORD_REGEX = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/

interface SignUpInterface {
	username: string;
	email: string;
	password: string;
	[key: string]: string;
}

function UserActionPage() {
	const [formValues, setFormValues] = useState<SignUpInterface>({
		username: "",
		email: "",
		password: ""
	});

	const inputObjects: InputParams[] = [
		{
			id: 1,
			name: "username",
			type: "text",
			placeholder: "Username",
			autoComplete: "false",
		},
		{
			id: 2,
			name: "email",
			type: "email",
			placeholder: "Email"
		},
		{
			id: 3,
			name: "password",
			type: "password",
			placeholder: "Password"
		},
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