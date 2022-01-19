import React, {useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Berkley from '@/modules/schedule/Berkley'
import Nasa from '@/modules/schedule/Nasa'
import TexasAM from '@/modules/schedule/TexasAM'
import Overview from '@/modules/schedule/Overview'
import { useTabStyles, AntTab, AntTabs } from '@/styles/useTabStyles';

export default function Tabinator() {
    const classes = useTabStyles();
    const [is_visible, setIsVisible] = useState(0);

    const handleChange = (event, newValue) => {
        setIsVisible(newValue);
    };

    return (
        <div className={classes.root}>
            <div className={classes.demo1}>
                <AntTabs value={is_visible} onChange={handleChange} aria-label="ant example">
                    <AntTab label="Overview" />
                    <AntTab label="Berkley Lab" />
                    <AntTab label="Nasa SRL" />
                    <AntTab label="Texas A&M" />
                </AntTabs>
                <Container maxWidth="lg" style={is_visible === 0 ? { display: '' } : { display: 'none' }}>
                    <Overview />
                </Container>
                <Container maxWidth="lg" style={is_visible === 1 ? { display: '' } : { display: 'none' }}>
                    <Berkley />
                </Container>
                <Container maxWidth="lg" style={is_visible === 2 ? { display: '' } : { display: 'none' }}>
                    <Nasa />
                </Container>
                <Container maxWidth="lg" style={is_visible === 3 ? { display: '' } : { display: 'none' }}>
                    <TexasAM />
                </Container>
            </div>
        </div>
    );
}