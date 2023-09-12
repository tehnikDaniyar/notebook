import './App.css';
import { useState } from "react";
import Textarea from './modules/textarea';
import Button from './modules/button';
import { nanoid } from 'nanoid';
import Notes from './modules/notes';
import Search from './modules/search';

function App() {
	const [notes, setNotes] = useState([]);
	const [value, setValue] = useState("");
	const [mode, setMode] = useState("save");
	const [idForEdit, setIdForEdit] = useState();
	const [finedNotes, setFinedNotes] = useState([]);


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

	function search(text) {

		const reg = new RegExp(`${text}`);

		const result = notes.map((note => {
			if (reg.test(note.value)) {
				return note;
			};
		}));

		setFinedNotes(result);
	};

	function getList(notes) {
		const result = notes.map(note => {
			if (note) {
				return <li key={note.id} onClick={() => { editNote(note.id, note.value) }}>{note.value}</li>
			};
		});

		return result;
	}

	return (
		<div className='notebook'>
			<Search search={search} />
			<Textarea setValue={setValue} value={value} />
			<div className="notebook__buttons">
				<Button status={mode} action={saveNote} value={value} mode={mode} />
			</div>
			<Notes notes={getList(notes)} changeMode={changeMode} />
			<div className="resultOfSearch">
				{getList(finedNotes)}
			</div>
		</div>
	);
}

export default App;

