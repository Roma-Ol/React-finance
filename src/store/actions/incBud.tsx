function incBud(val: number) {
    return {
        type: 'INC',
        payload: val
    }
}

export default incBud;