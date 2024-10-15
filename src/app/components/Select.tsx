
interface SelectOption {
  label: string;
  value: string | number;
}

interface SelectProps {
  id: string,
  name: string,
  options: SelectOption[];
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
}

export const Select  = ({
  id,
  name,
  options,
  value,
  onChange,
  label,
  placeholder = "Seleccione una opción",
  disabled = false,
}: SelectProps) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '10px', margin: "10px", }}>
      {label && <label style={{ marginBottom: '5px' }}>{label}</label>}
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        style={{
          padding: '8px',
          borderRadius: '4px',
          border: '1px solid #ddd',
          cursor: disabled ? 'not-allowed' : 'pointer',
          backgroundColor: disabled ? '#f2f2f2' : '#fff',
        }}
      >
        <option value="" disabled>{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
