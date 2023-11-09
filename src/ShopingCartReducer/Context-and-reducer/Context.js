/* import { createContext, useReducer } from "react";
import reducer,{initialState} from './reducer'

export const StoreContext = createContext()

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addToBasket = () => {
        const updatedBasket = state.products
        updatedBasket.push(product)
        updatePrice(updatedBasket)

        dispatch({ type: 'add', payload: updatedBasket })
    }


    const removeFromBasket = (product) => {
        const updatedBasket = state.products.filter((currentProduct) => currentProduct.name !== product.name)
        updatePrice(updatedBasket)


        dispatch({ type: 'remover', payload: updatedBasket })
    }

    const updatePrice = (product) => {
        let total = 0
        product.forEach(product => {
            total += product.price
        })

        dispatch({ type: 'updatePrice', payload: total })
    }

    const value={
        total:state.total,
        products:state.products,
        addToBasket,
        removeFromBasket
    }

    return <StoreProvider value={value} >
        {children}
    </StoreProvider>
} */

import { createContext, useReducer } from "react";
import  { initialState } from './reducer';

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
    const [state, dispatch] = useReducer( initialState);

    const addToBasket = (product) => { // Added 'product' parameter
        const updatedBasket = [...state.products]; // Use spread operator to create a new array
        updatedBasket.push(product);
        updatePrice(updatedBasket);

        dispatch({ type: 'add', payload: updatedBasket });
    };

    const removeFromBasket = (product) => {
        const updatedBasket = state.products.filter((currentProduct) => currentProduct.name !== product.name);
        updatePrice(updatedBasket);

        dispatch({ type: 'remove', payload: updatedBasket }); // Corrected the type from 'remover' to 'remove'
    };

    const updatePrice = (product) => {
        let total = 0;
        product.forEach((item) => {
            total += item.price; // Changed 'product' to 'item'
        });

        dispatch({ type: 'updatePrice', payload: total });
    };

    const value = {
        total: state.total,
        products: state.products,
        addToBasket,
        removeFromBasket
    };

    return (
        <StoreContext.Provider value={value}> {/* Changed 'StoreProvider' to 'StoreContext.Provider' */}
            {children}
        </StoreContext.Provider>
    );
};
