#!/usr/bin/env node

import '@babel/polyfill'
import run from './run'

export async function _run () {
  return run(process.argv);
}
