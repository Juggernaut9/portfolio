import { scroller } from "react-scroll";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import ForumIcon from "@material-ui/icons/Forum";
import CodeIcon from "@material-ui/icons/Code";
import { Box, IconButton, Link, Button } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import NextLink from "next/link";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    bigButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.down("sm")]: {
        width: "48%",
        marginRight: theme.spacing(0),
      },
    },
    bigButtonsContainer: {
      [theme.breakpoints.down("sm")]: {
        display: "flex",
        justifyContent: "space-between",
      },
    },
  })
);

function Buttons() {
  const classes = useStyles();
  return (
    <>
      <Box mx={-1}>
        <Link
          href="https://github.com/Juggernaut9"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          itemProp="sameAs"
        >
          <IconButton
            aria-label="Github profile"
            aria-haspopup="true"
            color="inherit"
          >
            <GitHubIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link
          href="https://www.linkedin.com/in/bhavya-tomar-1967b6202"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          itemProp="sameAs"
        >
          <IconButton
            aria-label="Github repository link"
            aria-haspopup="true"
            color="inherit"
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Link>
        <Link
          href="https://twitter.com/bhavyacodes"
          target="_blank"
          rel="noopener noreferrer"
          color="inherit"
          itemProp="sameAs"
        >
          <IconButton
            aria-label="Github repository link"
            aria-haspopup="true"
            color="inherit"
          >
            <TwitterIcon fontSize="large" />
          </IconButton>
        </Link>
      </Box>
      <Box className={classes.bigButtonsContainer} mt={2}>
        <Button
          variant="contained"
          color="secondary"
          disableElevation
          className={classes.bigButton}
          startIcon={<ForumIcon />}
          onClick={() => {
            scroller.scrollTo("contact", {
              smooth: "easeInOutQuad",
            });
          }}
        >
          Get in touch
        </Button>
        <NextLink href="/projects">
          <Button
            component="a"
            variant="outlined"
            color="secondary"
            className={classes.bigButton}
            startIcon={<CodeIcon />}
            href="/projects"
          >
            See my work
          </Button>
        </NextLink>
      </Box>
    </>
  );
}

export default Buttons;
