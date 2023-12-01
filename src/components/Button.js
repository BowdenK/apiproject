const Button = ({ func, text, style }) => {
    return <button className={style} onClick={func}>{ text }</button>
}

export default Button