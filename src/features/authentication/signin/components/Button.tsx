import { ReactNode } from 'react';
import './index.css';

type SubmitButtonProps = {
  children: ReactNode;
  type: 'submit' | 'button';
  clickHandler?: () => void;
};

export default function Button({
  children,
  type,
  clickHandler,
}: SubmitButtonProps) {
  return (
    <button
      type={type}
      onClick={clickHandler}
      className="bg-yellow w-[130px] ml-[35%] h-[40px] mt-[30px]  text-darkBlue font-semibold rounded-[3px] mt-[20px] shadow-[-5px_11px_11px_4px_rgba(213,213,213,0.75)]"
    >
      {children}
    </button>
  );
}
