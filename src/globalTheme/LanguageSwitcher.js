import * as React from "react";
import Button from '@material-ui/core/Button';
import { useSetLocale } from 'react-admin';

const LocaleSwitcher = () => {
    const setLocale = useSetLocale();
    return (
        <div>
            <Button onClick={() => setLocale('en')}>English</Button>
            <Button onClick={() => setLocale('es')}>Español</Button>
        </div>
    );
};

export default LocaleSwitcher;