import { useState } from "react";

const Search = function ({ search }) {
	const [text, setText] = useState("")

	return <div className="search">
		<input value={text} type="text" onChange={(e) => setText(e.target.value)} />
		<button onClick={() => search(text)}>SEARCH</button>
	</div>
}
export default Search