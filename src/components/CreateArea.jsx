import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

function CreateArea(props) {
	const [note, setNote] = useState({
		title: "",
		content: "",
	});
	const [zoom, setZoom] = useState(false);

	function handleChange(event) {
		const { name, value } = event.target;

		setNote((prevNote) => {
			return {
				...prevNote,
				[name]: value,
			};
		});
	}

	function submitNote(event) {
		props.onAdd(note);
		setNote({
			title: "",
			content: "",
		});
		setZoom(false);
		event.preventDefault();
	}

	function zoomIn() {
		setZoom(true);
	}
	return (
		<div>
			<form autoComplete="off" className="create-note">
				<input
					autocomplete="false"
					name="hidden"
					type="text"
					style={{ display: "none" }}
				></input>
				{zoom && (
					<Zoom in={zoom}>
						<input
							name="title"
							onChange={handleChange}
							value={note.title}
							placeholder="Title"
							autoFocus={true}
						/>
					</Zoom>
				)}
				<textarea
					onClick={zoomIn}
					name="content"
					onChange={handleChange}
					value={note.content}
					placeholder="Take a note..."
					rows={zoom ? "2" : "1"}
				/>
				<Zoom in={zoom}>
					<Fab color="primary" aria-label="add" onClick={submitNote}>
						<AddIcon />
					</Fab>
				</Zoom>
			</form>
		</div>
	);
}

export default CreateArea;
