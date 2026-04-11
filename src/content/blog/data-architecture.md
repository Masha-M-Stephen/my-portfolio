---
title: "Data Architecture"
slug: "data-architecture"
date: "2024-05-19"
excerpt: "Evaluating and redesigning data architecture for a manufacturing company, from decentralized silos to a centralized data warehouse."
category: "Data Science"
image: "/images/blog/data-architecture/image-1.png"
---
<a id="page1"></a>1

### Data Architecture



<a id="page2"></a>2

### Data Architecture

The purpose of this paper is to evaluate the current data architecture of Masha’s Manufacturing Company, identify waste, and propose changes that align to the enterprise’s strategy. The changes aim to improve data quality, accessibility, storage, and security, therefore supporting strategic goals. 

Masha’s Manufacturing Company is a multinational Smart-Car manufacturing company that operates business to business and sales cars at wholesales to other companies. MMC currently has a decentralized data architecture. Different systems manage different aspects of the business, leading to data silo inconsistencies. The phone data is stored in Cisco Systems, Customer data is stored in AS400, order allocation performed in hjump, while Sales and Finance data in transactional databases. Some of the systems operate independently, leading to data synchronization issues. Figure 1 visual shows the current data architecture.

*Fig. 1 Current State*

![Current state data architecture diagram](/images/blog/data-architecture/image-1.png)

MMC needs to create a centralized data warehouse to consolidate data from all the different sources. This integration will solve inconsistencies and enable easy access to the same data (Snowflake. (n.d.)).  Privacy and security groups will determine which business entity can access confidential information and who they can share it with. The overall team will establish data governance practices to ensure data quality, consistency, and compliance 9* Data governance*. (2023, May 4)). MMC would greatly benefit from advanced analytics and real-time data processing. Figure 2 shows the future state.

*Fig. 2 Future State*

![Future state data architecture diagram](/images/blog/data-architecture/image-2.png)

The proposal aligns with enterprise strategies by promoting data -driven decision making in all operations. Consolidating data into centralized storage will enable better strategic planning, allowing the company to quickly pivot when needed. The framework will enhance data governance by improving security and protecting against data breaches. By leveraging data as an asset, MMC will gain insights, scale with ease, enhance operations and customer experience (Sven B., J., Henning D., Asin T. (2021, January 26)) . These changes will facilitate data ingestions, control and storage, distribution and access, and insights to drive the business initiatives. 

References

*Data governance*. (2023, May 4). Databricks. [https://www.databricks.com/discover/data-governance](https://www.databricks.com/discover/data-governance)

Snowflake. (n.d.). *Why data centralization is vital for today’s companies.* [https://www.snowflake.com/trending/data-centralization](https://www.snowflake.com/trending/data-centralization)

Sven Blumberg, Jorge Machado, Henning Doller, Asin Tavakoli. (2021, January 26). *Breaking through data-architecture gridlock to scale AI*. McKinsey & Company. [https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/breaking-through-data-architecture-gridlock-to-scale-ai](https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/breaking-through-data-architecture-gridlock-to-scale-ai)

<a id="page5"></a>5

![](/images/blog/data-architecture/image-3.jpeg)

