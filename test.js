const log = require('./index.js').SimpleLog;
const info = require('./index.js').CompleteLog;

const items = [
    `"I don't even know who my mother was," Jon said.`,
    `"You know nothing, Jon Snow."`,
    `"Kill the boy and let the man be born."`,
    `"The only time a man can be brave is when he is afraid."`,
    `"There's been no one," he confessed. "Only you."`
];

items.forEach(item => {
    info(item);
});