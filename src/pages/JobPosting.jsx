import React from 'react';
import { Button, TextField, Grid, MenuItem, Select, InputLabel, FormControl } from '@mui/material';
import '@fontsource/dm-sans'; 
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

// Validation Schema with Yup
const validationSchema = Yup.object({
  jobTitle: Yup.string().required('Job Title is required'),
  jobDescription: Yup.string().required('Job Description is required'),
  experienceLevel: Yup.string().required('Experience Level is required'),
  candidateEmail: Yup.string().email('Invalid email format').required('Candidate email is required'),
  endDate: Yup.date().nullable().required('End date is required'),
});

const JobForm = () => {
  return (
    <Formik
      initialValues={{
        jobTitle: '',
        jobDescription: '',
        experienceLevel: '',
        candidateEmail: '',
        endDate: null,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        console.log('Form Values:', values);
        // Handle form submission
      }}
    >
      {({ values, errors, touched, handleChange, setFieldValue }) => (
        <Form>
          <Grid container spacing={3} style={{ maxWidth: 800, margin: '0 auto',marginLeft:"4rem",marginTop:"2rem" }}>
            
            {/* Job Title */}
            <Grid item xs={12} sx={{display:"flex"}}>
                <label style={{marginLeft:"5.6rem",width:"8.9rem",fontFamily: "'DM Sans', sans-serif",fontSize:"17px",fontWeight:600,marginTop:"0.5rem",marginRight:"1rem"}}>Job Title</label>
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

            {/* Job Description */}
            <Grid item xs={12} sx={{display:'flex'}}>
            <label style={{marginLeft:"2rem",width:"13.8rem",fontFamily: "'DM Sans', sans-serif",fontSize:"17px",fontWeight:600,marginTop:"0.5rem",marginRight:"1rem"}}>Job Description</label>
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

            {/* Experience Level */}
            <Grid item xs={12} sx={{display:'flex'}}>
            <label style={{marginLeft:"2rem",width:"13.8rem",fontFamily: "'DM Sans', sans-serif",fontSize:"17px",fontWeight:600,marginTop:"0.5rem",marginRight:"1rem"}}>Experience Level</label>
              <FormControl  size='small' fullWidth error={touched.experienceLevel && Boolean(errors.experienceLevel)}>
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

            {/* Add Candidate */}
            <Grid item xs={12} sx={{display:'flex'}}>
            <label style={{marginLeft:"2.9rem",width:"12.6rem",fontFamily: "'DM Sans', sans-serif",fontSize:"17px",fontWeight:600,marginTop:"0.5rem",marginRight:"1rem"}}>Add Candidate</label>
              <TextField
              size='small'
                fullWidth
                label="Add Candidate"
                name="candidateEmail"
                variant="outlined"
                placeholder="xyz@gmail.com"
                value={values.candidateEmail}
                onChange={handleChange}
                error={touched.candidateEmail && Boolean(errors.candidateEmail)}
                helperText={touched.candidateEmail && errors.candidateEmail}
              />
            </Grid>

            {/* End Date */}
            <Grid item xs={12} sx={{display:'flex',marginTop:"-0.4rem"}}>
            <label style={{marginLeft:"5.6rem",width:"10rem",fontFamily: "'DM Sans', sans-serif",fontSize:"17px",fontWeight:600,marginTop:"1rem",marginRight:"1rem"}}>End Date</label>
              
               <LocalizationProvider dateAdapter={AdapterDayjs} >
      <DemoContainer    components={['DatePicker']}>
        <DatePicker
                sx={{width:"55rem"}}
                formatDensity='spacious'
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

            {/* Send Button */}
            <Grid item xs={12} style={{ textAlign: 'right' }}>
              <Button type="submit" variant="contained" color="primary" style={{ width: '100px' }}>
                Send
              </Button>
            </Grid>
          </Grid>
        </Form>
      )}
    </Formik>
  );
};

export default JobForm;
