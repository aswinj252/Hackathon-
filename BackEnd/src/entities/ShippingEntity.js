const ShippingEntity = (date,date1,date2,orderId) => {
    return {
       
        getProposedDate: () => date,
        getProposedDate1: () => date1,
        getProposedDate2: () => date2,
        getOrderId: () => orderId
    }
}

export default ShippingEntity