import request from "../utils/request";

const get_data = async() => {
    return await request('/get_kg_data', 'get').then(
        response => {
            console.log(response.data);
            return response.data;
        }, (err) => {
            console.log("错误")
        }
    )
}

export default get_data;
