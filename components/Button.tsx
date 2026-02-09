import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'white';
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ variant = 'primary', children, className = '', ...props }) => {
  const baseStyles = "inline-flex items-center justify-center px-8 py-4 text-sm font-semibold tracking-wide transition-all duration-300 ease-in-out border rounded-sm";
  
  const variants = {
    primary: "bg-slate-900 text-white border-slate-900 hover:bg-slate-800 hover:border-slate-800 shadow-lg hover:shadow-xl",
    outline: "bg-transparent text-slate-900 border-slate-900 hover:bg-slate-900 hover:text-white",
    white: "bg-white text-slate-900 border-white hover:bg-slate-100 hover:border-slate-100 shadow-lg"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;