import {
	AppBar,
	Box,
	Toolbar,
	Typography,
	Button,
	IconButton,
} from "@mui/material";

import MenuIcon from "@mui/icons-material/Menu";
import "./navBar.css";

function NavBar() {
	return (
		<div>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position='sticky' color='secondary'>
					<Toolbar>
						<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
							Botoria Estetica Integral
						</Typography>
						<IconButton
							size='large'
							edge='start'
							color='inherit'
							aria-label='menu'
							sx={{ mr: 2 }}>
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</AppBar>
			</Box>
		</div>
	);
}

export default NavBar;
