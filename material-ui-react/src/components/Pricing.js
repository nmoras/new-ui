import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const Copyright = () => {
    return (
        <Typography variant='body2' color='textSecondary' align='center'>
            {'Copyright © '}
            <Link color='inherit' href='materialii'>
                Your Website
            </Link>{''}
            {new Date().getFullYear()}
            { '.' }
        </Typography>
    )
}

const useStyles = makeStyles((theme) => ({
    '@global' : {
        ul:{
            margin: 0,
            padding: 0,
            listStyle: 'none',
        },
    },
    appBar:{
        borderBottom: `1px solid ${theme.palette.divider}`

    },
    toolbar:{
        flexWrap: 'wrap',
    },
    toolbarTitle:{
        flexGrow:1,
    },
    link:{
        margin: theme.spacing(1, 1.5),
    },
    heroContent:{
        padding: theme.spacing(8, 0, 6),
    },
    cardHeader:{
        backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
    },
    cardPricing:{

    },
    footer:{

    },

}));
function Pricing() {
    const classes = useStyles();

    return (
        <>
            <CssBaseline />
            <AppBar position='static' color='default' elevation={1} className={classes.appBar}>
                <Toolbar className={classes.toolbar}>
                    <Typography variant='h6' color='inherit' noWrap className={classes.toolbarTitle}>
                        Company Name
                    </Typography>
                    <nav>
                        <Link variant='button' color='textPrimary' to='/' className={classes.link}>
                            Features
                        </Link>
                        <Link variant='button' color='textPrimary' href='#' className={classes.link}>
                            Enterprise
                        </Link>
                        <Link variant='button'>
                            Support
                        </Link>
                    </nav>
                    <Button color='primary' variant='outlined' className={classes.link}>
                        Login
                    </Button>
                </Toolbar>
            </AppBar>
            <h1>i am the heading </h1>
        </>
    )
}

export default Pricing
