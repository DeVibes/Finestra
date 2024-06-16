'use client'
import { useFormStatus } from 'react-dom'
import FinButton from './UI/FinButton'
import Spinner from './placeholders/Spinner'

const SubmitButton = () => {
    const { pending } = useFormStatus()
    return (
        <FinButton type="submit" disabled={pending} className="flex justify-center items-center w-1/6">
            {pending && <Spinner className="text-cat_text_bg fill-catmauve"/>}
            <span className='text-md text-cat_text_bg'>{pending ? "Loading..." : "Add"}</span>
        </FinButton>
    )
}

export default SubmitButton
