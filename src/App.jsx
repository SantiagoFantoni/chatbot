import NavBar from "./components/navbar/NavBar";
import Cards from "./components/Cards";
import { Box, Container, Grid, Typography } from "@mui/material";
import "./App.css";
import Footer from "./components/footer/Footer";

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
					<Cards
						imageUrl={
							"http://sorayaestetica.com/wp-content/uploads/2019/12/cortes-soraya-estetica.jpg"
						}
					/>
					<Cards
						imageUrl={
							"http://sorayaestetica.com/wp-content/uploads/2019/12/peinados-soraya.jpg"
						}
					/>
					<Cards
						imageUrl={
							"http://sorayaestetica.com/wp-content/uploads/2019/12/mechas-creativas-soraya-estetica.jpg"
						}
					/>
					<Cards
						imageUrl={
							"http://sorayaestetica.com/wp-content/uploads/2019/12/tratamientos-capilares-soraya-estetica.jpg"
						}
					/>
				</Grid>
			</Container>
			<Footer />
		</div>
	);
}

export default App;
