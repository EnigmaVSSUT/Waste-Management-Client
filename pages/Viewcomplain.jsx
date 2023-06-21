import React from 'react'
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularProgress from '@mui/material/CircularProgress';
import styles from '../styles/Viewcomplain.module.css';
import Box from '@mui/material/Box';
import { Divider, Stack, Typography, Grid, Container } from "@mui/material";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.grey,
        color: theme.palette.common.black,

    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },

}));
const ColoredTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },

}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
        border: 0,
    },
}));
const header = ['Complain No.', 'Dustbin No.', 'Location', 'Date', 'Status', 'Issued By']
const data = [['rl11', 'rl12', 'rl13', '111', '222', '333'], ['rl21', 'rl22', 'rl23', '111', '222', '333'], ['r31', 'rl32', 'rl33', '111', '222', '333']]


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Viewcomplain() {
    return (

        <Stack>

            <Box sx={{ height: '20vh', p: 3, m: 4, borderRadius: 3, boxShadow: 4, flexGrow: 1 }} >
                <h3>COMPLAIN OVERVIEW</h3>
                <div className={styles.container}>
                    <div className={styles.overview}>
                        <span className={styles.open}>
                            <div className={styles.l1}></div>
                            <p>OPEN</p>
                            <h1 className={styles.openNo}>02</h1>
                        </span>
                        <span className={styles.progress}>
                            <div className={styles.l1}></div>
                            <p>IN PROGRESS</p>
                            <h1 className={styles.progressNo}>08</h1>
                        </span>
                        <span className={styles.close}>
                            <div className={styles.l1}></div>
                            <p>CLOSED</p>
                            <h1 className={styles.closeNo}>10</h1>
                        </span>
                    </div>


                    <div className={styles.progressChart}><CircularProgress size="7vw" variant="determinate" value={75} />
                        <div className={styles.percent}>75%</div>
                    </div>

                    <div className={styles.index}>
                        <div className={styles.greenC}></div>
                        <p className={styles.colors1}> Closed/In progress</p>
                        <div className={styles.whiteC}></div>
                        <p className={styles.colors2}>Open</p>
                    </div>


                </div>





            </Box>




            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell align="center">{header[0]}</StyledTableCell>
                            <StyledTableCell align="center">{header[1]}</StyledTableCell>
                            <StyledTableCell align="center">{header[2]}</StyledTableCell>
                            <StyledTableCell align="center">{header[3]}</StyledTableCell>
                            <StyledTableCell align="center">{header[4]}</StyledTableCell>
                            <StyledTableCell align="center">{header[5]}</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {data
                            .map((row) => {
                                const WhichTableCell = row[2] === 'rl23' ? ColoredTableCell : StyledTableCell
                                return (
                                    <StyledTableRow key={row}>
                                        <WhichTableCell align="center">{row[0]}</WhichTableCell>
                                        <WhichTableCell align="center">{row[1]}</WhichTableCell>
                                        <WhichTableCell align="center">{row[2]}</WhichTableCell>
                                        <WhichTableCell align="center">{row[3]}</WhichTableCell>
                                        <WhichTableCell align="center">{row[4]}</WhichTableCell>
                                        <WhichTableCell align="center">{row[5]}</WhichTableCell>
                                    </StyledTableRow>
                                )
                            })}
                    </TableBody>
                </Table>
            </TableContainer>


        </Stack>

    )
}





export default Viewcomplain



//export default function BoxComponent() {
  //return (
    //<Box component="span" sx={{ p: 2, border: '1px dashed grey' }}>
     // <Button>Save</Button>
    //</Box>
  //);
//}


// export default function CustomizedTables() {
//     const header = ['Complain No.', 'Dustbin No.', 'Location','Date','Status','Issued By']
//     const data = [['rl11', 'rl12', 'rl13','111','222','333'], ['rl21', 'rl22', 'rl23','111','222','333'], ['r31', 'rl32', 'rl33','111','222','333']]

//     // const
//     return (
//         <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 700 }} aria-label="customized table">
//                 <TableHead>
//                     <TableRow>
//                         <StyledTableCell align="center">{header[0]}</StyledTableCell>
//                         <StyledTableCell align="center">{header[1]}</StyledTableCell>
//                         <StyledTableCell align="center">{header[2]}</StyledTableCell>
//                         <StyledTableCell align="center">{header[3]}</StyledTableCell>
//                         <StyledTableCell align="center">{header[4]}</StyledTableCell>
//                         <StyledTableCell align="center">{header[5]}</StyledTableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {data
//                         .map((row) => {
//                             const WhichTableCell = row[2] === 'rl23' ? ColoredTableCell : StyledTableCell
//                             return (
//                                 <StyledTableRow key={row}>
//                                     <WhichTableCell align="center">{row[0]}</WhichTableCell>
//                                     <WhichTableCell align="center">{row[1]}</WhichTableCell>
//                                     <WhichTableCell align="center">{row[2]}</WhichTableCell>
//                                     <WhichTableCell align="center">{row[3]}</WhichTableCell>
//                                     <WhichTableCell align="center">{row[4]}</WhichTableCell>
//                                     <WhichTableCell align="center">{row[5]}</WhichTableCell>
//                                 </StyledTableRow>
//                             )
//                         })}
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// }


/* <Grid container spacing={4}>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <Item>current state</Item>
        </Grid>
        <Grid xs={2} display="flex" justifyContent="center" alignItems="center">
          <Item><CircularProgress  variant="determinate" value={75} />
                            <Typography variant="caption" component="div" color="text.secondary">
                                {'75%'}
                            </Typography></Item>
        </Grid>
        <Grid xs display="flex" justifyContent="center" alignItems="center">
          <Item>index</Item>
        </Grid>
      </Grid> */