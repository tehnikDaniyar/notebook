const Textarea = function ({ value, setValue }) {

	return <textarea className="notebook__textarea"
		name="textarea"
		id="text"
		cols="30"
		rows="10"
		value={value}
		onChange={(e) => setValue(e.target.value)}
	>

	</textarea>
}
export default Textarea