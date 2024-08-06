"use client"
import { useEffect, useState } from 'react'
// import를 하면 그 순간 server component의 기능을 상실하며
// "use client"를 명시해줘야한다.

export default function page() {
    
    const t_ar = [
        {title:'항목1'},
        {title:'항목2'},
        {title:'항목3'},
    ];

    // const [list, setList] = useState([t_ar]);
    // 이걸 쓰는 순간 server component의 기능을 상실함

    // useEffect(()=>{});
    // 이걸 쓰는 순간 server component의 기능을 상실함

    return (
      <div>
        <ol>
            {t_ar.map((item,idx)=>(
                <li key={idx}>{item.title}</li>
            ))}
        </ol>
      </div>
    )
}
