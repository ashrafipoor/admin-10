
function Spinner() {
    return (
        <div className="flex items-center justify-center space-x-2 h-screen">

            <div className="animate-ping w-10 h-10 rounded-full bg-yellow-300" >

            </div>
            <div className="animate-ping w-10 h-10 rounded-full bg-orange-400" >

            </div>
            <div className="animate-ping w-10 h-10 rounded-full bg-red-400" >

            </div>

        </div>
    )
}
export default Spinner;