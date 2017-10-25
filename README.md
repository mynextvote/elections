## Elections

[![Greenkeeper badge](https://badges.greenkeeper.io/mynextvote/elections.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/mynextvote/elections.svg?branch=master)](https://travis-ci.org/mynextvote/elections)

Elections provides a set of utilities to programatically find US election days.
Currently it is limited to US General elections, however support for state
elections and primaries is being developed.

## Installation

Install via NPM or Yarn

```sh
yarn add mnv-elections
```

## Usage

```js
import { getGeneralElection } from 'mnv-elections'

// find the day of a specific election year
const 2018 = getGeneralElection(2018) // 2018-11-06
```

You can also format the results by providing a valid moment style format string.
```js
// optionally, specify a momentjs format to customize the format. 
const 2062 = getGeneralElection(2062, 'MMMM, Do, YYYY') // November 7th, 2062
```

If you need to find the nearest general election to the current year, you can
use the `nextElection()` function.

```js
import { nextElection } from 'mnv-elections'

const next = nextElection() // 2018-11-06 at the time of writing
```
## Reporting innacuracies
If you notice an incorrect election year is returned please file an issue or
submit a pull request.

