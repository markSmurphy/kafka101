var fs = require('fs');
var createHTML = require('create-html');
var LoremIpsum = require("lorem-ipsum").LoremIpsum;
var content;

var lorem = new LoremIpsum({
    sentencesPerParagraph: {
        max: 8,
        min: 4
    },
    wordsPerSentence: {
        max: 16,
        min: 4
    }
});

// Get label from command line
if (process.argv[2] === undefined) {
    // Set default label as none was supplied via the command line
    var label = "sample";
} else {
    label = process.argv[2];
}

console.log('creating... %s', label);

// Small HTML
content = lorem.generateParagraphs(7);

var html = createHTML({
    title: label + ' HTML (small)',
    body: '<p>Sample Content</p>' + content,
    favicon: 'https://fuse.fuseuniversal.com/favicon.ico'
});

console.log('writing (%i bytes) into [%s-small.html]...', html.length, label);
fs.writeFile(label + '-small.html', html, function (err) {
    if (err) console.log(err);
});

// Medium HTML
content = lorem.generateParagraphs(700);

html = createHTML({
    title: label + ' HTML (medium)',
    body: '<p>Sample Content</p>' + content,
    favicon: 'https://fuse.fuseuniversal.com/favicon.ico'
});

console.log('writing (%i bytes) into [%s-medium.html]...', html.length, label);
fs.writeFile(label + '-medium.html', html, function (err) {
    if (err) console.log(err);
});

// Large HTML
content = lorem.generateParagraphs(7000);

html = createHTML({
    title: label + ' HTML (large)',
    body: '<p>Sample Content</p>' + content,
    favicon: 'https://fuse.fuseuniversal.com/favicon.ico'
});

console.log('writing (%i bytes) into [%s-large.html]...', html.length, label);
fs.writeFile(label + '-large.html', html, function (err) {
    if (err) console.log(err);
});

// Very Large HTML
content = lorem.generateParagraphs(70000);

html = createHTML({
    title: label + ' HTML (very large)',
    body: '<p>Sample Content</p>' + content,
    favicon: 'https://fuse.fuseuniversal.com/favicon.ico'
});

console.log('writing (%i bytes) into [%s-very-large.html]...', html.length, label);
fs.writeFile(label + '-very-large.html', html, function (err) {
    if (err) console.log(err);
});