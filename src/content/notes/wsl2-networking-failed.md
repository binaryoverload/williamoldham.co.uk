---
title: "WSL2 - Failed to configure mirrored networking"
pubDate: 2026-03-23
tags: ["windows"]
---

Sometimes, WSL2 in mirrored networking mode decides to fail to configure the network with this error:

```
wsl: An internal error occurred.
Error code: CreateInstance/CreateVm/ConfigureNetworking/0x8007054f
wsl: Failed to configure network (networkingMode Mirrored), falling back to networkingMode None.
```

I spent a while searching for a solution other than "reinstall everything" and, thanks to [PomegranateAny6410 on Redit](https://www.reddit.com/r/wsl2/comments/1ndiayx/comment/ndzyhv8/?context=3), I found one!

Simply run `wsl --install --no-distribution` followed by `wsl --shutdown`. Just like magic, the network is restored in WSL 🎉
