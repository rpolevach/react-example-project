import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default (data) => {
    let errors = {};

    if (Validator.isEmpty(data.username)) {
        errors.username = "This field is required";
    }

    if (Validator.isEmpty(data.usersurname)) {
        errors.usersurname = "This field is required";
    }

    if (Validator.isEmpty(data.decsription)) {
        errors.decsription = "This field is required"
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}