"use client"

import { Card, CardContent, Divider } from '@mui/material';
import { grey } from '@mui/material/colors';
import axios from 'axios';
import { redirect } from 'next/dist/server/api-utils';
import React from 'react'

export default function page() {

    const API_URL = "/memo/write";

    function sendData(e){
        // let ff = e.target.parentElement;

        let ff = document.forms[0];

        if(ff.content.value.trim().length==0){
            alert("내용을 입력하세요");
            ff.content.value = "";
            ff.content.focus();
            return;
        }
        if(ff.writer.value.trim().length==0){
            alert("작성자를 입력하세요");
            ff.writer.value = "";
            ff.writer.focus();
            return;
        }

        ff.submit();
    }

    return (
        <Card sx ={{maxWidth: 500, padding:'20px', margin: '20px auto'}}>
            <CardContent>
                <h1>글쓰기</h1>
                <Divider sx={{margin: '15px auto'}}/>
                <form action='/api/post/new' method='post'>
                    <input type='text' style={{padding: 5, width: 150, margin: '5px 0'}} name='content' placeholder='글 내용' /><br/>
                    <input type='text' style={{padding: 5, width: 150, margin: '5px 0'}} name='writer' placeholder='글 작성자'/><br/>
                    <button type='button' onClick={sendData} style={{padding: 10, borderRadius: 8, background:'#ddd',width: 50, border:'none', margin: '5px 0'}}>전송</button>
                </form>
            </CardContent>
        </Card>
    )
}
