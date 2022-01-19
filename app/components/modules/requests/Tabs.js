import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Completed from '@/modules/requests/Completed'
import Scheduled from '@/modules/requests/Scheduled'
import Submitted from '@/modules/requests/Submitted'
import { useTabStyles, AntTab, AntTabs } from '@/styles/useTabStyles';

export default function Tabinator() {
    const classes = useTabStyles();
    const [is_visible, setIsVisible] = React.useState(0);

    const handleChange = (event, newValue) => {
        setIsVisible(newValue);
    };

    return (
        <div className={classes.root}>
            <div className={classes.demo1}>
                <AntTabs value={is_visible} onChange={handleChange} aria-label="ant example">
                    <AntTab label="submitted" />
                    <AntTab label="scheduled" />
                    <AntTab label="completed" />
                    <AntTab label="cancelled" />
                </AntTabs>
                <Container maxWidth="lg" style={is_visible === 0 ? { display: '' } : { display: 'none' }}>
                    <Submitted />
                </Container>
                <Container maxWidth="lg" style={is_visible === 1 ? { display: '' } : { display: 'none' }}>
                    <Scheduled />
                </Container>
                <Container maxWidth="lg" style={is_visible === 2 ? { display: '' } : { display: 'none' }}>
                    <Completed />
                </Container>
            </div>
        </div>
    );
}