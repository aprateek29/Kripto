const InputButton = ({handleChange, placeholder}) => {
    return (
      <input
        className="coin-input"
        type="text"
        onChange={handleChange}
        placeholder={placeholder}
      />
    );
}

export default InputButton