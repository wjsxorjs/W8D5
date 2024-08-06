"use client"

import MemoCard from "@/component/MemoCard"
import axios from "axios";
import { useEffect, useState } from "react";

export default function page() {

    // let m_ar=[
    //     {title:"안녕하세요",date:"2024-08-01",content:"잘 되나?"},
    //     {title:"감사해요",date:"2024-08-02",content:"잘 되네"},
    //     {title:"잘있어요",date:"2024-08-03",content:"잘 돼?"},
    //     {title:"다시 만나요",date:"2024-08-04",content:"잘 된다고!"},
    // ]

    const [m_ar, setM_ar] = useState([]);

    const API_URL = "/memo/list";

    function getData(){
        axios.get(API_URL).then((res)=>{
            setM_ar(res.data.m_ar);
        });
    }


    useEffect(()=>{
        // 익명함수 내부
        getData(); // 서버 비동기식 통신
    },[]);

    return (
        <div className="list_bg">
            <MemoCard m_ar={m_ar} />
        </div>
    )
}
