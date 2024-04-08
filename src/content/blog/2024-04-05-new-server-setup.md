---
title: "Setting up a new Ubuntu server"
pubDate: "2024-04-05"
state: "draft"
---

## Table of Contents

## Background

I primarily made this guide to remind myself of the steps I should go through
when setting up a server. [Ubuntu server](https://ubuntu.com/server) is my go-to
Linux server OS and these steps are what I find myself doing every time I setup
a server.

I've tried to make this guide unopinionated - what I've listed is what I believe
is the bare minimum for the majority of servers, _especially_ if exposed to the
internet. The exception to this is the items under
[Nice to haves](#nice-to-haves). These items are generally what I use on
servers, but the reader may choose not to.

## Download, install and update Ubuntu server

If you are using a cloud provider that installs Ubuntu for you, you can skip
this step!

### Where?

Ubuntu Server can be downloaded from the Ubuntu website at
https://ubuntu.com/download/server

### What?

In most instances, you should make sure to download the Ubuntu LTS (Long-Term
Support) version which includes a total of 10 years of updates and security from
when it was first released. The non-LTS versions only have 9 months of security
maintenance!

At the time of writing, the current LTS version of Ubuntu is `22.04 LTS` with
the new version `24.04 LTS` due to come out next week.

### Why?

For running servers, you will typically want a headless (No GUI) operating
system that is lightweight and doesn't come with unnecessary programs and
overheads that a desktop OS would have.

For Ubuntu, this takes the form of Ubuntu Server which is the same distro of
Linux that powers their desktop OS but without the overheads.

**Note: You _can_ use Ubuntu Desktop for this guide, but when running as a
server using Ubuntu server is highly recommended**

### Installing Ubuntu Server

The installation of Ubuntu Server used a step by step wizard to guide you
through the process.

Ubuntu has a great tutorial on each of the steps here,
[click here to read it](https://ubuntu.com/tutorials/install-ubuntu-server).

### Update and Upgrade

Congratulations! You've installed Ubuntu Server. The first thing you should do
is update and upgrade the system.

You can do this by running the following commands:

```bash
sudo apt update
sudo apt upgrade
```

## Setting up user accounts

### Reset all passwords

If you are using a cloud provider, you should reset all passwords to ensure that
you are the only one with access to the server. Often cloud providers will give
you a root password or a password for the default user account which can be sent
over an insecure media such as email.

You can reset the password for a user by running the `passwd` command as the
user. You will be prompted to enter the new password.

### Create a non-root user account with sudo access

If the user account you are using is the root account, you should create a new
user account with sudo access. You should use this account for your day-to-day
tasks and only use the root account when necessary. Not using the root account
protects you from accidentally running commands that could harm your system and
acts as a good
[defence in depth](<https://en.wikipedia.org/wiki/Defense_in_depth_(computing)>)
tactic.

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

## Nice to haves

### Ubuntu Pro (Free for personal use)

### Install Docker

- https://docs.docker.com/engine/install/ubuntu/
- https://docs.docker.com/engine/install/linux-postinstall/
- Configure log rotation
  https://docs.docker.com/config/containers/logging/json-file/

### Configure Shell

- ZSH
- OhMyZSH
- `PROMPT="$fg[cyan]%}$USER@%{$fg[cyan]%}%m ${PROMPT}"`
