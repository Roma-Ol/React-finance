function addUser(name: string, budget: number) {
    return {
        type: 'ADD',
        payload: {
            name: name,
            budget: budget,
        }
    }
}

export default addUser;