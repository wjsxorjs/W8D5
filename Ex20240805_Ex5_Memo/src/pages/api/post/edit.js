import axios from 'axios';

export default function handler(req, res) {
    console.log(req.body.content);

    const API_URL = "http://localhost:8080/memo/edit"

    if (req.method == 'POST'){
        // axios.get(API_URL,{params:req.body}).then((res)=>{
        //     console.log("RES: "+ res.data.result);
        // });
        axios.post(API_URL,null,{params:{"content":req.body.content,"writer":req.body.writer,"m_idx":req.body.m_idx}}).then((res)=>{
            console.log("RES: "+ res.data.result);
        });
        return res.status(200).redirect(`/detail/${req.body.m_idx}`);
        
    }


}
