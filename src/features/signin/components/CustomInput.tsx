import './index.css';

type CustomInputProps = {
  placeholder: string;
  type: 'email' | 'text' | 'password';
  // onChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export default function CustomInput({ placeholder, type }: CustomInputProps) {
  return (
    <input type={type} placeholder={placeholder} className="input-field" />
  );
}
// w-full border-fancyBlue text-[13px] pl-[5px] border-w-1	h-[38px] border-[1px] rounded-[3px]
