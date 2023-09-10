const Button = function ({ action, value, mode }) {
	return <button onClick={() => action(value, mode)}>{mode}</button>
}
export default Button