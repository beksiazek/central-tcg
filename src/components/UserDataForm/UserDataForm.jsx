import React from "react";
import "./UserDataForm.css";

export default function UserDataForm(props) {
	const { userDataStates } = props;

	return (
		<div className="form-container">
			<form className="user-data-form" action="">
				<div>
					<label>Nombre</label>
					<input
						type="text"
						id="name"
						name="name"
						placeholder="Yugi Muto..."
						value={userDataStates["name"].value}
						onChange={(e) => {
							userDataStates["name"].setter(e.target.value);
						}}
					/>
				</div>
				<div className="form-top-margin">
					<label>Email</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="user@user.com..."
						value={userDataStates["email"].value}
						onChange={(e) => {
							userDataStates["email"].setter(e.target.value);
						}}
					/>
				</div>
				<div className="form-top-margin">
					<label>Teléfono</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						placeholder="+541100000000..."
						value={userDataStates["phone"].value}
						onChange={(e) => {
							userDataStates["phone"].setter(e.target.value);
						}}
					/>
				</div>
			</form>
		</div>
	);
}
