#!/usr/bin/env node

import '@babel/polyfill'
import run from './run'

export default function () {
  return run(process.argv);
}
