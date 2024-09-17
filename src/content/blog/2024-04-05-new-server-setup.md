---
title: "Setting up a new Ubuntu server"
type: "resource"
pubDate: "2024-09-08"
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

Ubuntu Server can be downloaded from the Ubuntu website at
https://ubuntu.com/download/server

At the time of writing, the current LTS (Long-Term Support - 10 Years of
updates!) version of Ubuntu is `24.04 LTS`.

### Installing Ubuntu Server

The installation of Ubuntu Server used a step by step wizard to guide you
through the process.

Ubuntu has a great tutorial on each of the steps here,
[click here to read it](https://ubuntu.com/tutorials/install-ubuntu-server).

### Update and Upgrade

```bash
sudo apt update
sudo apt upgrade
```

## Setting up user accounts

### Reset all passwords

Reset **_all_** passwords to ensure that you are the only one with access to the
server.

Reset the password for a user by running the
[`passwd`](https://linux.die.net/man/1/passwd) command as the user. You will be
prompted to enter the new password.

### Create a non-root user account with sudo access

If the user account you are using is the root account, you should create a new
user account to use for day-to-day tasks and only use the root account when
necessary.

To create a new user account with sudo access, you can run the following
commands:

```bash
adduser <username>
usermod -aG sudo <username>
```

The [`adduser`](https://linux.die.net/man/8/adduser) command will create a new
user account with the username you provide and prompt you for a password.

The [`usermod`](https://linux.die.net/man/8/usermod) command will add the user
to the `sudo` group which gives them access to the `sudo` command.

## Configuring and securing SSH access

If you are using a cloud provider, SSH will typically be enabled by default.
When setting Ubuntu up on your own hardware, you maybe need to install the SSH
server using the following command:

```bash
sudo apt install openssh-server
```

### Public Key Authentication

SSH commonly uses password authentication to log in to a server. However, this
suffers from a number of security vulnerabilities, such as brute force attacks.
Public key authentication is a more secure method of logging in to a server.

You can add your public key tothe
[`~/.ssh/authorized_keys`](https://linux.die.net/man/8/sshd#:~:text=AUTHORIZED_KEYS%20FILE%20FORMAT)
file on the server in the user's home directory. It will look something like
this (Either with `ssh-rsa` or `ssh-ed25519`):

```bash
ssh-rsa AAAAB3NzaC1yc2EAAAADAQABAAABgQDZl ... 8J5z user@host
ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAI ... 8J5z user@host
```

Depending on whether you are using MacOS, Linux, or Windows, you can follow the
guides below to generate a key pair:

- [Linux, MacOS and Windows Subsystem for Linux (WSL)](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/create-with-openssh/)
- [Windows](https://docs.digitalocean.com/products/droplets/how-to/add-ssh-keys/create-with-putty/)
- [1Password](https://developer.1password.com/docs/ssh/manage-keys)

Once you have generated a key pair, you can copy the public key to the server
using one of the methods in this guide:
[How to copy SSH keys to a server](https://www.digitalocean.com/community/tutorials/how-to-set-up-ssh-keys-on-ubuntu-20-04).

### Configuring SSH Server

Confire the SSH server to be more secure by editing the `/etc/ssh/sshd_config`
file.

The config lines may be commented out or already present in the file. Ensure you
search for the line to see if it is present.

---

1. Change the port that SSH listens on to a non-standard port.

This will help reduce the number of brute force attacks on your server.

You can choose any port number between 1024 and 65535 that is not already in use
by another service.

For example, to change the port to `2222`, you would edit

```bash
Port 2222
```

---

2. Disable root SSH access

This will prevent anyone from logging in as the root user over SSH.

```bash
PermitRootLogin no
```

---

3. Disable password authentication

**Important!** Ensure you have set up public key authentication before disabling
password login!

```bash
PasswordAuthentication no
```

---

4. Disable `DebianBanner`

Disabling `DebianBanner` will prevent the SSH server from giving away
information about the server's OS.

```bash
DebianBanner no
```

---

### Setup Fail2Ban

Fail2Ban is a service that monitors log files for failed login attempts and bans
the IP address of the attacker.

First install Fail2Ban:

```bash
sudo apt install fail2ban
```

Then copy the default configuration file:

```bash
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.d/custom.conf
```

Edit the `custom.confl` file to enable the SSH jail:

Make sure to set the `port` to the port you set in the SSH config file.

```toml
[sshd]
enabled = true
port = PORT
```

Finally, restart the Fail2Ban service:

```bash
sudo systemctl restart fail2ban
```

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
