# ReactJS Dynamic Form Validation using Formik and Yup


## How to run the project ?

### > `npm start`


---------------------------



<p align="center">
  <img src="https://github.com/rajesh-gole-softobiz/resources/blob/main/img/Screenshot%20(23).png" width="920" title="hover text">
</p>


### ✅Dynamic form according to this JSON file 👇
-----------------------------

```
export const inputFormElements=[
    {
        name: "firstName",
        type: "personal",
        placeholder: "Enter first name",
        label: "First Name",
        varient: "outlined",
        fullWidth: true,
        required: true,
        isdisplable: "true",
        xs: 12,
        sm: 6
    },
    {
        name: "lastName",
        type: "personal",
        placeholder: "Enter last name",
        label: "Last Name",
        varient: "outlined",
        fullWidth: true,
        required: true,
        isdisplable: "true",
        xs: 12,
        sm: 6
    },
    {
        name: "phone",
        type: "personal",
        placeholder: "Enter phone number",
        label: "Phone",
        varient: "outlined",
        fullWidth: true,
        required: true,
        isdisplable: "true",
        xs: 12,
        
    },

    {
        name: "banktName",
        type: "banking",
        placeholder: "Enter bank name",
        label: "Bank Name",
        varient: "outlined",
        fullWidth: true,
        required: true,
        isdisplable: "true",
        xs: 12,
        sm: 6
    },
    {
        name: "ifsc",
        type: "banking",
        placeholder: "Enter IFSC",
        label: "IFSC",
        varient: "outlined",
        fullWidth: true,
        required: true,
        isdisplable: "true",
        xs: 12,
        sm: 6
    },
    {
        name: "accountNumber",
        type: "banking",
        placeholder: "Enter Bank A/c number",
        label: "A/c Number",
        varient: "outlined",
        fullWidth: true,
        required: true,
        isdisplable: "true",
        xs: 12,
        
    }
] 
```
