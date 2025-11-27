import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  fullWidth = false, 
  children, 
  className = '',
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-lg font-impact tracking-wide uppercase rounded-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-orange disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "border-transparent text-black bg-brand-orange hover:bg-orange-hover focus:ring-brand-orange shadow-[0_0_15px_rgba(255,94,0,0.4)] hover:shadow-[0_0_25px_rgba(255,94,0,0.5)]",
    secondary: "border-transparent text-white bg-slate-800 hover:bg-slate-700",
    outline: "border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-black"
  };

  const widthStyle = fullWidth ? "w-full" : "";

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${widthStyle} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};