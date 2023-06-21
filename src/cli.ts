import { getEntryPointPaths } from './entry-scan';
import path from 'path';
import fs from 'fs';
import cp from 'child_process';
import os from 'os';
import globWatcher from 'glob-watcher';
import json5 from 'json5';
import chalk from 'chalk';

const arg = process.argv[2];

const entriesPath = path.resolve(__dirname, '../exercises.json5');

function loadEntries() {
  try {
    return json5.parse(fs.readFileSync(entriesPath, 'utf-8')) as string[];
  } catch (e) {
    return [];
  }
}

function saveEntries(entries: string[]) {
  fs.writeFileSync(entriesPath, json5.stringify(entries, null, 2));
}

function exportEntries() {
  const entries = getEntryPointPaths(path.resolve(__dirname, '../exercises'));

  let existingEntriesList = loadEntries();
  let existingEntriesSet = new Set(existingEntriesList);

  for (const entry of entries) {
    if (existingEntriesSet.has(entry)) continue;
    existingEntriesList.push(entry);
  }

  saveEntries(existingEntriesList);
}

function runSingle(entryPath: string) {
  // const cmd = `node
  const x = cp.spawnSync(
    'node',
    [
      // '--inspect',
      '-r',
      'ts-node/register',
      '-e',
      `"require('${entryPath}'); const { runTests } = require('./src/global/tests'); runTests();"`,
    ],
    {
      stdio: 'inherit',
      shell: true,
      cwd: path.resolve(__dirname, '..'),
      // detached: false,
    }
  );

  return x.status === 0;
}

function clearScreen() {
  const platform = os.platform();
  if (platform === 'win32') {
    process.stdout.write('\x1bc');
  }
  if (platform === 'linux') {
    console.log('\x1b[2J');
  }
}

function runEntries(entries: string[]) {
  let entriesCleared = 0;

  for (const entry of entries) {
    clearScreen();
    const entryPath = `./exercises/${entry}`;
    const fullEntryPath = path.resolve(__dirname, '..', entryPath);
    const entryContent = fs.readFileSync(fullEntryPath, 'utf-8');
    const entryLines = entryContent.split('\n').map((line) => line.trim());

    console.log(`Running "${entry}"\n`);

    if (entryLines.includes('// I AM NOT DONE')) {
      if (runSingle(entryPath)) {
        console.log('\n' + chalk.green('✓') + ' Passed');
      } else {
        console.log('\n' + chalk.red('✗') + ' Failed');
      }
      break;
    }

    entriesCleared++;
  }

  return entriesCleared;
}

async function run() {
  const entries = loadEntries();

  const watcher = globWatcher('exercises/**/*.ts', {
    cwd: path.resolve(__dirname, '..'),
  });

  process.on('SIGINT', () => {
    console.log('Interrupted. Exiting...');
    watcher.close();
    process.exit(0);
  });

  const waitForChanges = () =>
    new Promise((resolve) => watcher.once('change', resolve));

  while (true) {
    const cleared = runEntries(entries);
    if (cleared === entries.length) {
      clearScreen();
      console.log('All entries passed!');
    }

    await waitForChanges();
  }
}

switch (arg) {
  case 'export-entries':
    exportEntries();
    break;
  case 'run':
    run();
    break;
  default:
    console.warn('Unknown command');
}
