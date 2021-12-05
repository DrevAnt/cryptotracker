import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url(./chart2.png)",
    backgroundSize: "contain",
    backgroundPosition: "50% 10%",
    backgroundRepeat: "no-repeat",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "45%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    margin: "3rem 0",
    paddingTop: "1rem",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Roboto Condensed",
            }}
          >
            Crypto Tracker
          </Typography>
          <Typography
            variant="h4"
            style={{
              textTransform: "capitalize",
              fontFamily: "Roboto Condensed",
            }}
          >
            Info regarding your favorite Crypto Currency
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;
