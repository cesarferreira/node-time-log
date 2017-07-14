# node-time-log
> `console.log()` with a beautiful timestamp

<p align="center">
	<img src="https://github.com/cesarferreira/node-time-log/raw/master/extras/ss3.png" width="100%" />
</p>

[![Build Status](https://travis-ci.org/cesarferreira/node-time-log.svg?branch=master)](https://travis-ci.org/cesarferreira/node-time-log)
[![npm](https://img.shields.io/npm/dt/node-time-log.svg)](https://www.npmjs.com/package/node-time-log)
[![npm](https://img.shields.io/npm/v/node-time-log.svg)](https://www.npmjs.com/package/node-time-log)

## Install

```bash
$ yarn add node-time-log
```

## Usage

```js
const log = require('node-time-log').SimpleLog;
const info = require('node-time-log').CompleteLog;

log(`I'm a simple log just with time`); // => 00:07:32 I'm a simple log just with time
info(`I have date and time`); // => 14-07-2017 00:07:44 I have date and time
```

## Created by
[Cesar Ferreira](https://cesarferreira.com)

## License
YOLO © [Cesar Ferreira](https://cesarferreira.com)