// Package metadata for Meteor.js.

Package.describe({
  name: 'zenorocha:clipboard',
  summary: 'Modern copy to clipboard. No Flash. Just 3kb.',
  version: '2.0.10',
  git: 'https://github.com/zenorocha/clipboard.js',
});

Package.onUse(function (api) {
  api.addFiles('dist-front-dashboard/clipboard.js', 'client');
});