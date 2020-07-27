#!/usr/bin/env node

import '@babel/polyfill'
import run from './run'

export async function generate() {
  return run([process.argv[0], process.argv[1]]);
}
