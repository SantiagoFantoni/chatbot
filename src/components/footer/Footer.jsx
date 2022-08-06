import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function Footer() {
	return (
		<footer>
			<Box>
				<Container maxWidth='lg'>
					<Grid container spacing={5}>
						<Grid item xs={12} sm={4}>
							<Box BorderBottom={1}>Help</Box>
							<Box>Contact</Box>
							<Box>About</Box>
						</Grid>
					</Grid>
				</Container>
			</Box>
		</footer>
	);
}

export default Footer;
