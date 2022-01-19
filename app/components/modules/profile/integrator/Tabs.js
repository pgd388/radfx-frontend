import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Dashboard from '@/modules/profile/integrator/Dashboard'
import Profile from '@/modules/profile/integrator/Profile'
import Settings from '@/modules/profile/integrator/Settings'
import TeamMembers from '@/modules/profile/integrator/TeamMembers'
import Testers from '@/modules/profile/integrator/Testers'
import Integrators from '@/modules/profile/integrator/Integrators'
import Agency from '@/modules/profile/integrator/Agency'
import Agencies from '@/modules/profile/integrator/Agencies'
import { useTabStyles, AntTab, AntTabs } from '@/styles/useTabStyles';


export default function Tabinator(props) {
    const {user} = props;
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
                    <AntTab label="agency" />
                    <AntTab label="settings" />
                </AntTabs>
                <Container maxWidth="lg" style={is_visible === 0 ? { display: '' } : { display: 'none' }}>
                    <Dashboard />
                </Container>
                <Container maxWidth="lg" style={is_visible === 1 ? { display: '' } : { display: 'none' }}>
                    <Profile user={user} />
                </Container>
                <Container maxWidth="lg" style={is_visible === 2 ? { display: '' } : { display: 'none' }}>
                    <Agency />
                </Container>
                <Container maxWidth="lg" style={is_visible === 6 ? { display: '' } : { display: 'none' }}>
                    <Settings />
                </Container>
            </div>
        </div>
    );
}