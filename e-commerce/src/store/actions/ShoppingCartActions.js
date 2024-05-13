export const SET_CART="SET_CART";
export const SET_PAYMENT="SET_PAYMENT";
export const SET_ADDRESS="SET_ADDRESS";
export const setCart = (cartData) => {
    return {
      type: SET_CART,
      payload: cartData
    };
  };
  
  export const setPayment = (paymentData) => {
    return {
      type: SET_PAYMENT,
      payload: paymentData
    };
  };
  
  export const setAddress = (addressData) => {
    return {
      type: SET_ADDRESS,
      payload: addressData
    };
  };