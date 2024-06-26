const ModulePlaceholder = () => (
    <div role="status" className="w-full animate-pulse md:p-6 dark:border-gray-700">
        <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-1"></div>
        <div className="w-48 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        <div className="flex items-baseline mt-3 gap-3">
            <div className="w-full bg-gray-200 rounded-t-lg h-72 dark:bg-gray-700"></div>
            <div className="w-full h-56  bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
            <div className="w-full bg-gray-200 rounded-t-lg h-72  dark:bg-gray-700"></div>
            <div className="w-full h-64  bg-gray-200 rounded-t-lg dark:bg-gray-700"></div>
            <div className="w-full bg-gray-200 rounded-t-lg h-80  dark:bg-gray-700"></div>
            <div className="w-full bg-gray-200 rounded-t-lg h-72  dark:bg-gray-700"></div>
            <div className="w-full bg-gray-200 rounded-t-lg h-80  dark:bg-gray-700"></div>
        </div>
        <span className="sr-only">Loading...</span>
    </div>
)

export default ModulePlaceholder