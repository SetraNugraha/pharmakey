import React from 'react'

interface InputFieldProps {
  label: string
  name: string
  type: string
  placeholder: string
  icon: string
}

export const InputField: React.FC<InputFieldProps> = ({ label, type, name, icon, placeholder }) => (
  <div className="flex flex-col justify-start gap-y-2">
    <label
      htmlFor={name}
      className="font-semibold text-lg"
    >
      {label}
    </label>
    <div className="relative w-full h-[52px]">
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="w-full h-full  px-12 border border-slate-300 rounded-3xl placeholder:text-[16px] focus:outline-none focus:ring-2 focus:ring-[#FD915A]"
      />
      <img
        src={icon}
        alt=""
        className="absolute top-[18px] left-[18px]"
      />
    </div>
  </div>
)
