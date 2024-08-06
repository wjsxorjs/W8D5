"use client"

import { Button, Card, CardContent, Divider } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function page(props) {
    const m_idx = props.params.m_idx;
    
    const [mvo, setMvo] = useState({});
    const [content, setContent] = useState('');
    const [writer, setWriter] = useState('');

    const API_URL = `/memo/getMemo?m_idx=${m_idx}`

    function getData(){
        axios.get(API_URL).then((res)=>{
            setMvo(res.data.mvo);
            setContent(res.data.mvo.content);
            setWriter(res.data.mvo.writer);
        });
    }

    useEffect(()=>{
        getData();
    },[m_idx]);

    const changeTxt = (e) => {
        setContent(e.target.value)
    }

    function sendData(){
        let ff = document.forms[0];

        if(ff.content.value.trim().length==0){
            alert("내용은 빈칸일 수 없습니다.");
            ff.content.value = "";
            ff.content.focus();
            return;
        }

        ff.submit();
    }

    return (
        <Card sx ={{maxWidth: 500, padding:'20px', margin: '20px auto'}}>
            <CardContent>
                <h1>글 수정</h1>
                <Divider sx={{margin: '15px auto'}}/>
                <form action='/api/post/edit' method='post'>
                    <input type='hidden' name='m_idx' value={m_idx}/><br/>
                    <input type='text' style={{padding: 5, width: 150, margin: '5px 0'}} name='content' onChange={changeTxt} value={content}/><br/>
                    <input type='text' style={{padding: 5, width: 150, margin: '5px 0', border: 'none'}} name='writer' readOnly value={writer}/><br/>
                    <Button type='button' onClick={sendData} variant="contained">수정</Button>
                </form>
            </CardContent>
        </Card>
    )
}
