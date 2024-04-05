---
title: "Setting up a new Ubuntu server"
pubDate: "2024-04-05"
state: "draft"
---

## Download and install Ubuntu server

## Update and Upgrade

## Ubuntu Pro (Free for personal use)

## Setting up user accounts

- Reset all passwords
- Create a non-root user account with sudo access

## Configuring and securing SSH access

### Public Key Authentication

- `~/.ssh/authorized_keys`
- `ssh-copy-id`

### Configuring SSH Server

- Change port
- Disable root SSH access
- Disable password authentication
- Disable `DebianBanner`, `PermitEmptyPasswords`

### Setup Fail2Ban

- SSH Jail

## Install Docker

- https://docs.docker.com/engine/install/ubuntu/
- https://docs.docker.com/engine/install/linux-postinstall/
- Configure log rotation https://docs.docker.com/config/containers/logging/json-file/

## Nice to haves

### Configure Shell

- ZSH
- OhMyZSH
- `PROMPT="$fg[cyan]%}$USER@%{$fg[cyan]%}%m ${PROMPT}"`
