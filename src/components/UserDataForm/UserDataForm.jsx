import React from "react";
import BaseInput from "../BaseInput/BaseInput";
import "./UserDataForm.css";

export default function UserDataForm(props) {
	const { userDataStates } = props;

	return (
		<div className="form-container">
			<h1>Datos personales</h1>
			<form className="user-data-form form-top-margin">
				<div title="El nombre puede contener solo letras y espacios!">
					<label>Nombre</label>
					<BaseInput
						type="text"
						id="name"
						placeholder="Yugi Muto..."
						value={userDataStates["name"].value}
						onChange={userDataStates["name"].setter}
						isInvalid={userDataStates["name"].isInvalid}
					/>
				</div>
				<div
					title="El correo debe tener un formato válido! (ej.: example@example.com)"
					className="form-top-margin"
				>
					<label>Email</label>
					<BaseInput
						type="email"
						id="email"
						placeholder="user@user.com..."
						value={userDataStates["email"].value}
						onChange={userDataStates["email"].setter}
						isInvalid={userDataStates["email"].isInvalid}
					/>
				</div>
				<div
					title="El teléfono debe tener al menos 8 caracteres y solo pueden ser números o prefijos (-, +)."
					className="form-top-margin"
				>
					<label>Teléfono</label>
					<BaseInput
						type="tel"
						id="phone"
						placeholder="+541100000000..."
						value={userDataStates["phone"].value}
						onChange={userDataStates["phone"].setter}
						isInvalid={userDataStates["phone"].isInvalid}
					/>
				</div>
			</form>
		</div>
	);
}
