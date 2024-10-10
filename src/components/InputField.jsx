import React from 'react'

const InputField = ({
    label,
    placeHolder,
    name,
    onChange,
    type,
    InputStyle,
    value,
    error,
    errorText,
    className,
    disabled,
    defaultValue,
    min,
    max,
    onBlur
  }) => {
  return (
    <div className="flex flex-col w-full mb-2">
    <label htmlFor="" className=" font-manrope text-[14px] font-medium">
      {label}
    </label>

    <input
      type={type ? type : "text"}
      placeholder={placeHolder}
      className={`border ${
        error ? "border-red-500" : "border"
      } ${className}  rounded-[5px]  border-[#D0D5DD] min-h-[38px] border w-full pl-4 text-[#11233D] bg-[#fff] text-md font-normal placeholder:font-normal outline-none ${
        InputStyle && InputStyle.className
      }`}
      style={InputStyle && InputStyle.style}
      name={name}
      onChange={onChange}
      value={value}
      disabled={disabled}
      defaultValue={defaultValue}
      min={min}
      max={max}
      onBlur={onBlur}
    />
    {error && <p className="text-xs text-red-500">{errorText}</p>}
  </div>
  )
}

export default InputField