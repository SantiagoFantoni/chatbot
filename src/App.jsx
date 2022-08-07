import NavBar from "./components/navbar/NavBar";
import Cards from "./components/Cards";
import { Box, Container, Grid, Typography } from "@mui/material";
import "./App.css";
import Footer from "./components/footer/Footer";
import Main from "./components/Main";

function App() {
	return (
		<div className='App'>
			<NavBar />
			<Container>
				<Box
					marginY={2}
					sx={{
						textAlign: "center",
					}}>
					<Typography variant='h1' component='h1'>
						Botoria
					</Typography>
				</Box>
				<Grid container spacing={2}>
					<Cards imageUrl={"/images/peluqueria1.jpg"} />
					<Cards imageUrl={"/images/peluqueria2.jpg"} />
					<Cards imageUrl={"/images/peluqueria3.jpg"} />
					<Cards imageUrl={"/images/peluqueria4.jpg"} />
				</Grid>
				<Main />
			</Container>
			<Footer />
		</div>
	);
}

export default App;
