#!/bin/bash

# Backup directory.
BACKUP_DIR="/backup"

# Current Time
FILENAME=$( date +'%Y_%m_%d-%H_%M_%S' )

# Create database backup.
./vendor/bin/drush sql-dump --gzip --structure-tables-key=common --result-file=/$BACKUP_DIR/$FILENAME.sql --debug

# Don't keep more than 3 backups.
cd $BACKUP_DIR
ls -1t | tail -n +4 | xargs rm
