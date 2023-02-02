# Kafka Configuration

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
