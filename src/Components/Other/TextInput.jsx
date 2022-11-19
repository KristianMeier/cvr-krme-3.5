export const TextInput = ({
  placeholder,
  value,
  onChange,
  type,
  className,
}) => (
  <input
    className={className}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    type={type}
  />
)
