import React from 'react'
import { useState} from 'react';
import Image from "next/image";
import photo from '../public/images/cleaninglogo.jpg'
import styles from '/styles/register.module.css'
import {Button, Stack, TextField,Typography} from '@mui/material';
import UploadFileOutlinedIcon from '@mui/icons-material/UploadFileOutlined';
//import { Controller, useForm } from "react-hook-form";



const register = () => {

  const [user, setuser] = useState({name:'',rno:'',dustbinno:'',location:'',details:'',upload:''});
  const handleChange1 = (e) => {
    setuser({...user,[e.target.name]:e.target.value});
  };
  
  const handleSubmit = (e) =>{
     e.preventDefault();
     if(user.name==='' || user.rno==='' || user.dustbinno==='' || user.location==='' || user.upload===''){
      alert ("fill the required fields")
     }
     else
     {console.log(user)};
  }; 

  const [pict , setpic] = useState(styles.pic1)
  const[show , setshow] =  useState(styles.show)
  const [file, setFile] = useState();
  function handleChange(e) {
      //console.log(e.target.files);
      const image=URL.createObjectURL(e.target.files[0])
      user.upload=image;
      setFile(image);
      setshow(styles.show1);
      setpic(styles.pict);
      }

      /*const { handleSubmit, control } = useForm();
      const onSubmit = (data) => console.log(data);*/

  return (
    <div className={styles.main}>
     <div className={styles.form}>
     <Typography className={styles.heading} variant='h5' mb={2}>Register a New Complain</Typography>
     
     
     <form > 
     
        <Stack spacing={2}>
        <TextField required name="name" label="Name" variant="outlined" onChange={handleChange1} />
        <TextField required name="rno" label="Registration Number" variant="outlined" onChange={handleChange1} />
        <Stack direction="row" spacing={2}>
        <TextField required name="dustbinno" label="Dustbin Number" variant="outlined" onChange={handleChange1}/>
        <TextField required name="location" label="Location" variant="outlined" type="search" onChange={handleChange1} />
        </Stack>
    
         <TextField
           name="details"
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          placeholder="Enter some details..."
          onChange={handleChange1}
          />
        
        

        <div  className={styles.imageupload} >
        <input required className={styles.input} type='file' id='file' name='upload' onChange={handleChange} />
        <label className={show}
        for='file'>Upload an image{<UploadFileOutlinedIcon/>} *</label>
        
        <img className={pict} src={file} />
         </div>

       
        <Button style={{borderRadius:"10px"}}variant="contained" onClick={handleSubmit}>Submit</Button>
       

        </Stack>
        </form>
        
    </div>
      
      <div className={styles.img}>
      <Image
      src={photo}
      alt=""
      width={500}
      height={500}
      />
      </div>
    
    </div>
  )
}

export default register