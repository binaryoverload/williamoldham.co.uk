---
title: "Kubernetes Sysctl Watches"
pubDate: 2026-05-17
tags: ["linux", "kubernetes"]
---

When running a Kubernetes cluster, you may run into issues with the default sysctl settings for inotify watches.

By default, `fs.inotify.max_user_instances` is set to 128, which can lead to error messages like "too many open files" when viewing logs or other commands.

The solution is to create a file called `/etc/sysctl.d/99-inotify.conf` with the following content:

```bash
fs.inotify.max_user_instances=8192
fs.inotify.max_user_watches=524288
```

Then, run `sudo sysctl --system` to apply the changes.