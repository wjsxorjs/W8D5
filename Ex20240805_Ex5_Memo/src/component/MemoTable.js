import {Button, Card, CardContent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import Link from "next/link"

export default function MemoTable({m_ar}) {
    return(
        <Card>
            <CardContent>
                <TableContainer>
                    <Table sx ={{maxWidth: 500, margin: '20px auto'}}>
                        <TableHead className="list_item">
                            <TableRow>
                                <TableCell className="list_item-h4">번호</TableCell>
                                <TableCell className="list_item-h4">내용</TableCell>
                                <TableCell className="list_item-h4">작성자</TableCell>
                                <TableCell className="list_item-h4">작성일자</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody className="list_item">
                        {m_ar.map((mvo,idx) => {
                            return(
                                <TableRow key={idx}>
                                    <TableCell className="list_item-p">{idx+1}</TableCell>
                                    <TableCell className="list_item-p">
                                        <Link href={`/detail/${mvo.m_idx}`}>{mvo.content}</Link>
                                    </TableCell>
                                    <TableCell className="list_item-p">{mvo.writer}</TableCell>
                                    <TableCell className="list_item-p">{mvo.write_date}</TableCell>
                                </TableRow>
                            )
                        })}
                                <TableRow>
                                    <TableCell colSpan={4} style={{textAlign:'right'}} className="list_item-p">
                                        <Button variant="contained" href="/write">글쓰기</Button>
                                    </TableCell>
                                </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </CardContent>
        </Card>
    )
}
