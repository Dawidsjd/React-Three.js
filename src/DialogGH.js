import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Avatar } from "@mui/material";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Bounce } from "react-reveal";
import { GitHub } from '@mui/icons-material';

const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

export default function DialogGH() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    
    <>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Bounce left cascade delay={1400}>
    <Avatar alt="DEVkowboj" src="/burek.png" className="profile_icon" onClick={handleClickOpen}/>
    </Bounce>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <GitHub className='gh_icon'/>
        <DialogTitle id="responsive-dialog-title" className='Avatar_container'>
          {<Avatar alt="DEVkowboj" src="/burek.png" />}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
          After approval, you will be transferred to the GitHub profile,<br></br> 
          do you agree to this?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} href='https://github.com/Dawidsjd'>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      </ThemeProvider>
    </>
  );
}