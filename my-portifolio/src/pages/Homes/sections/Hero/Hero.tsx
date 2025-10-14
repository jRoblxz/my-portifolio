import { styled } from "@mui/material/styles"
import Avatar from "../../../../assets/Images/Avatar.jpeg"
import { Button, Container, Grid, Typography } from "@mui/material"
import DownloadIcon from '@mui/icons-material/Download';
import PhoneIcon from '@mui/icons-material/Phone';

const  Hero = () => {
    const StyledHero = styled("div")(()=>({

        backgroundColor: "black",
        height: "100vh"
    }))

    const StyledImg = styled("img")(()=>({

        width: "100%",
        borderRadius: "50%"
    }))



 
    return (
        <>
            <StyledHero>
                <Container maxWidth="lg">
                    
                    <Grid container spacing={2}>
                        <Grid size={{ xs: 12, md: 4 }}>
                            <StyledImg src={Avatar}/>
                        </Grid>
                        <Grid size={{ xs: 12, md: 8 }}>
                            <Typography color="primary" variant="h1" textAlign="center">João Roblez</Typography>
                            <Typography color="primary" variant="h2" textAlign="center">I'm Software Developer</Typography>
                            <Grid container display="flex" justifyContent="center">
                                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                     <Button>
                                        <DownloadIcon />
                                        Download CV
                                    </Button>
                                </Grid>
                                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                                    <Button>
                                        <PhoneIcon />
                                        Contact me
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    
                </Container>
            </StyledHero>
        </>
  )
}

export default Hero
