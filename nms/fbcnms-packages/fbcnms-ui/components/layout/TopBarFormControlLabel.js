/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 * @format
 */

import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import {makeStyles} from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  label: {
    color: '#fff',
  },
  root: theme.mixins.toolbar,
}));

type Props = {|
  checked?: boolean | string,
  className?: string,
  control: React$Element<any>,
  disabled?: boolean,
  inputRef?: Function,
  label: React$Node,
  name?: string,
  onChange?: Function,
  value?: string,
|};

export default function TopBarFormControlLabel(props: Props) {
  const classes = useStyles();
  return <FormControlLabel classes={classes} {...props} />;
}
