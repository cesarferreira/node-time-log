#!/usr/bin/env node

'use strict';

const Chalk = require('chalk');
const DateFormat = require('dateformat');

function handleLog(dateformat, message) {
    const timeStamp = DateFormat(new Date(), dateformat);
    console.log(`${Chalk.gray(timeStamp)} ${message}`);
}

exports.SimpleLog = (message) => {
    handleLog('HH:mm:ss', message);
}

exports.CompleteLog = (message) => {
    handleLog('dd-mm-yyyy HH:mm:ss', message);
}