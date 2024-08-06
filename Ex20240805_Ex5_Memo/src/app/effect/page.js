"use client"

import { Button } from '@mui/material';
import { useEffect, useState } from 'react'

export default function page() {
    const [cnt, setCnt] = useState(0);
    const [text, setText] = useState("");

    // function inCnt(){
    const inCnt = () => {
        setCnt(cnt+1);
    }

    function deCnt(){
        setCnt(cnt-1);
    }

    function writeTxt(e){
        setText(e.target.value);
    }
    
    useEffect(() => { 
        // 무슨 사건이 있으면 무조건 호출되는 함수인 Callback 함수이다.
        console.log("화면갱신!")
    },[cnt]);

    return (
        <div>
            <span style={{display:'block',margin: '5px 5px'}}>Count: {cnt}</span>
            <Button sx={{margin: '0 5px'}} variant="contained" color="success" onClick={inCnt}>+</Button>
            <Button sx={{margin: '0 5px'}} variant="contained" color="error" onClick={deCnt}>-</Button>
            내용: <input type='text' onChange={writeTxt}/><br/><br/>
            <hr/><br/>
            <span>입력값: {text}</span>
        </div>
    )
}
