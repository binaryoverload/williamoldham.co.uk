---
title: "Monitoring RKE2 with the k8s-monitoring and rancher-monitoring charts"
pubDate: 2026-02-11
languages: ["YAML"]
---

I'm a big fan of using Grafana's [`k8s-monitoring` helm chart](https://grafana.com/docs/grafana-cloud/monitor-infrastructure/kubernetes-monitoring/configuration/helm-chart-config/helm-chart/) - it makes setting up monitoring for Kubernetes clusters pretty simple.

However, when used with RKE2, due to the hardening not everything can be monitored with Alloy out of the box. This is where the [`rancher-monitoring` chart](https://github.com/rancher/charts/tree/HEAD/charts/rancher-monitoring) comes in handy. It includes a modified version of [PushProx](https://github.com/prometheus-community/PushProx) to allow scraping of metrics from components which can't normally be reached.

```yml
# Replace the namespace that you want the resources to be created in
# I put mine in the same namespace as the k8s-monitoring chart
namespaceOverride: k8s-monitoring

# Personally, I install the Prometheus Operator CRDs separately
# If you want to install them with the chart, set this to true
crds:
  enabled: false

## RKE2 Monitoring Proxies ##
## This is the main event! These components include Rancher PushProx to allow
## scraping of metrics from components which only bind to localhost
rke2ControllerManager:
  enabled: true
  serviceMonitor:
    enabled: true
  clients:
    nodeSelector:
      "node-role.kubernetes.io/master": null # RKE2 doesn't set this label by default, so remove it from the default config
      "node-role.kubernetes.io/control-plane": "true" # This is the correct label

rke2Scheduler:
  enabled: true
  serviceMonitor:
    enabled: true
  clients:
    nodeSelector:
      "node-role.kubernetes.io/master": null # RKE2 doesn't set this label by default, so remove it from the default config
      "node-role.kubernetes.io/control-plane": "true" # This is the correct label

rke2Etcd:
  enabled: true
  serviceMonitor:
    enabled: true

rke2Proxy:
  enabled: true
  serviceMonitor:
    enabled: true

# Use this component because k8s-monitoring won't recognise the RKE2 CoreDNS metrics port :(
coreDns:
  enabled: true
  serviceMonitor:
    enabled: true

# This disabled the creation of the default PrometheusRules for alllll the different components
# You may want to enable this if you're not managing them separately
defaultRules:
  create: false

## ServiceMonitors that aren't needed ##
## These ServiceMonitors are not needed as they're already included in k8s-monitoring
kubeApiServer:
  enabled: false

kubelet:
  enabled: false

# I don't need to monitor Rancher - if you want to you can enable this
rancherMonitoring:
  enabled: false

## Services that aren't needed ##
## These services are not needed as they're already included in k8s-monitoring
kubeStateMetrics:
  enabled: false

nodeExporter:
  enabled: false

prometheus-adapter:
  enabled: false

prometheus:
  enabled: false

prometheusOperator:
  enabled: false

alertmanager:
  enabled: false

grafana:
  enabled: false
  defaultDashboardsEnabled: false

windowsExporter:
  enabled: false

# This option is only needed when you have node-exporter, prometheus-adapter or kube-state-metrics
upgrade:
  enabled: false
```