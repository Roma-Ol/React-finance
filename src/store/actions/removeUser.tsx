function removeUser(name: string | undefined, index: number | undefined) {
    return {
        type: 'REMOVE',
        payload: {
            name: name,
            index: index
        }
    }
}

export default removeUser;