import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import {useHistory} from 'react-router-dom';
import {IconButton} from '@material-ui/core';

import ArrowBack from '@material-ui/icons/ArrowBack';
import Iframe from 'react-iframe';

import {formsUrl} from '../../core/utils/site_variables';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  mainGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    paddingLeft: 0,
  },
  btn: {
    marginTop: theme.spacing(2),
    fontFamily: 'Times New Roman',
  },
}));

const Family = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <IconButton aria-label="delete" onClick={() => history.push('/')}>
              <ArrowBack />
            </IconButton>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Enviar mensagem
            </Typography>
            <Typography variant="h4" align="center" color="textSecondary" paragraph>
              Tem sugestões, dúvidas ou encontrou algum erro? Entre em contato!
            </Typography>
          </Container>
        </div>
        <Container className={classes.mainGrid} maxWidth="lg">
          <Iframe url={formsUrl()} width="100%" height="800px" />
        </Container>
      </main>
    </React.Fragment>
  );
};

export default Family;
