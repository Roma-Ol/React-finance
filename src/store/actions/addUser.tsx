function capitalizeFirstLetter(string: string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function addUser(name: string | undefined, budget: number | undefined) {
    return {
        type: 'ADD',
        payload: {
            name: name !== undefined && capitalizeFirstLetter(name),
            budget: budget,
        }
    }
}

export default addUser;