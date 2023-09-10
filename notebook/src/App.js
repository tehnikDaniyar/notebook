import './App.css';
import { useState } from "react";
import Textarea from './modules/textarea';
import Button from './modules/button';
import { nanoid } from 'nanoid';
import Notes from './modules/notes';

function App() {
	const [notes, setNotes] = useState([]);
	const [value, setValue] = useState("");
	const [mode, setMode] = useState("save");
	const [idForEdit, setIdForEdit] = useState();



	function saveNote(value, mode) {

		if (mode === "save") {
			setNotes([...notes, { id: nanoid(), value: value }]);
			setValue("");
		} else {
			let copy;
			copy = notes.map(note => {
				if (note.id === idForEdit) {
					note.value = value;
				};
				return note;
			});

			setNotes(copy);
			setValue("");
			setMode("save");
		}

	};

	function editNote(id, value) {
		notes.map(note => {
			if (note.id === id) {
				setValue(value);
				setMode("edit");
				setIdForEdit(id);
			};
			return note;
		});
	};

	function changeMode(mode) {
		setMode(mode);
	};



	const result = notes.map(note => {
		return <li key={note.id} onClick={() => { editNote(note.id, note.value) }}>{note.value}</li>
	})

	console.log(result);

	return (
		<div className='notebook'>
			<Textarea setValue={setValue} value={value} />
			<div className="notebook__buttons">
				<Button status={mode} action={saveNote} value={value} mode={mode} />
			</div>
			<Notes notes={result} changeMode={changeMode} />
		</div>
	);
}

export default App;

