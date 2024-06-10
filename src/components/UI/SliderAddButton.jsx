'use client';
import { AddIcon } from "../../utils/icons";

const SliderAddButton = ({ onClick }) => {
    return (
        <button className="flex justify-between items-center gap-1" onClick={onClick}>
            <AddIcon size={20} className="text-catgreen" />
            <span className="text-catgreen text-lg">Add Payment Type</span>
        </button>
    );
}

export default SliderAddButton;