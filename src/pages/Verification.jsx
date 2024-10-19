import React from "react";
import { Button, TextField, Grid, Typography, Link, Box } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import BusinessIcon from "@mui/icons-material/Business";
import EmailIcon from "@mui/icons-material/Email";
import GroupIcon from "@mui/icons-material/Group";
import InputAdornment from "@mui/material/InputAdornment";
import "@fontsource/dm-sans";
// Validation Schema using Yup
const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  phoneNumber: Yup.string()
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(10, "Must be exactly 10 digits")
    .max(10, "Must be exactly 10 digits")
    .required("Phone number is required"),
  companyName: Yup.string().required("Company name is required"),
  companyEmail: Yup.string()
    .email("Invalid email format")
    .required("Company email is required"),
  employeeSize: Yup.string().required("Employee size is required"),
});

const Verification = () => {
  return (
    <>
      <div
        style={{
          width: "25rem",
          marginTop: "11.5rem",
          marginRight: "16rem",
        }}
      >
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "14px",
            color: "#292929",
            textAlign: "justify",
            fontWeight: 500,
          }}
        >
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum
          voluptatibus veniam tempore hic itaque, ab blanditiis! Dignissimos,
          repudiandae voluptas aut voluptate voluptatibus blanditiis a quia
          nihil aliquam suscipit nulla sint!
        </p>
      </div>

      <Formik
        initialValues={{
          name: "",
          phoneNumber: "",
          companyName: "",
          companyEmail: "",
          employeeSize: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log("Form Data", values);
          // Handle form submission logic here
        }}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <Form style={{ marginTop: "3.8rem" }} onSubmit={handleSubmit}>
            <Box
              sx={{
                border: "1px solid lightgray",
                borderRadius: "15px",
                padding: "30px",
                width: "350px",
                margin: "0 auto",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                height: "18.5rem",
                //   marginLeft:"20rem",
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  textAlign: "center",
                  marginBottom: "10px",
                  fontWeight: 600,
               
                }}
              >
                Sign Up
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  textAlign: "center",
                  marginBottom: "20px",
                  color: "#A0A0A0",
                }}
              >
                Lorem Ipsum is simply dummy text
              </Typography>
              {/* Company Email Field */}
              <Grid container alignItems="center" sx={{ marginBottom: "15px" }}>
                <Grid item xs>
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                    }}
                    size="small"
                    sx={{ backgroundColor: "#F4F4F4" }}
                    fullWidth
                    label="Email OTP"
                    placeholder="Email OTP"
                    name="companyEmail"
                    variant="outlined"
                    value={values.companyEmail}
                    onChange={handleChange}
                    error={touched.companyEmail && Boolean(errors.companyEmail)}
                    helperText={touched.companyEmail && errors.companyEmail}
                  />
                </Grid>
              </Grid>
              <Button
                size="small"
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  textTransform: "none",
                  marginBottom:"1rem",
                  backgroundColor: "#0057FF",
                  "&:hover": {
                    backgroundColor: "#0046CC",
                  },
                }}
              >
                Verify
              </Button>

              {/* Phone Number Field */}
              <Grid container alignItems="center" sx={{ marginBottom: "15px" }}>
                <Grid item xs>
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PhoneIcon />
                        </InputAdornment>
                      ),
                    }}
                    size="small"
                    sx={{ backgroundColor: "#F4F4F4" }}
                    fullWidth
                    label="Mobile OTP"
                    placeholder="Mobile OTP"
                    name="phoneNumber"
                    variant="outlined"
                    value={values.phoneNumber}
                    onChange={handleChange}
                    error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                    helperText={touched.phoneNumber && errors.phoneNumber}
                  />
                </Grid>
              </Grid>

             
              <Button
                size="small"
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{
                  fontSize: "14px",
                  fontWeight: "bold",
                  textTransform: "none",
                  backgroundColor: "#0057FF",
                  "&:hover": {
                    backgroundColor: "#0046CC",
                  },
                }}
              >
                Verify
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Verification;
