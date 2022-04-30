import Retry from "../Components/Retry";
import Spinner from "../Components/Spinner";

function LoadingRetry({status,data,retryCallBack,OriginalComponent}){
    
    let result = <Spinner />;
    switch (status) {
        case 'loaded':
            result =<OriginalComponent data={data}/>
            break;
        case 'retry':
            result = <Retry retryClick={retryCallBack} />;
            break;
        case 'loading':
            result = <Spinner />;
            break;
            default:
                return <Spinner/>
    }
    return result;
}
export default LoadingRetry;