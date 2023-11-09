export const initialState = {
    total: 0,
    products: []
}

export const storeReducer = (state, action) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                products: action.payload
            }
        case 'remove':
            return {
                ...state,
                products: action.payload
            }
        case 'updatePrice':
            return {
                ...state,
                products: action.payload
            }
        default: throw Error('cannot match case in reducer')
    }
}