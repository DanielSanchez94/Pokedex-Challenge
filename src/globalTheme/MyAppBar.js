import * as React from 'react';
import { AppBar } from 'react-admin';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import LanguageSwitcher from './LanguageSwitcher';

const useStyles = makeStyles({
    title: {
        flex: 1,
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    spacer: {
        flex: 1,
    },
    
});

const MyAppBar = props => {
    const classes = useStyles();
    return (
        <AppBar {...props}>
            <Typography
                variant="h6"
                color="inherit"
                className={classes.title}
                id="react-admin-title"
            />
            <span className={classes.spacer} />
            <LanguageSwitcher
            languages={[
                { locale: 'en', name: 'English' },
                { locale: 'es', name: 'Español' },
            ]}
            defaultLanguage="English"
        />
        </AppBar>
    );
};

export default MyAppBar;
