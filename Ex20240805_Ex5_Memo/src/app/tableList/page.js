"use client"

import MemoTable from "@/component/MemoTable"
import axios from "axios";
import { useEffect, useState } from "react";

export default function page() {

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
            <MemoTable m_ar={m_ar} />
        </div>
    )
}
