'use strict';

/*
  environment:

  name: ReferenceError
  message: welf is not defined

  callstack: at <anonymous>:18:6
    at evaller.onload (study-with.js:63:34)
    at Object.console (study-with.js:65:17)
    at JavaScriptFE.studyWith (javascript-class.js:732:29)
    at HTMLButtonElement.<anonymous> (javascript-class.js:390:49)

  life cycle: Execution phase

  the mistake: initialization without declare

  the fix(es): add const
*/

welf = 'ingrad';

console.log(welf);
