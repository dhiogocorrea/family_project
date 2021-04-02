import React from 'react';
import {Button, Link, Typography, Container, Card, CardMedia, CardContent, CssBaseline} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import {makeStyles} from '@material-ui/core/styles';

import Mail from '@material-ui/icons/Mail';

import {useHistory} from 'react-router-dom';

import {title, subtitle, families, cardBgColor} from '../../core/utils/site_variables_vania';
//import {title, subtitle, families, cardBgColor} from '../../core/utils/site_variables_ailton';

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
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '5.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  btn: {
    marginTop: theme.spacing(2),
    fontFamily: 'Times New Roman',
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Home() {
  const history = useHistory();
  const classes = useStyles();

  const goToFamily = family => {
    history.push('/family', {data: family});
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main style={{backgroundColor: cardBgColor()}}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              {title()}
            </Typography>
            <Typography variant="h4" align="center" color="textSecondary" paragraph>
              {subtitle()}
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {families().map(card => (
              <Grid item key={card.key} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    height="240px"
                    component="img"
                    style={{objectFit: 'scale-down'}}
                    className={classes.cardMedia}
                    src={card.image}
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h4" component="h2">
                      <Link style={{cursor: 'pointer'}} onClick={() => goToFamily(card)}>
                        {card.title}
                      </Link>
                    </Typography>
                    <Typography variant="h6" component="h3">
                      {card.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
          <Button
            onClick={() => history.push('/mail')}
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
}
