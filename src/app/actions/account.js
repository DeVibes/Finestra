'use server'

import { addPaymentTypeToAccount } from "../../db/prismaQueries"

export const addPaymentTypeAction = async (prevState, queryData) => {
    // delay for 2 seconds
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const paymentType = queryData.get('paymentType')
    const accountId = queryData.get('accountId')
    const result = await addPaymentTypeToAccount(paymentType, accountId)
    return {
        success: result !== null,
        payload: "nice"
    }
}