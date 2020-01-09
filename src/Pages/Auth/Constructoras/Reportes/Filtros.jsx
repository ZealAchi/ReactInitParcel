import React from 'react';
import Fab from '@material-ui/core/Fab';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import clsx from 'clsx';

import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import UpIcon from '@material-ui/icons/KeyboardArrowUp';
import { green } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    position: 'relative',
    minHeight: 200,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  fabGreen: {
    color: theme.palette.common.white,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[600],
    },
  },
}));
export default function Filtros({children}) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);


  const fabs = [
    {
      className: classes.fab,
      icon: children,
      label: 'Edit',
    },
  ];

  return (
    <div className={classes.root}>
      
      {fabs.map(fab=><Fab aria-label={fab.label} className={fab.className} color={fab.color}>
            {fab.icon}
          </Fab>)
      }
      </div>
  );
}