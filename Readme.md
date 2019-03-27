
# Dotfiles that fly

![WSLTTY Windows](https://raw.githubusercontent.com/Leotomas/dotfiles-that-fly/master/docs/setup.PNG)

## Vim
Mainly centered around javascript, nodejs, vuejs and html and git. It features linting, simple completion (not using lsp because I'm not satisfied with how it's been implemented in vim).

To install you'll first need to install NeoBundle. Then :
```
   ln -s ??/dotfiles-that-fly/vim/vimrc ~/.vimrc
   ln -s ??/dotfiles-that-fly/vim/snippets ~/.vim/snippets
```


## Tmux
Something easy to use. F9 is my leader which I've remapped to caps lock.

## Windows

This is my current setup with WSL and wsltty.

- python
- docker
- wsl
- wsltty
- dbeaver
- vscode
- sublime text (almost useless with wsltty copy/paste buffer support)
- cmder (for tabbed powershell only)

If you want WSL to have decent performances you sould disable windows real time protection.

### WSLTTY

Iosevka Term is a decent font to use on Windows.
Easy access to wsltty config directory (in %appdata% on windows).
```bash
ln -s /mnt/c/Users/Leo/AppData/Roaming/wsltty/ wsltty_dir
```


