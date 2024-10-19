import React from 'react';
import './Select.css'; // Importa los estilos desde el archivo CSS

interface SelectOption {
  label: string;
  value: string | number;
}

interface SelectProps {
  id: string;
  name: string;
  options: SelectOption[];
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
}

export const Select = ({
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
    <div className="select-container">
      {label && <label className="select-label" htmlFor={id}>{label}</label>}
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className={`select-input ${disabled ? 'select-input--disabled' : ''}`}
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
