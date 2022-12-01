export const Input = (props) => {
    const {type, name, placeholder, onChange} = props;

    return <input className="my-input" type={type} name={name} placeholder={placeholder} onChange={onChange}/>
}

export const Image = (props) => {
    const {src, alt} = props

    return <div className="my-image">
        <img src={src} alt={alt}></img>
    </div>
}

export const Title = (props) => {
    return <h1 className="my-title">{props.text}</h1>
}

export const Linebar = (props_ => {
    return <div className="my-line"></div>
})

export const Button = (props) => {
    const {text, type, onClick} = props

    return <button className={`my-button ${type}`} onClick={onClick}>{text}</button>
}