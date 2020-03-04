import { makeStyles } from '@material-ui/core/styles';

// Define styling for modal
export const modalStyles = makeStyles(theme => ({
  card: {
    width: '100%'
  },
  title: {
    textAlign: 'center',
    margin: 0,
    lineHeight: 1
  },
  avatar: {
    backgroundColor: '#2d3b4f'
  },
  media: {
    padding: theme.spacing(2),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& svg': {
      height: 140
    }
  },
  address: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& div': {
      fontSize: '4rem'
    },
    '& svg': {
      fontSize: '3rem',
      marginRight: theme.spacing(2)
    }
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    '& button': {
      marginTop: theme.spacing(2)
    }
  },
  list: {
    padding: theme.spacing(0, 4)
  },
  listItem: {
    minWidth: '300px'
  },
  actionIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  btn: {
    margin: theme.spacing(2)
  }
}));

// Define custom styling for the TenantForm
export const formStyles = makeStyles(theme => ({
  formCard: {
    padding: theme.spacing(4)
  },
  formTitle: {
    marginBottom: theme.spacing(2)
  },
  textField: {
    width: '500px',
    maxWidth: '500px',
    margin: theme.spacing(2)
  },
  submitWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: theme.spacing(2)
  },
  submit: {}
}));
