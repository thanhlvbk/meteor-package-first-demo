Package.describe({
  name: 'particle4dev01:faker',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
    faker: "2.1.2"
});
 
Package.on_use(function(api){
    api.add_files("faker.js", "server");
    api.export('faker', 'server');
});
