import { Box, Dialog, Typography } from "@mui/material";
import { IconBrandInstagram, IconBrandWhatsapp, IconBrandYoutube, IconMail } from "@tabler/icons-react";
import React, { useEffect, useState } from "react";
import CustomDialog from "./CustomDialog.jsx";

const Profile = () => {
    const [open, setOpen] = useState(false)
    const [data, setData] = useState(null)

    useEffect(() => {
        // set body color to #f1f1f1de
        document.body.style.backgroundColor = "#f1f1f1de"
        return () => {
            // set body color to #fff
            document.body.style.backgroundColor = "#fff"
        }
    }, [])

    function handleClose() {
        setOpen(false)
    }

    const inline = {
        display: "flex",
        alignItems: "center",
    }


    useEffect(() => {
        const data = localStorage.getItem("data")
        const parsedData = JSON.parse(data)
        setData(parsedData)
        console.log(parsedData)
    }, [open])

    if (!data) return (
        <>
            <div
                className="card profile-info"
                onClick={() => {
                    setOpen(true)
                }}
            >
                <div className="btn">
                    <button className="add-btn">
                        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M26 10.0049C26.8835 10.0049 27.5997 10.7211 27.5997 11.6046L27.5997 24.7097L40.7048 24.7096C41.5883 24.7096 42.3045 25.4258 42.3045 26.3093C42.3045 27.1927 41.5883 27.9089 40.7048 27.9089L27.5998 27.909L27.5998 41.0139C27.5998 41.8974 26.8836 42.6136 26.0002 42.6136C25.1167 42.6136 24.4005 41.8974 24.4005 41.0139L24.4004 27.909L11.2953 27.9089C10.4119 27.9089 9.69567 27.1927 9.69568 26.3092C9.69568 25.4258 10.4119 24.7096 11.2953 24.7096L24.4004 24.7097L24.4003 11.6046C24.4003 10.7211 25.1165 10.0049 26 10.0049Z"
                                fill="#999CA0"
                            />
                        </svg>
                    </button>
                    <p>Add Profile</p>
                </div>
            </div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <CustomDialog handleClose={handleClose} />
            </Dialog>
        </>
    )
    return (
        <>
            <Box sx={{
                backgroundColor: "#fff",
                p: 1,
                pl: 4,
                pr: 4,
                borderRadius: 8
            }}>
                <h4>Profile</h4>
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "1rem",
                    }}
                >
                    <div style={inline}>
                        <IconBrandWhatsapp size={24} />
                        <Typography
                            variant="body2"
                            component="span"
                            sx={{
                                // underline
                                textDecoration: "underline",
                            }}
                        >
                            {data.phone}
                        </Typography>
                    </div>
                    <div style={inline}>
                        <IconBrandInstagram size={24} />
                        <Typography
                            variant="body2"
                            component="span"
                            sx={{
                                // underline
                                textDecoration: "underline",
                            }}
                        >
                            {data.instagram}
                        </Typography>
                    </div>
                    <div style={inline}>
                        <IconMail size={24} />
                        <Typography
                            variant="body2"
                            component="span"
                            sx={{
                                // underline
                                textDecoration: "underline",
                            }}
                        >
                            {data.email}
                        </Typography>
                    </div>
                    <div style={inline}>
                        <IconBrandYoutube size={24} />
                        <Typography
                            variant="body2"
                            component="span"
                            sx={{
                                // underline
                                textDecoration: "underline",
                            }}
                        >
                            {data.youtube}
                        </Typography>
                    </div>
                </Box>
            </Box>
        </>
    )
}

export default Profile