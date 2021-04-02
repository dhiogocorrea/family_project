import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import {useHistory, useLocation} from 'react-router-dom';
import Iframe from 'react-iframe';
import {Button, IconButton} from '@material-ui/core';

import ArrowBack from '@material-ui/icons/ArrowBack';
import Mail from '@material-ui/icons/Mail';

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
  const location = useLocation();

  const family = location.state !== undefined ? location.state.data : {};

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
              {family && family.title}
            </Typography>
            <Typography variant="h4" align="center" color="textSecondary" paragraph>
              {family && family.description}
            </Typography>
          </Container>
        </div>
        <Container className={classes.mainGrid} maxWidth="lg">
          <Typography>Dica: Para fazer buscas no arquivo, aperte Crtl+F e realize sua busca.</Typography>
          <Iframe url={family && family.pdfUrl} width="100%" height="800px" id="familyPdf" />
          <Button
            onClick={() => history.push('/mail', {familyName: family.title})}
            className={classes.btn}
            variant="contained"
            color="primary"
            startIcon={<Mail />}
          >
            Enviar mensagem para o autor
          </Button>
        </Container>
      </main>
    </React.Fragment>
  );
};

export default Family;
