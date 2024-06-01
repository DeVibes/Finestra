'use client';
import { AddIcon } from "../../utils/icons";

const SliderAddButton = ({ onClick }) => {
    return (
        <button className="border border-catmauve rounded-lg px-4" onClick={onClick}>
            <AddIcon size={25} className="text-catmauve" />
        </button>
    );
}

export default SliderAddButton;