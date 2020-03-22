import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid } from "@material-ui/core";
import { Button } from "@material-ui/core";

import CheckBoxSection from "../components/Forms/checkboxSection.js";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: theme.spacing(),
      width: "25ch"
    }
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

const checkboxesCad = [
  { label: "Cad girl", status: false },
  { label: "Cad man", status: false },
  { label: "cad guru", status: false }
]; // pass this to a checkboxsection to output all checkbox labels -> status is if its disabled or enabled
const checkboxesMedical = [
  { label: "Doc", status: false },
  { label: "Consultant", status: false },
  { label: "nurse", status: false }
]; // pass this to a checkboxsection to output all checkbox labels -> status is if its disabled or enabled
const checkboxesEng = [
  { label: "Mechanical", status: false },
  { label: "Structual", status: false },
  { label: "Engineer", status: false }
]; // pass this to a checkboxsection to output all checkbox labels -> status is if its disabled or enabled
const checkboxesLegal = [
  { label: "Lawyer", status: false },
  { label: "Barrister", status: false },
  { label: "paralegal", status: false }
];
const checkboxesManu = [
  { label: "Factory worker", status: false },
  { label: "wielder", status: false },
  { label: "assembler", status: false }
];
//TODO: ALL THESE NEED TO BE UPDATED WHEN THE REQUIRMENTS ARE CLEAR what people are needed for each section

function NewProject(_props) {
  const [value, setValue] = useState("");
  const [profsRequired, setProfsRequired] = useState([]);

  function handleCheckBoxChange(event) {
    //TODO: GET CHECKBOX data from child compoenent onChange
  }

  function handleChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    alert("A name was submitted: " + value);
    //TODO: HANDLE submit
    event.preventDefault();
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} />
      <Grid container justify="center">
        {/* Main Page Content */}
        <Grid item xs={8} lg={4} xl={4}>
          <Typography variant="h3">Welcome to Crowd Sourced Medical</Typography>
        </Grid>
      </Grid>
      <Box m={6} />

      <Grid container justify="center">
        <Grid item xs={12} lg={8} xl={8}>
          <Typography variant="h4">Tell us about your project</Typography>
          <Typography variant="h6">
            What's the problem and what are you looking for our volunteers to
            help with?
          </Typography>

          <form className={useStyles.root} noValidate autoComplete="off">
            <TextField
              id="outlined-multiline-static"
              multiline={true}
              rows={10}
              fullWidth={true}
              size="large"
              label="Problem statement...."
              variant="outlined"
              value={value}
              onChange={handleChange}
            />
            <Box m={5} />
            <Grid container alignItems="flex-start" item xs={12} lg={8} xl={8}>
              <a>Request Team Members and Advisors</a>
              <Box m={3} />
            </Grid>
            <Grid container alignItems="flex-start" item xs={12} lg={8} xl={8}>
              <Typography variant="h6">
                Request Team Members and Advisors
              </Typography>
              <Box m={5} />
            </Grid>

            <Grid container alignItems="flex-start" item xs={12} lg={8} xl={8}>
              <CheckBoxSection
                right
                sectionHeader={"Medical Staff advisers"}
                checkboxes={checkboxesMedical}
                cb={handleCheckBoxChange}
              ></CheckBoxSection>
            </Grid>
            <Box m={5} />
            <Grid container alignItems="flex-start" item xs={12} lg={8} xl={8}>
              <CheckBoxSection
                right
                sectionHeader={"Engineering"}
                checkboxes={checkboxesEng}
                cb={handleCheckBoxChange}
              ></CheckBoxSection>
            </Grid>
            <Box m={5} />

            <Grid container alignItems="flex-start" item xs={12} lg={8} xl={8}>
              <CheckBoxSection
                right
                sectionHeader={"CAD professionals"}
                checkboxes={checkboxesCad}
                cb={handleCheckBoxChange}
              ></CheckBoxSection>
            </Grid>
            <Box m={2} />
            <Grid container alignItems="flex-start" item xs={12} lg={8} xl={8}>
              <CheckBoxSection
                sectionHeader={"Legal advisors"}
                checkboxes={checkboxesLegal}
                cb={handleCheckBoxChange}
              ></CheckBoxSection>
            </Grid>
            <Box m={2} />
            <Grid container alignItems="flex-start" item xs={12} lg={8} xl={8}>
              <CheckBoxSection
                sectionHeader={"Manufactures"}
                checkboxes={checkboxesManu}
                cb={handleCheckBoxChange}
              ></CheckBoxSection>
            </Grid>
            <Button
              onClick={handleSubmit}
              variant="contained"
              size="large"
              color="primary"
              className={useStyles.margin}
            >
              Submit
            </Button>
          </form>
        </Grid>
      </Grid>
      {/* Footer */}
      <Grid item xs={12} />
      {/* End Main Page Content */}
    </Grid>
  );
}

export default NewProject;
