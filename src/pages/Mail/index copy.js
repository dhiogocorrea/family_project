import React, {useState} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import {useHistory, useLocation} from 'react-router-dom';
import {Button, IconButton, TextField} from '@material-ui/core';

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

  const [name, setName] = useState(null);
  const [mail, setMail] = useState(null);
  const [message, setMessage] = useState(null);

  const submit = () => {
    if (name !== null && mail !== null && message !== null) {
      alert('Mensagem enviada com sucesso!');
      history.push('/');
    } else {
      alert('Todos os campo são obrigarórios!');
    }
  };

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
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                style={{marginRight: 5}}
                label="Nome ... *"
                value={name}
                onChange={e => setName(e.target.value)}
                variant="outlined"
              />
              <TextField
                id="outlined-basic"
                label="Email ... *"
                value={mail}
                onChange={e => setMail(e.target.value)}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                style={{width: '372px'}}
                label="Mensagem ... *"
                variant="outlined"
                value={message}
                onChange={e => setMessage(e.target.value)}
                multiline
                rows={10}
              />
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              onClick={submit}
              className={classes.btn}
              variant="contained"
              color="primary"
              startIcon={<Mail />}
            >
              Enviar
            </Button>
          </Grid>
        </Container>
      </main>
    </React.Fragment>
  );
};

export default Family;
