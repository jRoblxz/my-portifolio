import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"

const NavBar = () => {
    const StyeledToobar = styled(Toolbar)(()=>({
        display: "flex",
        justifyContent: "space-evenly"
    }))
    return (
        <>
            <AppBar position="absolute">
                <StyeledToobar>
                    <MenuItem>Abaout</MenuItem>
                    <MenuItem>Skills</MenuItem>
                    <MenuItem>Project</MenuItem>
                </StyeledToobar>
            </AppBar>
        </>
    );
};

export default NavBar;
