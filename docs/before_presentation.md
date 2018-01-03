# Before the presentation

## Install Git

### Windows

1. Install <http://gitforwindows.org>

### Mac

1. Install [Homebrew](https://brew.sh/): `/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
2. Install Git: `brew install git`

## Default configuration

1. Open a terminal (mac) or Git BASH (Windows)
2. Create a file `~/.gitignore`: `touch ~/.gitignore`
3. Edit this file and add the content below:

    # OS X
    .DS_Store
    .idea
    .Spotlight-V100
    .Trashes
    
    # Windows
    Desktop.ini
    Thumbs.db
    
    # ZendStudio
    .project
    .buildpath
    .settings
    
    # PHPStorm
    .idea
    
4. Execute the commands below:

    git config --global user.name "Jouw naam"
    git config --global user.email jouw@emailadres.be
    git config --global core.excludesfile '~/.gitignore'
    git config --global alias.co checkout
    git config --global alias.st status
