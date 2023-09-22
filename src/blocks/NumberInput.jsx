function NumberInput({id, value, onChange}) {
    return (
      <div>
        <input
            id = {id}
            type="number"
            value={value}
            min={-15}
            max={15}
            step={0.1}
            onChange={(e) => onChange(e.target.value)}
        />
      </div>
    );
  }
  
  export default NumberInput;