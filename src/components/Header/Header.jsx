import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  Link,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import GithubIcon from '@material-ui/icons/GitHub'

import React from 'react'

const useStyles = makeStyles(() => ({
  title: {
    flexGrow: 1,
  },
}))
const Header = () => {
  const classes = useStyles()

  return (
    <AppBar position="sticky">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu"></IconButton>
        <Typography variant="h6" className={classes.title}>
          COVID-2019 Stats
        </Typography>

        <Button color="inherit">
          <Link
            color="inherit"
            href="https://github.com/kaangokdemir/covid-stats"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </Link>
        </Button>
      </Toolbar>
    </AppBar>
  )
}

export default Header
