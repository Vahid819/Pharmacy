

export default function ErrorLayout({ children}){
    return(
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-2xl font-bold">Something went wrong</h1>
            <p className="text-gray-500">Please try again later.</p>
            {children}
        </div>
    )
}