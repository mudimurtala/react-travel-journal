## GitHub Copilot Chat

- Extension Version: 0.23.1 (prod)
- VS Code: vscode/1.96.0
- OS: Linux
- Remote Name: wsl

## Network

User Settings:
```json
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 140.82.121.5 (359 ms)
- DNS ipv6 Lookup: Error (76 ms): getaddrinfo ENOTFOUND api.github.com
- Proxy URL: None (3 ms)
- Electron fetch: Unavailable
- Node.js https: HTTP 200 (1215 ms)
- Node.js fetch (configured): HTTP 200 (834 ms)
- Helix fetch: HTTP 200 (1214 ms)

Connecting to https://api.individual.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.113.21 (117 ms)
- DNS ipv6 Lookup: Error (7 ms): getaddrinfo ENOTFOUND api.individual.githubcopilot.com
- Proxy URL: None (1 ms)
- Electron fetch: Unavailable
- Node.js https: HTTP 200 (1224 ms)
- Node.js fetch (configured): HTTP 200 (1175 ms)
- Helix fetch: HTTP 200 (1253 ms)

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).