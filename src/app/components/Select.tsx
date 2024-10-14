interface SelectOption {
    label: string;
    value: string | number;
  }
  
  interface SelectProps {
    options: SelectOption[];
    value: string | number;
    onChange: (value: string | number) => void;
    placeholder?: string;
    disabled?: boolean;
  }

export const Select = ({
    options,
    value,
    onChange,
    placeholder = 'Seleccione una opción',
    disabled = false,
}: SelectProps) => {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      style={{
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ddd',
        backgroundColor: disabled ? '#f0f0f0' : 'white',
        cursor: disabled ? 'not-allowed' : 'pointer',
      }}
    >
      <option value="" disabled>
        {placeholder}
      </option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  )
}
