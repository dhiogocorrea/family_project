import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import {useHistory} from 'react-router-dom';

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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const title = 'Trajetórias de família';
const subtitle =
  'Entender nossas origens e imaginar que um dia poderemos percorrer as ruas que nossos antepassados viveram, são sonhos, que com certeza um dia poderemos conquistar.';

const families = [
  {
    key: 1,
    title: 'Velludo',
    description: 'Vindos da ilha da madeira, chegaram ao Brasil em 12/10/1888.',
    image: 'https://velludo-cicci-correa.s3.us-east-1.amazonaws.com/brasao_velludo.jpg',
    pdfUrl: 'https://velludo-cicci-correa.s3.us-east-1.amazonaws.com/Genealogia%20das%20Fam%C3%ADlias%20Velludo.pdf',
  },
  {
    key: 2,
    title: 'Cicci',
    description: 'Salvatore e Carmella chegaram no Brasil em 16/08/1896, vindos de Pettorano Sul Gizio, Itália.',
    image: 'https://velludo-cicci-correa.s3.us-east-1.amazonaws.com/cicci_brasao.png',
    pdfUrl: 'https://sebrae-lis.s3.amazonaws.com/14383.pdf',
  },
  {
    key: 3,
    title: 'Corrêa',
    description: 'A família veio de Coimbra, das freguesias de São Pedor de Alva e Lousã, em Portugal.',
    image: 'https://velludo-cicci-correa.s3.us-east-1.amazonaws.com/brasao_correa.jpg',
    pdfUrl: 'https://sebrae-lis.s3.amazonaws.com/14383.pdf',
  },
];

export default function Home() {
  const history = useHistory();
  const classes = useStyles();

  const goToFamily = family => {
    history.push('/family', {data: family});
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <main style={{backgroundColor: '#fff5e1'}}>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              {title}
            </Typography>
            <Typography variant="h4" align="center" color="textSecondary" paragraph>
              {subtitle}
            </Typography>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {families.map(card => (
              <Grid item key={card.key} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia height="240px" component="img" className={classes.cardMedia} src={card.image} />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
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
        </Container>
      </main>
    </React.Fragment>
  );
}
