import React from 'react';

// Components Material UI
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';

// Iconos Material UI
import Suma from '@material-ui/icons/Add';
import Resta from '@material-ui/icons/Remove';
import Multiplicacion from '@material-ui/icons/Clear';
import Division from '@material-ui/icons/LinkOff';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';

// Imagen
import Fondoheader from '../../assets/img/fondo-header.jpg'

// Componente NC
import HeaderNC from '../../components/menus/Nav';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 0,
        paddingTop: '20%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

function Header() {

    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.root}>
            <HeaderNC />

            <CardMedia
                className={classes.media}
                image={Fondoheader}
                title="Paella dish"
            />
            <CardContent>
                {/*
                <Typography variant="body2" color="textSecondary" component="p">
                    This impressive paella is a perfect party dish and a fun meal to cook together with your
                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                
          </Typography>
          */}

                <CardHeader
                    avatar={
                        <Avatar aria-label="recipe" className={classes.avatar}>
                            M
            </Avatar>
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
                    }
                    title="Operaciones Matemáticas"
                    subheader="Suma - Resta - Multiplicación - División"
                />

            </CardContent>
            <CardActions disableSpacing>
                <h4>Operaciones matemáticas</h4>
                <IconButton aria-label="add to favorites">
                    <Suma />
                </IconButton>
                <IconButton aria-label="share">
                    <Resta />
                </IconButton>
                <IconButton aria-label="share">
                    <Multiplicacion />
                </IconButton>
                <IconButton aria-label="share">
                    <Division />
                </IconButton>
                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Detalles:</Typography>
                    <Typography paragraph>
                        Suma: El formulario suma dos numeros.
            </Typography>
                    <Typography paragraph>
                        Resta: El formulario resta dos numeros
            </Typography>
                    <Typography paragraph>
                        Multiplicación: El formulario multiplica dos numeros
            </Typography>
                    <Typography>
                        División: El formulario divide dos numeros
            </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}

export default Header;