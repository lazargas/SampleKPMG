import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextArea from "./TextArea";
import { Directions } from '@mui/icons-material';
import TextIncreaseIcon from '@mui/icons-material/TextIncrease';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius:"5px",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    gap: "1.5rem"
};

export default function DescriptionModal() {
    const [open,setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <button  onClick={handleOpen} > <TextIncreaseIcon /></button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Description
                    </Typography>
                    <TextArea />
                    <div className='flex gap-[1rem] justify-end mr-3' >
                    <Button
                        variant="contained"

                        onClick={handleClose}
                        sx={{
                            backgroundColor: "#D32F2F",
                            fontSize: "10px",
                            color: "white",
                            borderRadius: "5px",
                            background: "#F44336", // This is the muted shade of red
                            "&:hover": {
                                backgroundColor: "#D32F2F", // This is a darker shade of red for hover
                            },
                            maxWidth:"20px",
                           
                        }}
                    >
                        Close
                    </Button>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={()=>handleClose()}
                        sx={{
                            
                            fontSize: "10px",
                            color: "white",
                            borderRadius: "5px",
                            maxWidth:"20px",
                           
                        }}
                    >
                        Done
                    </Button>

                    </div>
                   
                    
                </Box>
            </Modal>
        </div>
    );
}