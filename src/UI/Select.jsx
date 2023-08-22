function Select({value, options, def, onChange}) {
    return (
        <select 
        value={value}
        onChange={event => onChange(event.target.value)}
        >
        <option disabled>{def}</option>
        {options.map(op =>
            <option key={op.value} value={op.value}>{op.name}</option>
        )}
        </select>
    );
    }
    export default Select;