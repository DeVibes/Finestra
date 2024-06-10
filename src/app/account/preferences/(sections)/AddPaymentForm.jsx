'use client'
import TextInput from "../../../../components/UI/TextInput";
import { useSpring, animated, config } from "@react-spring/web";
import { addPaymentTypeAction } from "../../../actions/account";
import { CheckMarkIcon } from "../../../../utils/icons";
import { useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
const AddPaymentForm = ({ isShown, className }) => {
    const [isSaveShown, setIsSaveShown] = useState(false);
    const [formState, formAction] = useFormState(addPaymentTypeAction, {})
    const field = {
        label: "Payment Type",
        id: "paymentType",
    };
    const handleInputChange = () => setIsSaveShown(true);
    const styles = useSpring({
        config: config.stiff,
        from: { opacity: 0, height: 0 },
        to: { opacity: isShown ? 1 : 0, height: isShown ? 'auto' : 0 },
    });
    return (
        <animated.div style={styles} className={`${className}`}>
            <form className="flex w-full" action={formAction}>
                <input type="hidden" name="accountId" value="1" />
                <TextInput config={field} onChange={handleInputChange} />
                {isSaveShown &&
                    <SubmitButton />}
                {/* {pending && <span className="text-catgreen">Saving...</span>} */}
            </form>
            {!formState.success && <span className="text-red-500">{formState.payload}</span>}
        </animated.div>
    );
}

export default AddPaymentForm;

const SubmitButton = () => {
    const { pending } = useFormStatus();
    return (
        <button type="submit" className="p-1 bg-catgreen text-white text-xl rounded-lg" disabled>
            <CheckMarkIcon size={15} />
        </button>
    );
}