function sortUsers(sortBy: string) {
    return {
        type: `SORT_BY_${ sortBy.toUpperCase() }`
    }
}

export default sortUsers;