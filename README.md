# Slonit

## <a id="commands">Команды git<a>

1. `git init` - cоздание пустого репозитория Git или повторная инициализация существующего [Подробнее](https://git-scm.com/docs/git-init)
2. `git config` - показать статус рабочего дерева [Подробнее](https://git-scm.com/docs/git-config)
3. `git status` - показать статус рабочего дерева [Подробнее](https://git-scm.com/docs/git-status)
4. `git add` - добавление содержимое файла в индекс [Подробнее](https://git-scm.com/docs/git-add)
5. `git commit` - запись изменений в репозиторий [Подробнее](https://git-scm.com/docs/git-commit)
6. `git rm` - удаление файлов из рабочего дерева и из индекса [Подробнее](https://git-scm.com/docs/git-rm)
7. `git branch` - вывод, создание или удаление веток [Подробнее](https://git-scm.com/docs/git-branch)
8. `git remote` - управление отслеживаемыми репозиториями [Подробнее](https://git-scm.com/docs/git-remote)
9. `git push` - обновление данных на remote [Подробнее](https://git-scm.com/docs/git-push)
10. `git pull` - извлечение из другого репозитория или локальной ветки и интеграция с ней [Подробнее](https://git-scm.com/docs/git-pull)
11. `git reset` - сбросить текущий HEAD в указанное состояние [Подробнее](https://git-scm.com/docs/git-reset)
12. `git mv` - переименование файлов в рабочем дереве и в индексе [Подробнее](https://git-scm.com/docs/git-mv)

## Флаги git

[Вернуться к коммандам](#commands)

**confing**

1. `--global` - записывает настройки глобально
2. `--list` - выводит конфиг
3. `--unset <param>` - удаляет параметр из конфига

**add**

1. `-p` - выборочное добавление изменений в индекс

**rm**

1. `-r` - удаление дирректории
2. `-cached` - удаление только из индекса, но не из рабочей дирректории
3. `-f` - игнорирование предупреждений

**commit**

3. `-a` - добавление всех изменений в индекс перед _commit_, кроме новых файлов
4. `-m <msg>` - добавляет сообщение _msg_ к _commit_

**branch**

1. `-M [<oldbranch>] <newbranch>` - Изменение имени ветки _oldbranch_ на _newbranch_

![GitHub logo](https://cdn.prod.website-files.com/63be620d63863b897c02c28a/6477657755c46a6f4965855f_github_large.png)
