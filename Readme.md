
# Dotfiles that fly

No-nonsense dotfiles that work on Windows and WSL(2). Featuring :

- Efficient vim configuration
- An efficient git merge workflow with vim
- Clipboard sharing between vim, tmux and windows
- Some handy bash aliases, fzf completion
- A high contrast color scheme
- Personal Wiki with Zettelkasten support (use `:Zet some new note` from vim or `vet some other new note` from the shell)

![WSLTTY Windows](https://raw.githubusercontent.com/Leotomas/dotfiles-that-fly/master/docs/setup.PNG)


## Vim
A fully working IDE, centered around nodejs, typescript and react development with git.

## Tmux
Something easy to use. F10 is my leader which I've remapped to caps lock.

## Bash and prompt
I'm using [starship](https://starship.rs/) as my prompt, with a bunch of bash aliases.

## Windows

This is my current setup with WSL2 and wsltty.

- python
- docker
- wsl2 with Ubuntu 20.04
- wsltty
- pgadmin
- mailhog

### WSLTTY2

Iosevka Term is a decent font to use on Windows.
Easy access to wsltty config directory (in %appdata% on windows).
```bash
ln -s /mnt/c/Users/Leo/AppData/Roaming/wsltty/ wsltty_dir
```


