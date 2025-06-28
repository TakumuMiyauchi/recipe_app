
export default function Textarea_default({value, onChange, ...rest }) {
	return (
		<textarea className="input" value={value} onChange={onChange} {...rest}/>
	)
}
