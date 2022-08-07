import { Box, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import RoomIcon from "@mui/icons-material/Room";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

function Footer() {
	return (
		<Box
			sx={{
				position: "relative",
				bottom: 0,
				left: 0,
				backgroundColor: "black",
				width: "100%",
				height: "200px",
				color: "white",
				display: "flex",
				alignItems: "center",
			}}>
			<Grid container justifyContent={"center"}>
				<Grid xs={12} md={3}>
					<Box marginY={1}>
						<RoomIcon />
						18 de julio 1234,Yi
					</Box>
					<Box marginY={1}>
						<PhoneIcon />
						+598 44 44 44
					</Box>
					<Box marginY={1}>
						<EmailIcon />
						botoria@ejemplo.com
					</Box>
				</Grid>
				<Grid xs={12} md={3}>
					<Box marginY={2}>Sobre nosotros</Box>
					<Box marginY={2}>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet?
					</Box>
					<Box>
						<FacebookIcon />
						<InstagramIcon />
						<TwitterIcon />
					</Box>
				</Grid>
			</Grid>
		</Box>
	);
}

export default Footer;
