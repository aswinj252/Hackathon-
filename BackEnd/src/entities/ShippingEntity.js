const ShippingEntity = (scheduleNumber, proposedDate) => {
    return {
        getScheduleNumber: () => scheduleNumber,
        getProposedDate: () => proposedDate,
    }
}

export default ShippingEntity