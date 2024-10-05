
const Button = ({ label, iconURL, backgroundColor, borderColor, textColor }) => {
    return (
        <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full
        ${backgroundColor ? backgroundColor : 'bg-coral-red'}
        ${borderColor ? borderColor : 'border-coral-red'}
        ${textColor ? textColor : 'text-white'}`}>
            {label}
            {
                iconURL && <img
                    className="ml-2 rounded-full w-5 h-5"
                    src={iconURL}
                    alt="arrow right icon"
                />
            }
        </button>
    )
}

export default Button