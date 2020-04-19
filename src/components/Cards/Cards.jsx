import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'
import styles from './Cards.module.css'
import CountUp from 'react-countup'
import cx from 'classnames'

const duration = 1.5

export default function Cards({
  data: { confirmed, recovered, deaths, lastUpdate },
}) {
  if (!confirmed) {
    return 'Loading'
  }

  const CardList = [
    {
      title: 'Infected.',
      message: 'Number of currently active COVID patients.',
      value: confirmed.value,
      cardStyle: 'is-infected',
    },
    {
      title: 'Recovered',
      message: 'Number of recovered people.',
      value: recovered.value,
      cardStyle: 'is-recovered',
    },
    {
      title: 'Deaths',
      message: 'Number of people who lost their live due to COVID virus.',
      value: deaths.value,
      cardStyle: 'is-death',
    },
  ]

  const GridList = () => {
    return CardList.map(({ title, value, message, cardStyle }) => (
      <Grid
        item
        component={Card}
        key={title}
        xs={12}
        md={3}
        className={cx(styles.card, styles[cardStyle])}
      >
        <Typography color="textSecondary" gutterBottom>
          {title}
        </Typography>
        <Typography variant="h5">
          <CountUp start={0} end={value} duration={duration} separator="," />
        </Typography>
        <Typography variant="h5" color="textSecondary">
          {new Date(lastUpdate).toDateString()}
        </Typography>
        <Typography variant="body2" color="textSecondary">
          {message}
        </Typography>
        <CardContent />
      </Grid>
    ))
  }

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <GridList />
      </Grid>
    </div>
  )
}
