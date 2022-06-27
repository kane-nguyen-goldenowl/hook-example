const genId = () => {
    return `${Date.now()}-${Math.floor(Math.random() * 100)}`
}

export default genId;