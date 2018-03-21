# mv-cli

> Move files and directories

Useful for use in build scripts and automated things.


## Install

```
$ npm i mv-cli
```


## Usage

```
$ mv-cli --help

  Usage
  	  $ mv-cli source<path|glob> dest<path|glob>
  	  
  	Options
  	  -md, --mkdirp    first create all necessary directories
  	  -nc, --noclobber don't overwrite existing files
  	  -l, --limit      how many concurrent file requests can be made, default 16
  	  
  	Example
  	  $ mv-cli source/file dest/file
```


## Related

- [mv](https://github.com/andrewrk/node-mv) - API for this module