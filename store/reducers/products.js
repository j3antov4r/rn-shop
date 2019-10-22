import PRODUCTS from '../../data/dummy-data';



const InitialState ={
    availableProducts : PRODUCTS,
    userProducts : PRODUCTS.filter(prod => prod.ownerId === 'u1')
}

export default (state = InitialState, action) => {
    //console.log(action);
    switch(action){

        default:
            return state;
    }
    
}