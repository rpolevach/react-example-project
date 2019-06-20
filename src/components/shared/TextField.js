import React from "react";

const TextField = ({
    label,
    onChange,
    error,
    name,
    value,
    type
}) => {
    return (
        <div className="form-group">
            <label className="control-label">{label}</label>
            <input 
                onChange={onChange}
                name={name}
                value={value}
                type={type}
                class="form-control"
            />
            <div className="invalid-feedback">{error}</div>
        </div>
    )
}

export default TextField;