import request from "../utils/request";
let my_data: any;

request('/get_kg_data', 'get').then(
    response=>{
        my_data = response.data;
        console.log(response);
    },(err)=>{
        console.log("错误")
    }
)

export default my_data;
