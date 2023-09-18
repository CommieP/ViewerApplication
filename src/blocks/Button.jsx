const AppButton  = ({title, onClick}) => {
    return (
        <button onClick={onClick} className="w-10 h-10">{title}</button>
    )
}

export default AppButton;