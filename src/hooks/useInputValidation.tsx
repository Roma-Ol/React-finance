import React from "react";

export function useInputValidation() {
    function validate(value: any, type: string ) {
        const stringRegex = new RegExp('^[A-Z][a-z]*');

        switch (type) {
            case 'string':
                return stringRegex.test(value);

            default:
                return false;
        }
    }

    return { validate };
}