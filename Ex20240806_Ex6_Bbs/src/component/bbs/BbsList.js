import { Table } from '@mui/material'
import React from 'react'

export default function BbsList({b_ar, changePage, totalPage}) {
  return (
    <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell>번호</TableCell>
                <TableCell align="left">제목</TableCell>
                <TableCell align="center">글쓴이</TableCell>
                <TableCell align="center">등록일</TableCell>
                <TableCell align="center">조회수</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {b_ar.map((bvo,idx) => (
                <TableRow key={idx}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                    {idx}
                </TableCell>
                <TableCell align="left">{bvo.subject}</TableCell>
                <TableCell align="center">{bvo.writer}</TableCell>
                <TableCell align="center">{bvo.write_date}</TableCell>
                <TableCell align="center">{bvo.hit}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
    </TableContainer>
  )
}
