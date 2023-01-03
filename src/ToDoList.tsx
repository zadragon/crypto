import React, { useState } from "react";
import { useForm } from "react-hook-form";

// function ToDoList() {
// 	const [toDo, setToDo] = useState("");
// 	const onChange = (event: React.FormEvent<HTMLInputElement>) => {
// 		const {
// 			currentTarget: { value },
// 		} = event;
// 		setToDo(value);
// 	};
// 	const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
// 		event.preventDefault();
// 		if (toDo.length < 10) {
// 			return setToDoError("To do should be longer");
// 		}
// 		console.log(toDo);
// 	};
// 	return (
// 		<div>
// 			<form onSubmit={onSubmit}>
// 				<input onChange={onChange} value={toDo} placeholder="Write a to do" />
// 				<button>Add</button>
// 			</form>
// 		</div>
// 	);
// }

function ToDoList() {
	const { register, handleSubmit } = useForm();
	const onValid = (data: any) => {
		console.log(data);
	};
	return (
		<div>
			<form onSubmit={handleSubmit(onValid)}>
				<input {...register("Email")} placeholder="Email" type="text" />
				<input {...register("Name")} placeholder="Name" type="text" />
				<input {...register("Password")} placeholder="Password" type="text" />
				<button>Add</button>
			</form>
		</div>
	);
}

export default ToDoList;
