import axios from "axios";
// if(process){
//     account_Id=process.env.REACT_APP_ACCOUNT_ID;
//     token=process.env.REACT_APP_API_TOKEN;
// }
const http=axios.create({
    baseURL: `api/chat`,
    timeout: 30000,
});
axios.interceptors.request.use((config)=>{
    const chatPath = config.url.split('api/chat')[1];
    config.body.path =  chatPath ;
    config.url='api/chat';
    return config;
})
export default http;