
# Cerebro Linux/MacOS file and folder search
> Cerebro plugin to locate files and folders in system

![https://raw.githubusercontent.com/lucky125111/cerebro-search-linux/master/folder.gif](https://raw.githubusercontent.com/lucky125111/cerebro-search-linux/master/folder.gif)

## Prerequisites

This tool requires `locate`it indexes files which provides fast search results.

**Debian and Ubuntu**

```bash
sudo apt-get install locate
```

**Prepare locate command for first use**

To update the mlocate.db database before first use, run:

```bash
sudo updatedb
```

## Usage
In Cerebro, type file name or path of path to look for. Currently the file search will show only first 100 results. Clicking the file will reveal it in the folder explorer

## Features
* Typically files will by searched by only file name 
* If you include '/' paths will be searched 
* On click the file will be shown in window explorer
* Use your keyboard to navigate the entire interface. Intuitive and does what you expect

## Remark

This plugin is only available on Linux and MacOS, since Windows doesn't have locate package

## Related
* [Cerebro](http://github.com/KELiON/cerebro) – main repo for Cerebro app
* [cerebro plugin boilerplate](https://github.com/KELiON/cerebro-plugin) – boilerplate used to create this plugin
* [es-everything-plugin](https://github.com/masterperas/es-everything-plugin) - windows version utilizing everything cli

## TODO's
1. Prefered folders to be shown at the beginning of the list
2. Reveal in explorer on ctrl+enter, open on enter
3. Separate list of folders excluded from search to separate file
4. Support for regular expressions
