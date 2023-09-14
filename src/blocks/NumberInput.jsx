function NumberInput({id, value, onChange}) {
    return (
      <div>
        <input
            id = {id}
            type="number"
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  }
  
  export default NumberInput;