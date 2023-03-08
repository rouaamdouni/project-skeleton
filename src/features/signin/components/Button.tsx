import { ReactNode } from 'react';
import './index.css'

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
      className="custombtn"
    >
      {children}
    </button>
  );
}
