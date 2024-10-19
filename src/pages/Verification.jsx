import React, { useState } from "react";
import { Button, TextField, Grid, Typography, Box } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import InputAdornment from "@mui/material/InputAdornment";
import { useNavigate } from "react-router-dom";
import { verifyEmail } from "../services/service"; 

// Validation Schema using Yup
const validationSchema = Yup.object({
  // companyEmail: Yup.string()
  //   .email("Invalid email format")
  //   .required("Email OTP is required"),
  // phoneNumber: Yup.string() // Kept for later use
  //   .matches(/^[0-9]+$/, "Must be only digits")
  //   .min(6, "Must be exactly 6 digits")
  //   .max(6, "Must be exactly 6 digits"),
});

const Verification = () => {
  const navigate = useNavigate();
  const [verificationStatus, setVerificationStatus] = useState(null);
 

  const handleVerification = async (values) => {
    try {
      const payload = {
        code: values.companyEmail, 
        email: localStorage.getItem('companyEmail'),
      };

      const response = await verifyEmail(payload);

      if (response.message === "Email verified successfully!") {
        setVerificationStatus("success");
        navigate("/job-posting"); 
      } else {
        setVerificationStatus("failure");
        alert(response.message || "Verification failed");
      }
    } catch (error) {
      setVerificationStatus("failure");
      console.error("Verification failed", error);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          companyEmail: "",
          phoneNumber: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleVerification}
      >
        {({ values, errors, touched, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit} style={{ marginTop: "3.8rem" }}>
            <Box
              sx={{
                border: "1px solid lightgray",
                borderRadius: "15px",
                padding: "30px",
                width: "350px",
                margin: "0 auto",
                boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                height: "18.5rem",
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
                Please verify your Email OTP below
              </Typography>

              {/* Email OTP Field */}
              <Grid container alignItems="center" sx={{ marginBottom: "15px" }}>
                <Grid item xs>
                  <TextField
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon />
                        </InputAdornment>
                      ),
                      endAdornment: verificationStatus && (
                        <InputAdornment position="end">
                          {verificationStatus === "success" ? (
                            <CheckCircleIcon
                              sx={{ color: "green" }}
                            />
                          ) : (
                            <CancelIcon sx={{ color: "red" }} />
                          )}
                        </InputAdornment>
                      ),
                    }}
                    size="small"
                    sx={{ backgroundColor: "#F4F4F4" }}
                    fullWidth
                    label="Email OTP"
                    placeholder="Enter your Email OTP"
                    name="companyEmail"
                    variant="outlined"
                    value={values.companyEmail}
                    onChange={handleChange}
                    error={
                      touched.companyEmail && Boolean(errors.companyEmail)
                    }
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
                  marginBottom: "1rem",
                  backgroundColor: "#0057FF",
                  "&:hover": {
                    backgroundColor: "#0046CC",
                  },
                }}
              >
                Verify Email
              </Button>

              {/* Phone OTP Field - kept but not functional */}
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
                    placeholder="Enter Mobile OTP"
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
                Verify Phone (Coming Soon)
              </Button>
            </Box>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default Verification;
