import Axios, { CancelTokenSource, AxiosRequestConfig } from 'axios';

class Request{
    apiDomain: string;
    cancelSource: CancelTokenSource;

    constructor(apiDomain:string){

        this.apiDomain = apiDomain;
        this.cancelSource = Axios.CancelToken.source();
    }

    cancelRequest(reason:string){

        this.cancelSource.cancel(reason);
        this.cancelSource = Axios.CancelToken.source();

    }

    query(query: object){

        const request: AxiosRequestConfig = {
            url: `${this.apiDomain}/graphql`,
            method: 'POST',
            data: query,
            cancelToken: this.cancelSource.token
        }

        return Axios(request)

    }

    mutation(){



    }



}

export default Request;