export default function Input_default({ value, onChange, ...rest }) {
  return (
    <input
      value={value}
      onChange={onChange}
			{...rest} //残りの属性値の展開
    />
  );
}
