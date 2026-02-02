---
title: "Generating Predictable Random Strings in Linux"
pubDate: 2026-02-02
tags: ["linux"]
---

Often, you will want to generate random strings for identifiers, passwords or other use cases. 

The advice I often see is to use `openssl rand -base64 32`. This method does work, but comes with some disadvantages:
- Base64 encoding can leave you with `/`, `=` and `+` characters, which are usually undesirable
- Specifying a number of bytes can make it bit tricky to get the string length you want

My preferred method (which I keep forgetting so I'm writing it down...) is to use:

```bash
$ tr -dc 'A-Za-z0-9' </dev/urandom | head -c 12
t3TpDEwZjkZr
```

This gives you a predictable length output, and you know exactly what characters will be included. If you want to include other characters, just add them to the `tr` command:

```bash
$ tr -dc 'A-Za-z0-9_\-!' </dev/urandom | head -c 12
!sn_CfP-LgI6
```

(Note the `\` for the `-` character!)