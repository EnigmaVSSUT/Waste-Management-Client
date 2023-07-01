import React from "react";
import { useEffect, useState } from "react";
import { Stack, Box, CircularProgress } from "@mui/material";
import styles from "../styles/Viewcomplain.module.css";
import MaterialTable from "material-table";

import { forwardRef } from "react";

import AddBox from "@material-ui/icons/AddBox";
import ArrowDownward from "@material-ui/icons/ArrowDownward";
import Check from "@material-ui/icons/Check";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import ChevronRight from "@material-ui/icons/ChevronRight";
import Clear from "@material-ui/icons/Clear";
import DeleteOutline from "@material-ui/icons/DeleteOutline";
import Edit from "@material-ui/icons/Edit";
import FilterList from "@material-ui/icons/FilterList";
import FirstPage from "@material-ui/icons/FirstPage";
import LastPage from "@material-ui/icons/LastPage";
import Remove from "@material-ui/icons/Remove";
import SaveAlt from "@material-ui/icons/SaveAlt";
import Search from "@material-ui/icons/Search";
import ViewColumn from "@material-ui/icons/ViewColumn";

const tableIcons = {
	Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
	Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
	Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
	Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
	DetailPanel: forwardRef((props, ref) => (
		<ChevronRight {...props} ref={ref} />
	)),
	Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
	Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
	Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
	FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
	LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
	NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
	PreviousPage: forwardRef((props, ref) => (
		<ChevronLeft {...props} ref={ref} />
	)),
	ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
	Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
	SortArrow: forwardRef((props, ref) => (
		<ArrowDownward {...props} ref={ref} />
	)),
	ThirdStateCheck: forwardRef((props, ref) => (
		<Remove {...props} ref={ref} />
	)),
	ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

function Viewcomplain() {
	const [tableData, setTableData] = useState([
		{
			complainNo: "0001",
			dustbinNo: "D-01",
			location: "CCD",
			date: "19/06/2023",
			status: "Open",
			issuedBy: "ABC",
		},
		{
			complainNo: "0002",
			dustbinNo: "D-02",
			location: "Canteen",
			date: "19/06/2023",
			status: "Open",
			issuedBy: "ABC",
		},
		{
			complainNo: "0003",
			dustbinNo: "D-03",
			location: "Admin Block",
			date: "19/06/2023",
			status: "Open",
			issuedBy: "ABC",
		},
		{
			complainNo: "0004",
			dustbinNo: "D-04",
			location: "CCD",
			date: "19/06/2023",
			status: "Open",
			issuedBy: "ABC",
		},
		{
			complainNo: "0005",
			dustbinNo: "D-05",
			location: "Canteen",
			date: "19/06/2023",
			status: "Open",
			issuedBy: "ABC",
		},
		{
			complainNo: "0006",
			dustbinNo: "D-06",
			location: "CCD",
			date: "19/06/2023",
			status: "Open",
			issuedBy: "ABC",
		},
	]);

	const columns = [
		{ title: "Complain No.", field: "complainNo" },
		{ title: "Dustbin No.", field: "dustbinNo" },
		{ title: "Location", field: "location" },
		{ title: "Date", field: "date" },
		{ title: "Status", field: "status" },
		{ title: "Issued By", field: "issuedBy" },
	];

	return (
		<Stack>
			<Box
				sx={{
					height: "20vh",
					p: 3,
					m: 4,
					borderRadius: 3,
					boxShadow: 4,
					flexGrow: 1,
				}}
			>
				<h3>Complain Overview</h3>
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

					<div className={styles.progressChart}>
						<CircularProgress
							size="7vw"
							variant="determinate"
							value={75}
						/>
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

			<MaterialTable
				columns={columns}
				data={tableData}
				icons={tableIcons}
				title=""
				options={{ search: false, actionsColumnIndex: -1 }}
				// editable={{
				//     onRowUpdate:(newRow,oldRow)=>new Promise((resolve,reject)=>{
				//         const updatedData=[...tableData]
				//         updatedData[oldRow.tableData.id]=newRow
				//         setTableData(updatedData
				//             )
				//         console.log(newRow,oldRow)

				//         setTimeout(()=>resolve(),500)
				//     })
				// }}
			/>
		</Stack>
	);
}

export default Viewcomplain;
