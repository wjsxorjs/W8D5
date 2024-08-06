import axios from 'axios';

export default function handler(req, res) {
    console.log("API 호출");

    const API_URL = "http://localhost:8080/memo/write"

    if (req.method == 'POST'){
        axios.get(API_URL,{params:req.body}).then((res)=>{
            console.log("RES: "+ res.data.result);
        });
        return res.status(200).redirect('/tableList');
    }


}
