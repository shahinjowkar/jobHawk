import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Box, TextField, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { grey, blue } from '@mui/material/colors';
import { useState } from 'react';
import dayjs from 'dayjs'; 

export function DialogWrapper({ isOpen, onClose }: any) {
    const [companyName, SetCompanyName] = useState("");
    const [position, SetPosition] = useState("");
    const [startDate, setStartDate] = useState(""); 
    const [applicationDate,SetApplicationDate] = useState(dayjs()); 

    const handleSubmit = (e: any) => {
        
    };

    return (

            <Dialog
                disableAutoFocus
                disableEnforceFocus
                open={isOpen}
                sx={{
                    '& .MuiPaper-root': {
                        backgroundColor: grey[900],
                        color: grey[50],
                        borderRadius: '10px',
                        padding: '20px',
                    },
                }}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle
                    id="alert-dialog-title"
                    sx={{
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        color: grey[100],
                        paddingBottom: '16px',
                    }}
                >
                    Fill up Job Information
                </DialogTitle>

                <DialogContent>
                    <DialogContentText
                        id="alert-dialog-description"
                        sx={{
                            color: grey[300],
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '16px',
                            padding: '8px',
                        }}
                    >
                        <TextField
                            id="companyName"
                            name="companyName"
                            label="Company Name"
                            variant="outlined"
                            value={companyName}
                            onChange={(e) => SetCompanyName(e.target.value)}
                            fullWidth
                            InputLabelProps={{
                                style: { color: grey[300] },
                            }}
                            sx={{
                                input: { color: grey[100] },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: grey[700] },
                                },
                            }}
                        />

                        <TextField
                            id="positionName"
                            name="positionName"
                            label="Position Name"
                            variant="outlined"
                            value={position}
                            onChange={(e) => SetPosition(e.target.value)}
                            fullWidth
                            InputLabelProps={{
                                style: { color: grey[300] },
                            }}
                            sx={{
                                input: { color: grey[100] },
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': { borderColor: grey[700] },
                                },
                            }}
                        />


                        <Box sx={{ display: 'flex', gap: '16px' }}>
                             <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <DatePicker
                                    name="applicationDate"
                                    label="Application Date"
                                    value = {applicationDate}
                                    onChange={(newValue) => {
                                        if(null){
                                            applicationDate
                                        }
                                        else{
                                            SetApplicationDate(dayjs(newValue))
                                        }
                                    }}

                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            input: { color: grey[100] },
                                            '& fieldset': { borderColor: grey[700] },
                                        },
                                        '& .MuiInputLabel-root': { color: grey[300], fontSize: '0.8em' },
                                        '& .MuiSvgIcon-root': { color: grey[300] },
                                        '& .MuiPickersDay-root': {
                                            color: grey[100],
                                            '&.Mui-selected': { backgroundColor: blue[500], color: grey[900] },
                                        },
                                        '& .MuiPaper-root': { backgroundColor: grey[800], color: grey[100] },
                                    }}
                                />
                            </LocalizationProvider>
                            <TextField
                                id="startDate"
                                name="startDate"
                                label="Start Date"
                                variant="outlined"
                                value={startDate}
                                onChange={(e) => setStartDate(e.target.value)}
                                fullWidth
                                InputLabelProps={{ style: { color: grey[300] } }}
                                sx={{
                                    input: { color: grey[100] },
                                    '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: grey[700] } },
                                }}
                            />
                        </Box>
                    </DialogContentText>
                </DialogContent>

                <DialogActions>
                    <Button
                        onClick={handleSubmit}
                        sx={{
                            color: blue[200],
                            '&:hover': { backgroundColor: blue[400], color: grey[900] },
                        }}
                    >
                        Add
                    </Button>
                    <Button
                        onClick={onClose}
                        autoFocus
                        sx={{
                            color: blue[200],
                            '&:hover': { backgroundColor: blue[400], color: grey[900] },
                        }}
                    >
                        Close
                    </Button>
                </DialogActions>
            </Dialog>

    );
}
