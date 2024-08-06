"use client"

import { Button, Card, CardContent } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function page(props) {
    console.log(props);

    const b_idx = props.params.b_idx;
    const nowPage = props.searchParams.nowPage;

    const API_URL = "/api/bbs/getBbs";

    const [bvo, setBvo] = useState({});

    const router = useRouter();

    useEffect(()=>{
        axios.get(
            API_URL,
            {params:{"b_idx":b_idx}}
        ).then((res)=>{
            console.log(res.data.bvo);
            setBvo(res.data.bvo);
        })
    },[b_idx]);

    return (
        <Card sx ={{maxWidth: 500, margin: '20px auto'}}>
            <CardContent>
                <h2>상세페이지</h2>
                <h4>제목: {bvo.subject}</h4>
                <h4>글쓴이: {bvo.writer}</h4>
                <p>작성일: {bvo.write_date}</p>
                <p>내용: {bvo.content}</p>
                <hr style={{margin:'10px 0'}}/>
                <Button variant="contained" color="success" onClick={()=>router.push(`/bbs/edit/${bvo.b_idx}?nowPage=${nowPage}`)}>편집</Button>
                <Button variant="contained" style={{margin:'0 0 0 10px'}} onClick={()=>router.push(`/bbs?nowPage=${nowPage}`)}>목록</Button>
            </CardContent>
        </Card>
    )
}
