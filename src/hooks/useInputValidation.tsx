import React from "react";

export function useInputValidation() {
    function validate(value: any, type: string ) {
        // Cyrillic & Latin.
        const stringRegex = new RegExp(/^[a-zA-Z ]+$/);

        switch (type) {
            case 'string':
                console.log(stringRegex.test(value));
                return stringRegex.test(value);

            default:
                return false;
        }
    }

    return { validate };
}