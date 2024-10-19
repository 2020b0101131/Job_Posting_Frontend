import React, { useState } from 'react';
import { Button, TextField, Grid, MenuItem, Select, InputLabel, FormControl, Chip, Box, Autocomplete } from '@mui/material';
import '@fontsource/dm-sans';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { postJob, sendEmail } from '../services/service'; // Import the API
import CircularProgress from '@mui/material/CircularProgress';
const validationSchema = Yup.object({
  jobTitle: Yup.string().required('Job Title is required'),
  jobDescription: Yup.string().required('Job Description is required'),
  experienceLevel: Yup.string().required('Experience Level is required'),
  candidateEmail: Yup.array().min(1, 'At least one candidate email is required'),
  endDate: Yup.date().nullable().required('End date is required'),
});

const JobForm = () => {
  const [candidateEmailInput, setCandidateEmailInput] = useState('');
  const [flag,setFlag]=useState(false); 

  return (
    <Formik
      initialValues={{
        jobTitle: '',
        jobDescription: '',
        experienceLevel: '',
        candidateEmail: [], 
        endDate: null,
      }}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        setFlag(true);
        try {
          const payload = {
            title: values.jobTitle,
            description: values.jobDescription,
            experienceLevel: values.experienceLevel,
            candidates: values.candidateEmail.map(email => ({ email })), 
            endDate: values.endDate ? values.endDate.toISOString().split('T')[0] : null
          };
          const response = await postJob(payload); 
          console.log('Response:', response);
          const { _id } = response;
          if (_id !== null) {
            try {
              const emailResponse = await sendEmail(_id);
              if (emailResponse.message === "Emails sent successfully") {
                alert('Job successfully posted!');
                setFlag(false);
                resetForm();
              }
            } catch (error) {
              console.error('Error:', error);
              alert('Failed to send notification. Please try again.');
            }
          }
        } catch (error) {
          console.error('Error:', error);
          alert('Failed to post job. Please try again.');
        }
      }}
    >
      {({ values, errors, touched, handleChange, setFieldValue, handleSubmit }) => (
        <Form onSubmit={handleSubmit}>
          <Grid container spacing={3} style={{ maxWidth: 800, margin: '0 auto', marginLeft: '4rem', marginTop: '2rem' }}>

           
            <Grid item xs={12} sx={{ display: 'flex' }}>
              <label style={{ marginLeft: '5.6rem', width: '8.9rem', fontFamily: "'DM Sans', sans-serif", fontSize: '17px', fontWeight: 600, marginTop: '0.5rem', marginRight: '1rem' }}>Job Title</label>
              <TextField
                size='small'
                fullWidth
                label="Enter Job Title"
                name="jobTitle"
                variant="outlined"
                value={values.jobTitle}
                onChange={handleChange}
                error={touched.jobTitle && Boolean(errors.jobTitle)}
                helperText={touched.jobTitle && errors.jobTitle}
                placeholder="Enter Job Title"
              />
            </Grid>

         
            <Grid item xs={12} sx={{ display: 'flex' }}>
              <label style={{ marginLeft: '2rem', width: '13.8rem', fontFamily: "'DM Sans', sans-serif", fontSize: '17px', fontWeight: 600, marginTop: '0.5rem', marginRight: '1rem' }}>Job Description</label>
              <TextField
                fullWidth
                label="Enter Job Description"
                name="jobDescription"
                variant="outlined"
                multiline
                rows={4}
                value={values.jobDescription}
                onChange={handleChange}
                error={touched.jobDescription && Boolean(errors.jobDescription)}
                helperText={touched.jobDescription && errors.jobDescription}
                placeholder="Enter Job Description"
              />
            </Grid>

          
            <Grid item xs={12} sx={{ display: 'flex' }}>
              <label style={{ marginLeft: '2rem', width: '13.8rem', fontFamily: "'DM Sans', sans-serif", fontSize: '17px', fontWeight: 600, marginTop: '0.5rem', marginRight: '1rem' }}>Experience Level</label>
              <FormControl size='small' fullWidth error={touched.experienceLevel && Boolean(errors.experienceLevel)}>
                <InputLabel>Select Experience Level</InputLabel>
                <Select
                  name="experienceLevel"
                  value={values.experienceLevel}
                  onChange={handleChange}
                  label="Experience Level"
                >
                  <MenuItem value={1}>Junior</MenuItem>
                  <MenuItem value={2}>Mid-Level</MenuItem>
                  <MenuItem value={3}>Senior</MenuItem>
                </Select>
                {touched.experienceLevel && errors.experienceLevel && (
                  <div style={{ color: 'red', fontSize: '0.75rem' }}>{errors.experienceLevel}</div>
                )}
              </FormControl>
            </Grid>

          
            <Grid item xs={12} sx={{ display: 'flex' }}>
              <label style={{ marginLeft: '2.9rem', width: '12.6rem', fontFamily: "'DM Sans', sans-serif", fontSize: '17px', fontWeight: 600, marginTop: '0.5rem', marginRight: '1rem' }}>Add Candidate</label>
              <Autocomplete
                sx={{minWidth:"35.4rem"}}
                multiple
                freeSolo
                options={[]}
                value={values.candidateEmail}
                onChange={(event, newValue) => setFieldValue('candidateEmail', newValue)}
                renderTags={(value, getTagProps) =>
                  value.map((option, index) => (
                    <Chip
                      key={index}
                      label={option}
                      {...getTagProps({ index })}
                      onDelete={() => setFieldValue('candidateEmail', values.candidateEmail.filter((email) => email !== option))}
                    />
                  ))
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    variant="outlined"
                    size="small"
                    placeholder="Add Candidate Emails"
                    error={touched.candidateEmail && Boolean(errors.candidateEmail)}
                    helperText={touched.candidateEmail && errors.candidateEmail}
                  />
                )}
              />
            </Grid>

         
            <Grid item xs={12} sx={{ display: 'flex', marginTop: '-0.4rem' }}>
              <label style={{ marginLeft: '5.6rem', width: '10rem', fontFamily: "'DM Sans', sans-serif", fontSize: '17px', fontWeight: 600, marginTop: '1rem', marginRight: '1rem' }}>End Date</label>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DatePicker']}>
                  <DatePicker
                    sx={{ width: '55rem' }}
                    label="End Date"
                    value={values.endDate}
                    onChange={(newValue) => setFieldValue('endDate', newValue)}
                    renderInput={(params) => (
                      <TextField
                        fullWidth
                        {...params}
                        size="small"
                        error={touched.endDate && Boolean(errors.endDate)}
                        helperText={touched.endDate && errors.endDate}
                      />
                    )}
                    slotProps={{ textField: { size: 'small' } }}
                  />
                </DemoContainer>
              </LocalizationProvider>
            </Grid>

          
            <Grid item xs={12} style={{ textAlign: 'right',display:'flex',justifyContent:"flex-end" }}>
            {flag===true?<CircularProgress size={30} sx={{mr:2}}/>:null}
              <Button type="submit" variant="contained" color="primary" style={{ width: '100px' }} >
              
                {flag===true?"Sending...":"Send"}
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default JobForm;
