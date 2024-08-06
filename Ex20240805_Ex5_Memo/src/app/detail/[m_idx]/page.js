"use client"

import { Card, CardContent } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

export default function page( props ) {

    console.log(props.params);
    const m_idx = props.params.m_idx;

    // 서버로부터 받을 vo정보를 저장할 곳
    const [mvo, setMvo] = useState({});

    const API_URL = `/memo/getMemo?m_idx=${m_idx}`
    // ${} 사용 시 `(Grave) 사용

    function getData(){
        axios.get(API_URL).then((res)=>{
            console.log(res.data.mvo);
            setMvo(res.data.mvo);
        });
    }

    useEffect(()=>{
        getData();
    },[m_idx]);

    return (
        <Card sx ={{maxWidth: 500, margin: '20px auto'}}>
        <CardContent>
            <h2>상세페이지</h2>
            <h4>글쓴이: {mvo.writer}({mvo.ip})</h4>
            <p>작성일: {mvo.write_date}</p>
            <p>내용: {mvo.content}</p>
        </CardContent>
    </Card>
    )
}
