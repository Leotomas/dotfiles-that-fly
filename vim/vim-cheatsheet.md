# VIM

## mappings
### Misc
- g; : goes to last edit location
- debut de ligne : _
- F : find backwards
- yy pour copier ligne
- gt / gT pour bouger dans les tabs

### Magit / Git workflow
- :Magit (leader M)
- <leader>ga. git add .
- <leader>chb close hidden buffers
- <leader>tw ToggleWorkspace
- DDD sur leader M fichier -> supprime les changements du fichier

### Surround
- ysw" -> add quotes (vim surround)

### Registers
- "ay pour yank ce qui est selectionné dans le register a
- "ap pour paste ce qui se trouve dans le register a
- in insert mode CTRL-R will paste -> * for clipboard, % for filename, any other letter for letter registers

### Spelling
- zg pour ajouter un mot à la liste des bons mots
- ]s pour jump au prochain mauvais mispelled
