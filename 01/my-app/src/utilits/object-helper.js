
export const updateObjectInArray = (items, itemId, objPropName, newObejProps) => {
    return items.map(u => {
        if (u[objPropName] === itemId) {
            return { ...u, ...newObejProps }
        }
        return u;
    })
}