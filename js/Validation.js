class Validation {
    isValidFirstName(firstName) {
        if (!this.isValidLastName(firstName)) {
            return false;
        }
        return true;
    }

    isValidLastName(lastName) {
        if (!this.isValidLastName(lastName)) {
            return false;
        }
        return true;
    }

    isValidEmail() {
        return true;
    }

    isValidMessage(message) {
        if (typeof message !== 'string' || message === '') {
            return false;
        }
        return true;
    }

    isValidPhoneNumber(phoneNumber) {
        if (typeof number !== 'string' || number === '') {
            return false;

        }
        return true;
    }

    isValidMonthName() {
        return true;
    }

    isValidWeekdayName() {
        return true;
    }

    isValidPersonID() {
        return true;
    }
}

module.exports = Validation;