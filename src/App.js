import "./App.css";

import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

// import { inputFormElements } from "./element/formElement";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from 'yup'
// import validationSchema from './schema/yupSchema'
import { useEffect, useState } from "react";
import axios from 'axios'

function App() {

  const [inputFormElements, setData] = useState([])

  useEffect(()=> {
    axios.get('http://localhost:3006/inputFormElements')
        .then(res => {
            console.log(res);
            setData(res.data)
        })
        .catch(err => {
            console.log(err);
        })
  },[])


const validationGenerator = () => {
    const validateObj = {}
    inputFormElements.map(field =>{
        field.required && field.isdisplable && Object.assign(validateObj, {
            [field.name]: Yup.string().required('Required')
        })
    })
    return validateObj
}
const validationSchema = Yup.object().shape({
  ...validationGenerator()
})

const initialValues = () => {
  const initialValue = {}
  inputFormElements.map(elemnt => Object.assign(initialValue,{
    [elemnt.name]:''
  }))
  return initialValue
}

  // const initialValues = {
  //   firstName:'',
  //   lastName:'',
  //   phone:'',
  //   banktName:'',
  //   ifsc:'',
  //   accountNumber:''
  // }

  // const validationSchema=Yup.object().shape({
  //   firstName: Yup.string().min(3,'too short').required("First name is required"),
  //   lastName: Yup.string().min(3,'too short').required("Last name is required"),
  //   phone: Yup.number().typeError('Enter valid phone Number').min(6000000000).max(9999999999).required('Phone number required'),
  //   banktName: Yup.string().min(3,'too short').required("Bank name is required"),
  //   ifsc: Yup.string().min(10).max(15).required("IFSC code required"),
  //   accountNumber: Yup.number().typeError('Enter valid a/c Number').min(10000000000000).max(99999999999999).required('14 digit a/c number required'),

  // })


  const onSubmit =(values,props) => {
   console.log(values);
  //  console.log("my-props",props);
   setTimeout(()=>{
    props.resetForm()
    props.setSubmitting(false)
   },1000)
  }

  return (
    <div className="App">
      {/* <Typography gutterBottom variant="h4" align="center">
        Contact Form
      </Typography> */}
      <Card style={{ maxWidth: 450, margin: "0 auto", padding: "25px 10px" }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Contact Us
          </Typography>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {(props) => (
              <Form>
                <Typography variant="body2" align="left" gutterBottom>
                  Personal :
                </Typography>

                <Grid container spacing={1}>
                  {inputFormElements.map((input,index) => {
                    return (input.type==='personal' && input.isdisplable) ? 
                    (
                    <Grid key={index} xs={input.xs} sm={input.sm} item>
                      <Field as={TextField} helperText={<ErrorMessage name={input.name}/>} {...input} />
                    </Grid>
                  ) : null}
                  )}
                </Grid>

                <Typography variant="body2" align="left" gutterBottom>
                  Banking :
                </Typography>
                <Grid container spacing={1}>
                  {inputFormElements.map((input,index) => {
                    return (input.type==='banking' && input.isdisplable) ?
                    (
                    <Grid key={index} xs={input.xs} sm={input.sm} item>
                      <Field as={TextField} helperText={<ErrorMessage name={input.name}/>} {...input} />
                    </Grid>
                  ): null}
                  )}

                  <Grid xs={12} item>
                    <Button
                      type="submit"
                      varient="container"
                      color="primary"
                      disabled={props.isSubmitting}
                      fullWidth
                    >
                      {props.isSubmitting? "Loading": "Submit"}
                    </Button>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
