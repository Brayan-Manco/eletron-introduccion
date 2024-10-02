interface InputProps {
  type: string;
  placeholder: string;
  value: string;
  id: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ type, placeholder, value, onChange, id, name }: InputProps) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        margin: "10px",
      }}
    >
      <p>{placeholder}</p>
      <input
        style={{
          padding: "20px",
          border: "1px solid #000",
          borderRadius: "5px",
          height: "30px",
          fontSize: "16px",
        }}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
