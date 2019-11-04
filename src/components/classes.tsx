import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    titleBar: {
    },
    title: {
        flexGrow: 1,
        paddingLeft: theme.spacing(2),
    },
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    searchTextField: {
        width: 200,
    },
    heartIcon: {
        color: "red",
        cursor: "pointer"
    }
}));
