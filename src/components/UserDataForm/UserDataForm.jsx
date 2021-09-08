import React from "react";
import "./UserDataForm.css";

export default function UserDataForm() {
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
					/>
				</div>
				<div className="form-top-margin" >
					<label>Email</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="user@user.com..."
					/>
				</div>
				<div className="form-top-margin">
					<label>Teléfono</label>
					<input
						type="tel"
						id="phone"
						name="phone"
						placeholder="+541100000000..."
					/>
				</div>
			</form>
		</div>
	);
}
