import React from 'react'

const FinToggle = ({ icon: Icon, className, label, ...props }) => {
    return (
        <div className={`${className} flex items-center gap-2`}>
            <div className="w-1/3 flex items-center gap-2">
                {Icon && <Icon size={20} className="text-catgreen" />}
                <span className="text-md text-cat_text_primary">{label}</span>
            </div>
            <label className="inline-flex items-center gap-2 relative">
                <input type="checkbox" value="" className={`sr-only peer ${className}`} {...props} />
                <div className="relative w-14 h-7 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            </label>
        </div>
    )
}

export default FinToggle