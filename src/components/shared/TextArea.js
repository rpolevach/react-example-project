import React from "react";
import classNames from 'classnames';

const TextField = ({
    label,
    onChange,
    errors,
    name,
    value,
    type
}) => {
    return (
        <div className="form-group">
            <label className="control-label">{label}</label>
            <textarea 
                onChange={onChange}
                name={name}
                value={value}
                type={type}
                className={
                    classNames('form-control', {
                        "is-invalid" : errors
                    })
                }
            />
            <div className="invalid-feedback">{errors}</div>
        </div>
    )
}

export default TextField;