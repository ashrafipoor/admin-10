import { ReactComponent as RetryIcon } from './../../Assets/Icons/retry.svg';

function Retry(props) {

    return (
        <div className="w-full h-screen flex justify-center items-center flex-col">
            <RetryIcon fill='currentColor' className='w-16 h-16 cursor-pointer' onClick={props.retryClick}  />
            <h1>connection error, please retry</h1>
        </div>
    )
}

export default Retry;