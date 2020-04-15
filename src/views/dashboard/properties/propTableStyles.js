import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  },
  row: {
    cursor: 'pointer',
    transition: 'all .2s ease',
    '&:hover': {
      background: '#f9a826',
      borderRadius: '50px',
      '& > *': {
        color: '#fff'
      }
    }
  }
});

export default useStyles;
