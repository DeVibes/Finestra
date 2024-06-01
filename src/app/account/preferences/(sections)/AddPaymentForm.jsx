// 'use client'
import addPaymentType from "../../../../actions/account";
import TextInput from "../../../../components/UI/TextInput";
import { useSpring, animated, config } from "@react-spring/web";
import { useFormStatus, useFormState } from 'react-dom'
import { useActionState } from 'react'
const AddPaymentForm = ({ isShown }) => {
    // const addWithAccountId = addPaymentType.bind(null, 'myAccountId')
    // const [state, submitAction, isPending] = useActionState(addPaymentType, {error: null});
    const { pending } = useFormStatus()
    const [state, formAction] = useFormState(addPaymentType, { paymentType: '', accountId: 'myjaccountId'})
    const field = {
        label: "Add Payment Type",
        id: "paymentType",
    };
    const styles = useSpring({
        config: config.stiff,
        from: { opacity: 0, height: 0 },
        to: { opacity: isShown ? 1 : 0, height: isShown ? 'auto' : 0 },
    });
    return (
        <animated.div style={styles} className="mb-2">
            <form action={formAction} className="">
                <TextInput field={field}  />
                <button type="submit" className="p-2 bg-catgreen text-white rounded-lg" disabled={pending}>Add</button>
                {/* {state.error && <span className="text-red-500">{state.error}</span>} */}
            </form>
        </animated.div>
    );
}

export default AddPaymentForm;