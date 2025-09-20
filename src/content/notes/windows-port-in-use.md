---
title: "Windows Port in Use Error"
pubDate: 2025-09-20
tags: ["windows"]
---

On recent versions of Windows (seems to mainly be 24H2), I've noticed an increase in the number of "Port in Use" errors when trying to run development servers on Windows. 

If, like me, you find yourself wondering why a port you know is free is being reported as in use, fear not! 

The cause is to to with the reserved ports feature in Windows, which can handily reserve ports which you're trying to use 🙄

The fix is simple, just restart the `winnat` service.

```powershell
Restart-Service winnat
```

To show the reserved ports, you can use the following command:

```powershell
netsh interface ipv4 show excludedportrange protocol=tcp
```