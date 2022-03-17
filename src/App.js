import React from 'react';
import './App.css';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText'; 

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'white',
  padding: theme.spacing(1),
  textAlign: 'center',
  
  color: "black"
}));

export default function BasicGrid() {
    return (
      <div>
      
      <Box sx={{ flexGrow: 1 , p:10}}  >
        <Grid container spacing={3} justifyContent="center"  alignItems="center" direction="row" style={{minHeight:"100vh"}}>
          <Grid item xs={12} spacing={3}  md={6} lg={4} >
          <Item style={{borderRadius:20}}>
            <Typography style={{opacity:0.5,fontWeight:700}}>Free</Typography>
            <Typography style={{display:'inline',fontWeight:700}}><h1>$0
            <Typography style={{display:'inline',fontSize:"small"}}>/month</Typography></h1> 
            </Typography>
            <Divider/>
            <List style={{listStyle:"none" ,
            textAlign: 'left'}}>
              <ListItem className="list" >
              <ListItemIcon>
                  <CheckIcon style={{fontSize:"x-large"}}/></ListItemIcon>
    <ListItemText>Single User</ListItemText> </ListItem>
                  
                  <ListItem >
              <ListItemIcon>
                  <CheckIcon style={{fontSize:"x-large"}}/></ListItemIcon>
                  <ListItemText>5GB Storage</ListItemText></ListItem>
                
                <ListItem >
              <ListItemIcon>
                  <CheckIcon style={{fontSize:"x-large"}}/></ListItemIcon>
                  <ListItemText>Unlimited Public Projects</ListItemText></ListItem>
               
                <ListItem >
              <ListItemIcon>
                  <CheckIcon style={{fontSize:"x-large"}}/></ListItemIcon>
                  <ListItemText>Community Access</ListItemText></ListItem>
  
              <ListItem style={{fontWeight:100,opacity:0.5}}><ListItemIcon><ClearIcon style={{fontSize:"x-large"}}/></ListItemIcon><ListItemText>Unlimited Private Projects</ListItemText></ListItem>
              <ListItem style={{fontWeight:100,opacity:0.5}}><ListItemIcon><ClearIcon style={{fontSize:"x-large"}}/></ListItemIcon><ListItemText>Dedicated Phone Support</ListItemText></ListItem>
              <ListItem style={{fontWeight:100,opacity:0.5}}><ListItemIcon><ClearIcon style={{fontSize:"x-large"}}/></ListItemIcon><ListItemText>Free SubDomain</ListItemText></ListItem>
              <ListItem style={{fontWeight:100,opacity:0.5}}><ListItemIcon><ClearIcon style={{fontSize:"x-large"}}/></ListItemIcon><ListItemText>Monthly Status Report</ListItemText></ListItem>
               </List>

               <Button  fullWidth={true} style={{borderRadius:50,fontSize:"medium",fontWeight:"bold",p:15,mt:10,mb:10}} variant="contained" size="small">Button</Button>
            </Item>

            </Grid>
        <Grid item spacing={3} xs={12}  md={6} lg={4} style={{minHeight: 250,
                  width: 70}}>
         <Item style={{borderRadius:20}}>
          <Typography style={{opacity:0.5,fontWeight:700}} >Plus</Typography>
          <Typography style={{display:'inline',fontWeight:700}}><h1>$9 
          <Typography style={{display:'inline',fontSize:"small"}}>/month</Typography></h1> 
          </Typography>
          <Divider/>
          <List style={{listStyle:"none" ,
          textAlign: 'left'}}>
            <ListItem >
            <ListItemIcon>
                <CheckIcon style={{fontSize:"x-large"}}/></ListItemIcon>
                <ListItemText><b>5 Users</b></ListItemText></ListItem>
                
                <ListItem >
            <ListItemIcon>
                <CheckIcon style={{fontSize:"x-large"}}/></ListItemIcon>
                <ListItemText>50GB Storage</ListItemText></ListItem>
              
              <ListItem >
            <ListItemIcon>
                <CheckIcon style={{fontSize:"x-large"}}/></ListItemIcon>
                <ListItemText>Unlimited Public Support</ListItemText></ListItem>
             
              <ListItem >
            <ListItemIcon>
                <CheckIcon style={{fontSize:"x-large"}}/></ListItemIcon>
                <ListItemText>Community Access</ListItemText></ListItem>
                
            <ListItem><ListItemIcon><CheckIcon style={{fontSize:"x-large"}}/></ListItemIcon><ListItemText>Unlimited Private Support</ListItemText></ListItem>
            <ListItem><ListItemIcon><CheckIcon style={{fontSize:"x-large"}}/></ListItemIcon><ListItemText>Dedicated Phone Support</ListItemText></ListItem>
            <ListItem><ListItemIcon><CheckIcon style={{fontSize:"x-large"}}/></ListItemIcon><ListItemText>Free SubDomain</ListItemText></ListItem>
            <ListItem style={{fontWeight:100,opacity:0.5}}><ListItemIcon><ClearIcon style={{fontSize:"x-large"}}/></ListItemIcon><ListItemText>Monthly Status Report</ListItemText></ListItem>
             </List>
             <Button  fullWidth={true} style={{borderRadius:50,fontSize:"medium",fontWeight:"bold",p:15,mt:10,mb:10}} variant="contained" size="small">Button</Button>
             
             </Item>
        </Grid>
        <Grid item spacing={3} xs={12}  md={6} lg={4} style={{minHeight: 250,
                  width: 70}} justify={"center"} >
          <Item style={{borderRadius:20}}>
          <Typography style={{opacity:0.5,fontWeight:700}}>Pro</Typography>
          <Typography style={{display:'inline',fontWeight:700}}><h1>$49 
          <Typography style={{display:'inline',fontSize:"small"}}>/month</Typography></h1> 
          </Typography>
          <Divider/>
          <List style={{listStyle:"none" ,
          textAlign: 'left'}}>
            <ListItem >
            <ListItemIcon>
                <CheckIcon style={{fontSize:"x-large"}}/></ListItemIcon>
                <ListItemText><b>Unlimited Users</b></ListItemText></ListItem>
                
                <ListItem >
            <ListItemIcon>
                <CheckIcon style={{fontSize:"x-large"}}/></ListItemIcon>
                <ListItemText>150GB Storage</ListItemText></ListItem>
              
              <ListItem >
            <ListItemIcon>
                <CheckIcon style={{fontSize:"x-large"}}/></ListItemIcon>
                <ListItemText>Unlimited Public Support</ListItemText></ListItem>
             
              <ListItem >
            <ListItemIcon>
                <CheckIcon style={{fontSize:"x-large"}}/></ListItemIcon>
                <ListItemText>Community Access</ListItemText></ListItem>
                
            <ListItem><ListItemIcon><CheckIcon style={{fontSize:"x-large"}}/></ListItemIcon><ListItemText>Unlimited Private Support</ListItemText></ListItem>
            <ListItem><ListItemIcon><CheckIcon style={{fontSize:"x-large"}}/></ListItemIcon><ListItemText>Dedicated Phone Support</ListItemText></ListItem>
            <ListItem><ListItemIcon><CheckIcon style={{fontSize:"x-large"}}/></ListItemIcon><ListItemText><b>Unlimited</b> Free Subdomains</ListItemText></ListItem>
            <ListItem><ListItemIcon><CheckIcon style={{fontSize:"x-large"}}/></ListItemIcon><ListItemText>Monthly Status Report</ListItemText></ListItem>
             </List>
             <Button  fullWidth={true} style={{borderRadius:50,fontSize:"medium",fontWeight:"bold",p:15,mt:10,mb:10}} variant="contained" size="small">Button</Button>
             
             </Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}