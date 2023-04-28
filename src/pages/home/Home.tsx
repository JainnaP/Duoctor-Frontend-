import React, { useEffect } from "react";

//importação do Material UI
import { Grid, Typography, Button } from "@material-ui/core";
import {Box} from "@mui/material"
import { Height } from "@material-ui/icons";


//importação do CSS
import './Home.css';
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/TokensReducer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Home() {
    let navigate = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if (token == "") {
            toast.error('Você precisa estar logado', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            })
            navigate("/entrar")

        }
    }, [token])


    return (
        
        <>
            <Grid container  direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "white" }} >
                <Grid item alignItems="center" xs={6}>

                    <Box paddingX={20}>
                        <Typography variant="h3" gutterBottom color="textPrimary"
                            component="h3"
                            align="center"
                            style={{ color: "#63aff7", fontWeight: "bold" }}>Seja Bem Vindo(a)!</Typography>

                        <Typography variant="h4" gutterBottom color="textPrimary"
                            component="h3" align="center"
                            style={{ color: "white", fontWeight: "bold" }}></Typography>
                    </Box>

                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="src/assets/img/Duoctor.png" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>


        </>
    );
}

export default Home;