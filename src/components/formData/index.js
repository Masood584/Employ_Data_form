import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormData() {
  const [isLoad, setIsLoad] = useState(false);
  const [inputVal, setInputVal] = useState({
    employName: "",
    employAge: "",
    employEmail: "",
  });
  const navigate = useNavigate();
  console.log(inputVal, "inputValinputValinputValinputVal");

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputVal({ ...inputVal, [name]: value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // const formData = new FormData();
    // formData.append("e-name", inputVal.employName);
    // formData.append("e-age", inputVal.employAge);
    // formData.append("e-email", inputVal.employEmail);
    // axios({
    //   method: "post",
    //   url: "https://6422b508001cb9fc202daa72.mockapi.io/crud",
    //   data: formData,
    //   headers: { "Content-Type": "multipart/form-data" },
    // })
    //   .then((response) => {
    //     console.log(response);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
    // setInputVal({
    //   employName: "",
    //   employAge: "",
    //   employEmail: "",
    // });
    setIsLoad(true);
    axios
      .post("https://6422b508001cb9fc202daa72.mockapi.io/crud", {
        e_name: inputVal.employName,
        e_age: inputVal.employAge,
        e_email: inputVal.employEmail,
      })
      .then((response) => {
        console.log(response, "responseresponseresponse");
        setIsLoad(false);
        setInputVal({
          employName: "",
          employAge: "",
          employEmail: "",
        });
        navigate("/");
      })
      .catch((error) => {
        setIsLoad(false);
        console.log(error, "errorerrorerrorerrorerrorerrorerror");
        alert(error.message)
        setInputVal({
          employName: "",
          employAge: "",
          employEmail: "",
        });
      });
  };

  return (
    <Container maxWidth={"xs"}>
      {isLoad && (
        <CircularProgress disableShrink 
          sx={{ position: "absolute", top: "44vh", left: "47%" }}
        />
      )}
      <Grid mb={4} mt={4} container>
        <Grid item xs={12}>
          <Typography variant="h5">Submit Employ Information</Typography>
        </Grid>
      </Grid>
      <form onSubmit={handleFormSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              placeholder="Enter Employ Name"
              value={inputVal.employName}
              name="employName"
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              placeholder="Enter Age"
              type="number"
              value={inputVal.employAge}
              name="employAge"
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              fullWidth
              placeholder="Enter Email"
              type="email"
              value={inputVal.employEmail}
              name="employEmail"
              onChange={handleOnChange}
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}

export default FormData;
