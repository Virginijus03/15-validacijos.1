class Validation {
    isValidFirstName(firstName) {
        if (!this.isValidLastName(firstName)) {
            return false;
        }
        if (firstName.length < 2) {
            return false;
        }
        if (firstName[0].toLowerCase() === firstName[0]) {
            return false;
        }
        if (firstName.slize(1).toLowerCase() !== firstName.sleze(1)) {
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