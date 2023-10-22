

// Define a function to create an Order entity
const OrderEntity = ( product_name, quantity, date_of_shipping,vender, pdf_document) => {
  return {
    getProductName: () => product_name,
    getQuantity: () => quantity,
    getDateOfShipping: () => date_of_shipping,
    getVender:()=>vender,
    getPdfDocument: () => pdf_document,
  };
};

export default OrderEntity;
