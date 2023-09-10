const Notes = function ({ notes }) {
	return <div className="notes">
		<ul className="notes__list">
			{notes}
		</ul>
	</div>
}
export default Notes