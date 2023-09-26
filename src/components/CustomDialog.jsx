import { Button, DialogActions, DialogContent, DialogTitle, FormLabel, Stack, TextField, Typography } from "@mui/material";
import { IconX } from "@tabler/icons-react";
import React, { useRef, useState } from "react";

const CustomDialog = ({ handleClose }) => {
    const [data, setData] = useState({})
    const [page, setPage] = useState(1)
    const name = useRef(null)
    const email = useRef(null)
    const phone = useRef(null)
    const instagram = useRef(null)
    const youtube = useRef(null)

    const lable = {
        fontWeight: "bold",
    }

    const input = {
        br: 4,
    }

    const tabs = {
        borderBottom: "4px solid",
        width: "calc(50% - 20px)",
        textAlign: "center",
    }

    const buttonSx = {
        padding: "8px 16px",
        borderRadius: 2,
        margin: 1,
    }

    return (
        <>
            <DialogTitle
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <Typography
                    variant="h5"
                    component="h5"
                    sx={{
                        fontWeight: "bold",
                    }}
                >
                    Add New Profile
                </Typography>
                <IconX onClick={handleClose} />
            </DialogTitle>
            <DialogContent>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        marginBottom: 16,
                    }}
                >
                    <div style={{ ...tabs, borderColor: page === 1 ? "#3f84f8" : "#c4c4c4" }} onClick={() => setPage(1)}>
                        <Typography variant="body" component="h6" sx={{ ...lable, fontSize: 20 }}>
                            Basic
                        </Typography>
                    </div>
                    <div style={{ ...tabs, borderColor: page === 2 ? "#3f84f8" : "#c4c4c4" }} onClick={() => setPage(2)}>
                        <Typography variant="body" component="h6" sx={{ ...lable, fontSize: 20 }}>
                            Social
                        </Typography>
                    </div>
                </div>
                {page === 1 ? (
                    <Stack gap={2} minWidth={340}>
                        <FormLabel sx={lable}>Enter Name</FormLabel>
                        <TextField key={1} fullWidth inputRef={name} variant="outlined" placeholder="Eg. John Doe" />
                        <FormLabel sx={lable}>Enter Email</FormLabel>
                        <TextField key={2} sx={input} inputRef={email} fullWidth variant="outlined" placeholder="Eg. johndoe@xyz.com" />
                        <FormLabel sx={lable}>Enter Phone</FormLabel>
                        <TextField key={3} sx={input} inputRef={phone} fullWidth variant="outlined" placeholder="Eg. 9876543210" />
                    </Stack>
                ) : (
                    <Stack gap={2} minWidth={340}>
                        <FormLabel sx={lable}>Instagram Link (Optional)</FormLabel>
                        <TextField key={4} sx={input} inputRef={instagram} fullWidth variant="outlined" placeholder="Eg. ...instagram.com/johndoe/" />
                        <FormLabel sx={lable}>Youtube Link (Optional)</FormLabel>
                        <TextField key={5} sx={input} inputRef={youtube} fullWidth variant="outlined" placeholder="Eg. ...youtube.com/johndoe/" />
                    </Stack>
                )}
            </DialogContent>
            <DialogActions>
                {page === 1 ? (
                    <Button
                        sx={buttonSx}
                        variant="contained"
                        onClick={() => {
                            console.log(name.current.value, email.current.value, phone.current.value)
                            if (!name.current.value || !email.current.value || !phone.current.value) return alert("Please fill all the fields")
                            // gather name, email, phone
                            setData({
                                ...data,
                                name: name.current.value,
                                email: email.current.value,
                                phone: phone.current.value,
                            })
                            setPage(2)
                        }}
                    >
                        Next
                    </Button>
                ) : (
                    <>
                        <Button sx={buttonSx} variant="outlined" onClick={() => setPage(1)}>
                            Back
                        </Button>
                        <Button
                            sx={buttonSx}
                            variant="contained"
                            onClick={() => {
                                if (!instagram.current.value || !youtube.current.value) return alert("Please fill all the fields")
                                // gather instagram, youtube
                                setData({
                                    ...data,
                                    instagram: instagram.current.value,
                                    youtube: youtube.current.value,
                                })
                                // save to local storage
                                localStorage.setItem(
                                    "data",
                                    JSON.stringify({
                                        ...data,
                                        instagram: instagram.current.value,
                                        youtube: youtube.current.value,
                                    })
                                )
                                // close dialog
                                handleClose()
                            }}
                        >
                            Done
                        </Button>
                    </>
                )}
            </DialogActions>
        </>
    )
}

export default CustomDialog;