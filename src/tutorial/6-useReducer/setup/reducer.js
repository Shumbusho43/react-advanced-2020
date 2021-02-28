export const reducer = (state, action) => {
    if (action.type === 'ADD_ITEM') {
        const newPeople = [...state.people, action.payLoad]
        return {
            ...state,
            people: newPeople,
            isModalOpen: true,
            modelContent: 'item added'
        }
    }
    if (action.type === 'NO_VALUE') {
        return {
            ...state,
            modelContent: 'plz enter name',
            isModalOpen: true
        }
    }
    if (action.type === 'CLOSE_MODAL') {
        return {
            ...state,
            isModalOpen: false
        }
    }
    if (action.type === 'REMOVE_ITEM') {
        const newPeople = state.people.filter((person) => person.id !== action.payLoad)
        return {
            ...state,
            people: newPeople
        }

    }
    throw new Error('no matching type')
}