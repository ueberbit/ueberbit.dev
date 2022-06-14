#!/bin/bash

# Update drupal (import config, run database updates, clear caches).
./vendor/bin/drush deploy --yes
