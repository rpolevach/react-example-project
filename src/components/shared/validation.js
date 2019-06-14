import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

const validaiton = (data) => {
    let errors = {};

    if (Validator.isEmpty(data.id)) {
        errors.id = "This field is required";
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = "This field is required";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}

export default validaiton;