function Button({
  label,
  iconPath,
  backgroundColor = 'bg-coral-red',
  borderColor = 'border-coral-red',
  textColor = 'text-white',
}) {
  return (
    <button
      className={`${borderColor} flex items-center justify-center gap-2 rounded-full border ${backgroundColor} px-7 py-4 font-montserrat text-lg leading-none ${textColor}`}
    >
      {label}
      {iconPath && (
        <img
          src={iconPath}
          alt="button icon"
          className="ml-2 h-5 w-5 rounded-full"
        />
      )}
    </button>
  );
}

export default Button;
