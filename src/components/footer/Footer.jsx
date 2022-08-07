import { Box, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
	return (
		<Box
			sx={{
				position: "fixed",
				bottom: 0,
				left: 0,
				backgroundColor: "black",
				width: "100%",
				color: "white",
				height: "200px",
				display: "flex",
				alignItems: "center",
			}}>
			<Grid container sx={{ textAlign: "center" }}>
				<Grid xs={12} md={4}>
					<Box sx={{ textAlign: "left" }}>
						<FacebookIcon />
						Facebook
					</Box>
					<Box>
						<InstagramIcon />
						Instagram
					</Box>
					<Box>
						<TwitterIcon />
						Twitter
					</Box>
				</Grid>
				<Grid xs={12} md={4}>
					<Box>Soporte</Box>
					<Box>FAQ</Box>
					<Box>Contacto</Box>
				</Grid>
				<Grid xs={12} md={4}>
					<Box>Legal</Box>
					<Box>Placeholder1</Box>
					<Box>Placeholder2</Box>
				</Grid>
			</Grid>
		</Box>
	);
}

export default Footer;
