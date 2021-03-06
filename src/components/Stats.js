import React from 'react'
import { connect } from 'react-redux'
import {
	Grid,
	Typography,
	Divider,
	CircularProgress,
	Backdrop,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CountUp from 'react-countup'

const Stats = (props) => {
	const classes = useStyles()
	const { Global } = props

	return (
		<Grid item container sm={10} className={classes.container}>
			{Global ? (
				<>
					<Grid item xs={12}>
						<Typography variant='h4' className={classes.title}>
							<strong>Global Stats</strong>
						</Typography>
					</Grid>
					<Grid item xs={12}>
						<Divider />
					</Grid>
					<Grid item container xs={12}>
						<Grid item xs={12} sm={4}>
							<Typography variant='h6' className={classes.stats}>
								Total Confirmed
							</Typography>
							<Typography variant='h4' className={classes.confirmed}>
								<strong>
									<CountUp
										start={Global.TotalConfirmed - Global.TotalConfirmed * 0.1}
										end={Global.TotalConfirmed}
										duration={1}
										separator=','
									/>
								</strong>
							</Typography>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Typography variant='h6' className={classes.stats}>
								Total Recovered
							</Typography>
							<Typography variant='h4' className={classes.recovered}>
								<strong>
									<CountUp
										start={Global.TotalRecovered - Global.TotalRecovered * 0.1}
										end={Global.TotalRecovered}
										duration={1}
										separator=','
									/>
								</strong>
							</Typography>
						</Grid>
						<Grid item xs={12} sm={4}>
							<Typography variant='h6' className={classes.stats}>
								Total Deaths
							</Typography>
							<Typography variant='h4' className={classes.deaths}>
								<strong>
									<CountUp
										start={Global.TotalDeaths - Global.TotalDeaths * 0.1}
										end={Global.TotalDeaths}
										duration={1}
										separator=','
									/>
								</strong>
							</Typography>
						</Grid>
					</Grid>
				</>
			) : (
				<Backdrop className={classes.backdrop} open={true}>
					<CircularProgress color='inherit' />
				</Backdrop>
			)}
		</Grid>
	)
}

const useStyles = makeStyles((theme) => ({
	container: {
		backgroundColor: 'rgb(240,240,240)',
	},
	title: {
		color: '#0466AD',
		textAlign: 'center',
		marginTop: '10px',
		marginBottom: '10px',
		textShadow: '1px 1px black',
	},
	stats: {
		textAlign: 'center',
		opacity: 0.5,
		marginTop: '10px',
	},
	confirmed: {
		color: 'darkorange',
		textAlign: 'center',
		opacity: 0.7,
		marginBottom: '10px',
		textShadow: '1px 1px black',
	},
	recovered: {
		color: 'green',
		textAlign: 'center',
		opacity: 0.7,
		marginBottom: '10px',
		textShadow: '1px 1px black',
	},
	deaths: {
		color: 'red',
		textAlign: 'center',
		opacity: 0.7,
		marginBottom: '10px',
		textShadow: '1px 1px black',
	},
	spinner: {
		margin: 'auto',
		marginTop: '20px',
		marginBottom: '20px',
	},
	backdrop: {
		zIndex: theme.zIndex.drawer + 1,
		color: '#fff',
	},
}))

const mapStateToProps = (state) => {
	return {
		Global: state.stats.Global,
	}
}

export default connect(mapStateToProps)(Stats)
