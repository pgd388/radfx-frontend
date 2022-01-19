import { makeStyles } from '@material-ui/core/styles';

export const useFooterStyles = makeStyles((theme) => ({
    footer: {
      backgroundColor: '#e0e0e0',
      // marginTop: theme.spacing(8),
      padding: theme.spacing(6, 0),
      marginTop: '32px',
    },
  }));