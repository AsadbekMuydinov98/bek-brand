import React from 'react';

interface FormButtonProps {
  title: string;
  onClick: () => void;
}

const FormButton: React.FC<FormButtonProps> = ({ title, onClick }) => {
  return (
    <button className="btn" onClick={onClick}>
      {title}
    </button>
  );
};

export default FormButton;
