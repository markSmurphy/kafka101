# Kafka Configuration

## Overview

### Cluster Details

Identification:
Name: `cluster_kafka101`
Cluster ID: `lkc-qr50xp`

*Endpoints*:
Bootstrap server: `pkc-lz6r3.northeurope.azure.confluent.cloud:9092`
REST endpoint: `https://pkc-lz6r3.northeurope.azure.confluent.cloud:443`

> Use the [Kafka REST API](https://confluent.cloud/environments/env-3r85rj/clusters/lkc-qr50xp/clients/new?attr=cluster%20settings&language=rest-api) to interact with your cluster and produce [records](https://docs.confluent.io/cloud/current/api.html?ajs_aid=2167f548-a74f-4ac6-9990-99bf77f39455&ajs_uid=1110189#tag%2FRecords-%28v3%29)

*Cloud details*:
Provider: `AZURE`
Region: `northeurope`
Availability: `Single zone`

---

### Topics

Topic name: `topic_files`
Max size: `8388608` bytes (`8192` KB | `8` MB)

---

## Create Kafka Environment

Using [confluent.cloud](https://confluent.cloud/home)

Click **View environments**

Click **+ Add cloud environment**

Give it a name. `kafka101` in this example.

![New Kafka Environment](screenshots/kafka-create-environment.png)

Click on **Begin Configuration** for the tier you need. In this example we're using *Advanced* tier to get all the cloud region options and data lineage.

![Begin Configuration](screenshots/kafka-begin-configuration.png)

Review you environment's details:

![Alt text](screenshots/kafka-env-details.png)

## Create Kafka Cluster

Choose a cloud provider, a region and click on **Enable**.

![Choose Cloud Region](screenshots/kafka-cloud-region.png)

Create a Cluster

![Create Cluster](screenshots/kafka-create-cluster.png)

Choose a region for teh Cluster

![Cluster Region](screenshots/kafka-cluster-region.png)

Choose **Skip payment**

Give the cluster a name, `cluster_kafka101` in this example, and review the configuration as some options can't be changed once the cluster is launched.

![Cluster Name and Config Review](screenshots/kafka-cluster-name.png)

Click **Launch cluster**
