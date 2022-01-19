import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Dashboard from '@/modules/profile/tester/Dashboard'
import Profile from '@/modules/profile/tester/Profile'
import Projects from '@/modules/profile/tester/Projects'
import Requests from '@/modules/profile/tester/Requests'
import Settings from '@/modules/profile/tester/Settings'
import TeamMembers from '@/modules/profile/tester/TeamMembers'
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
                    <AntTab label="dashboard" />
                    <AntTab label="profile" />
                    <AntTab label="projects" />
                    <AntTab label="requests" />
                    <AntTab label="settings" />
                </AntTabs>
                <Container maxWidth="lg" style={is_visible === 0 ? { display: '' } : { display: 'none' }}>
                    <Dashboard />
                </Container>
                <Container maxWidth="lg" style={is_visible === 1 ? { display: '' } : { display: 'none' }}>
                    <Profile />
                </Container>
                <Container maxWidth="lg" style={is_visible === 2 ? { display: '' } : { display: 'none' }}>
                    <Projects />
                </Container>
                <Container maxWidth="lg" style={is_visible === 3 ? { display: '' } : { display: 'none' }}>
                    <Requests />
                </Container>
                <Container maxWidth="lg" style={is_visible === 4 ? { display: '' } : { display: 'none' }}>
                    <Settings />
                </Container>
            </div>
        </div>
    );
}