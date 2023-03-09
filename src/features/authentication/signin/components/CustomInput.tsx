import './index.css';

type CustomInputProps = {
  placeholder: string;
  type: 'email' | 'string' | 'password';
  // onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function CustomInput({ placeholder, type }: CustomInputProps) {
  return (
    <input type={type} placeholder={placeholder} className="custom-input" />
  );
}
