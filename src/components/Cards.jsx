import { Paper, Grid } from "@mui/material";

function Cards({ imageUrl }) {
	return (
		<Grid item xs={3}>
			<Paper elevation={3}>
				<img className='img' src={imageUrl} alt='peluqueras' />
			</Paper>
		</Grid>
	);
}

export default Cards;
