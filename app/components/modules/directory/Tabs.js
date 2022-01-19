import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Projects from '@/modules/directory/Projects'
import Facilities from '@/modules/directory/Facilities'
import Testers from '@/modules/directory/Testers'
import Integrators from '@/modules/directory/Integrators'
import Agencies from '@/modules/directory/Agencies'
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
                    <AntTab label="facilities" />
                    <AntTab label="integrators" />
                    <AntTab label="agencies" />
                    <AntTab label="testers" />
                    <AntTab label="projects" />
                </AntTabs>
                <Container maxWidth="lg" style={is_visible === 0 ? { display: '' } : { display: 'none' }}>
                    <Facilities />
                </Container>
                <Container maxWidth="lg" style={is_visible === 1 ? { display: '' } : { display: 'none' }}>
                    <Integrators />
                </Container>
                <Container maxWidth="lg" style={is_visible === 2 ? { display: '' } : { display: 'none' }}>
                    <Agencies />
                </Container>
                <Container maxWidth="lg" style={is_visible === 3 ? { display: '' } : { display: 'none' }}>
                    <Testers />
                </Container>
                <Container maxWidth="lg" style={is_visible === 4 ? { display: '' } : { display: 'none' }}>
                    <Projects />
                </Container>
            </div>
        </div>
    );
}