import { ChangeEvent } from 'react';

type CustomInputProps = {
  placeholder: string;
  value: string;
  type: 'email' | 'text' | 'password';
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
};

export default function CustomInput({
  placeholder,
  value,
  type,
  onChange,
  name,
}: CustomInputProps) {
  return (
    <input
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      className=" w-full rounded-xl border border-gray-100 bg-white px-6 py-3"
    />
  );
}
