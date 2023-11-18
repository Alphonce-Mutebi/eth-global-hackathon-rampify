import { Box, Button, Container, TextField } from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";

function OnRamp () {
    return (
    <Box sx={{ width: '100%' }}>
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
                <h3>Deposit</h3>

            <MuiPhoneNumber
                variant="outlined"
                fullWidth
                margin="normal"
                required
                defaultCountry={"ke"}
                onlyCountries={['ke','gh']}
                label="Phone"
                name="phone"
                autoFocus
                sx={{
                    svg: {
                    height: "20px",
                    },
                }}
                onChange={console.log} />
        <TextField
            required
            fullWidth
            label="Amount in Ksh"
            type="number"
            margin="normal"
            InputLabelProps={{
            shrink: true,
            }}
        />
       <div>
            <span>Quote Amount:  cUSD</span>
       </div> 

        <Button 
            variant="contained"
            fullWidth>
            Buy cUSD
        </Button>


            </Box>
        </Container>
    </Box>


    );


}

export default OnRamp;