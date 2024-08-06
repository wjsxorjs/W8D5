import { Card, CardContent } from "@mui/material"

export default function MemoCard(props) {
    const m_ar = props.m_ar;
    return (
        <Card sx ={{maxWidth: 500, margin: '20px auto'}}>
            <CardContent>
            {m_ar.map((mvo,idx) => {
                return(
                    <div key={idx} className="list_item">
                        <h4 className="list_item-h4">{mvo.content}</h4>
                        <p className="list_item-p">{mvo.write_date}</p>
                        <p>{mvo.writer}</p>
                    </div>
                )
            })}
            </CardContent>
        </Card>
    )
}
