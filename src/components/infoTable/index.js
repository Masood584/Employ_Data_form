import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useNavigate } from "react-router-dom";
import { Button, IconButton } from "@mui/material";
import { Container } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import EditDialog from "./editDialog";
import axios from "axios";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
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

const InfoTable = () => {
  const navigate = useNavigate();
  const [employData, setEmployData] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    handleAddData();
  }, []);

  const handleAddData = () => {
    axios
      .get("https://6422b508001cb9fc202daa72.mockapi.io/crud")
      .then((response) => {
        console.log(response.data, "responseresponseresponse");
        setEmployData(response.data);
      })
      .catch((error) => {
        console.log(error, "errorerrorerrorerrorerrorerror");
      });
  };

  const handleOnDelete = (id) => {
    axios
      .delete(`https://6422b508001cb9fc202daa72.mockapi.io/crud/${id}`)
      .then((response) => {
        console.log(response, "delelretetetetetetet");
        handleAddData();
      })
      .catch((error) => {
        console.log(error, "ssssssssdasfasfsfsfsf");
      });
  };

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const setDataStorage = (id, name, age, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("age", age);
    localStorage.setItem("email", email);
    handleOpenDialog();
  };

  return (
    <Container maxWidth={"lg"}>
      <Button  variant="contained" onClick={() => navigate("/formData")}>
        Form
      </Button>
      <TableContainer  component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell align="right">EMPLOY NAME</StyledTableCell>
              <StyledTableCell align="right">AGE</StyledTableCell>
              <StyledTableCell align="right">EMAIL</StyledTableCell>
              <StyledTableCell align="right">ACTIONS</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employData?.map((item, index) => (
              <StyledTableRow key={item.id}>
                <StyledTableCell component="th" scope="row">
                  {index + 1}
                </StyledTableCell>
                <StyledTableCell align="right">{item.e_name}</StyledTableCell>
                <StyledTableCell align="right">{item.e_age}</StyledTableCell>
                <StyledTableCell align="right">{item.e_email}</StyledTableCell>
                <StyledTableCell align="right">
                  <IconButton
                    onClick={() =>
                      setDataStorage(
                        item.id,
                        item.e_name,
                        item.e_age,
                        item.e_email
                      )
                    }
                  >
                    <EditIcon sx={{color:"yellow"}} />
                  </IconButton>
                  <IconButton onClick={() => handleOnDelete(item.id)}>
                    <DeleteIcon sx={{ color: "red" }} />
                  </IconButton>
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <EditDialog
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        handleAddData={handleAddData}
      />
    </Container>
  );
};

export default InfoTable;
