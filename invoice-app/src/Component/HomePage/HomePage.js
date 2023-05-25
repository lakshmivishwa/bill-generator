import styles from "./style";
import { Grid, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {

    const navigate = useNavigate()
    const clickHandler = () => {
        navigate("/bills/create")
    }

    return (

        <Grid container spacing={0} mt={10} mb={3}>
            <Grid item xs={12} md={6} style={styles.GridTitle}>
                <div style={styles.TitleContainer}>
                    <Typography variant="h3" color="secondary"> Create Your Invoice in Less than 2 Minutes</Typography>
                    <Typography variant="h4" color="secondary.light" > Built to save time and get you paid faster.</Typography>
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={clickHandler}
                    >
                        Create a new Bill here ........
                    </Button>
                </div>
            </Grid>
            <Grid item xs={12} md={6}  >
                <img src="http://localhost:3000/assets/images/invoice-presentation.png" alt="" height="500px" style={styles.Image}>
                </img>
            </Grid>
        </Grid>

    )
}
export default Homepage;
