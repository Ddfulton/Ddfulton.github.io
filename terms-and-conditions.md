---
output:
  pdf_document: default
  html_document: default
---
# Carolina Cloud Terms and Conditions

**Version 1.0 -- April 2026**

## 1. Definitions

- **"Carolina Cloud"** refers to Carolina Cloud LLC, with offices in Chapel Hill, NC.
- **"Customer"** refers to the individual or entity that registers for and uses the Services.
- **"Services"** refers to cloud compute, storage, networking, and related services provided by Carolina Cloud.
- **"Console"** refers to the Carolina Cloud web-based management interface.
- **"Credits"** refers to prepaid or promotional balances applied to a Customer's account.

## 2. Account and Access

2.1. Customers must register an account via the Console and provide accurate contact and billing information.

2.2. Customers are responsible for maintaining the confidentiality of their account credentials and for all activity under their account.

2.3. Carolina Cloud reserves the right to suspend or terminate accounts that violate these Terms.

## 3. Services

3.1. Carolina Cloud provides on-demand cloud compute instances (Virtual Machines and Containers), object storage, and related infrastructure services.

3.2. Service specifications, instance types, and current pricing are published on the Console and may be updated from time to time. Customers will be notified of material pricing changes at least 30 days in advance.

3.3. Carolina Cloud provides access to third-party software (e.g. Sentieon) on certain instance types. Third-party software may carry an additional license fee above the base Carolina Cloud compute cost, charged only while the instance is in a Running state. Customers may also bring their own license (BYOL) where supported. Availability, pricing, and licensing terms for third-party software are subject to change based on upstream agreements.

## 4. Pricing and Payment

4.1. **On-Demand Pricing.** Compute and storage are billed on a pay-as-you-go basis at the rates published on the Console. Carolina Cloud offers three storage tiers:

- **Hot Storage (NVMe):** Local high-performance NVMe storage on the host machine (5,000+ MB/s read/write). Hot storage is a component of compute instances and is billed at $0.01 per 100 GB per hour.
- **Object Storage (S3-compatible):** Provided via Wasabi, Carolina Cloud's S3 storage partner. Accessible via S3 API or mounted automatically at `/home/ccloud/ccloud-s3` on all instances except Virtual Machines. Located in Wasabi's us-central-1 data center. Billed at $7 per TB per month.
- **Cold/Archive Storage:** Provided via Geyser, Carolina Cloud's cold storage partner. Carolina Cloud has agreed a partnership with Geyser, pending technical implementation as of April 1, 2026. Priced at $1.55 per TB per month for the Los Angeles location and $1.75 per TB per month for the London location. Customers will be notified when available.

4.2. **Data Transfer.** Carolina Cloud does not charge for data transfer. Ingress (data in) and egress (data out) are both free. Data transfer fees charged by third-party cloud providers (e.g. AWS, GCP, Azure) for data leaving their platforms are the Customer's responsibility and are not controlled by Carolina Cloud.

4.3. **Reasonable Use of Data Transfer.** Free data transfer is provided for standard computational and scientific workloads, including but not limited to transferring datasets, analysis results, and genomic data. Data transfer may not be used for content delivery network (CDN) purposes, large-scale public file distribution, or any use where Carolina Cloud is primarily serving as a data distribution platform rather than a compute or storage platform. Carolina Cloud reserves the right to contact the Customer and apply transfer limits if usage is inconsistent with standard computational workloads.

4.4. **Prepaid Credits.** Customers may purchase prepaid credits at a discount. The discount scales from 0% to 30% off at $1,000 in prepaid credits. Above $1,000, the discount is 30% off. Prepaid credits, once issued, do not expire, are non-refundable, and are usable across all Carolina Cloud services.

4.5. **Promotional/Trial Credits.** Trial credits issued by Carolina Cloud do not expire and are non-refundable for cash. Trial credits may not be transferred between accounts.

4.6. **Billing.** Usage is metered every 20 minutes. For credit card customers, charges are invoiced monthly via Stripe and charged automatically to the card on file. If a credit card payment is declined, Stripe will retry the charge according to its standard retry schedule. If a card is repeatedly declined, Carolina Cloud reserves the right to terminate all customer compute instances and storage with no backups after providing 14 days' written notice.

4.7. **Taxes.** Prices are inclusive of North Carolina sales tax where applicable. In the event that Carolina Cloud is required to collect and remit sales tax to the State of North Carolina, Carolina Cloud will handle such collection and remittance. All other taxes, duties, or levies (including VAT in other jurisdictions) are the sole responsibility of the Customer.

## 5. Service Level Agreement (SLA)

5.1. **Uptime.** Carolina Cloud's data center facility (Segra, Charlotte, NC) guarantees 99.99% infrastructure uptime. As most cloud provider downtime results from human or software error rather than infrastructure failure, Carolina Cloud does not provide a single composite uptime guarantee. Instead, Carolina Cloud compensates for any and all downtime as described below. Carolina Cloud has maintained 100% uptime for the first six months of operation.

5.2. **Downtime Compensation.** In the event of any unscheduled downtime, Customers are eligible for compensation of 3x the fees attributable to the period of downtime issued as account credit, or 2x the fees issued as cash refund, at the Customer's election. Carolina Cloud may choose to issue additional compute credits beyond the 2x cash or 3x credit refund at its sole discretion.

5.3. **Exclusions.** The downtime compensation policy does not apply to: (a) scheduled maintenance with at least 48 hours' notice; (b) force majeure events; (c) issues caused by Customer applications, configurations, or third-party services; (d) abuse or violation of these Terms.

5.4. **Sole Remedy.** Downtime compensation as described in Section 5.2 is the Customer's sole and exclusive remedy for any service interruption.

## 6. Data and Security

6.1. **Data Residency.** Compute instances and hot storage (NVMe) are located in Segra's data center facility in Charlotte, NC, managed by TierNet. Object storage is located in Wasabi's us-central-1 data center. Cold storage (Geyser) data center locations are Los Angeles and London. Customers may provision their own Wasabi buckets in other regions if desired.

6.2. **Security.** Carolina Cloud implements physical, network, and operational security controls as described in the Carolina Cloud Security Processes document and the Carolina Cloud Shared Responsibility Model, both available upon request. Security and compliance documentation from Carolina Cloud's infrastructure partners (Segra and Tier.Net) is also available upon request.

6.3. **Shared Responsibility.** Carolina Cloud is responsible for security OF the cloud (physical infrastructure, network, virtualization layer). Customers are responsible for security IN the cloud (their applications, data, access controls, encryption, and compliance). This division of responsibility is discussed in greater detail in Carolina Cloud's security documentation, available upon request.

6.4. **Data Ownership.** Customers retain full ownership of all data they upload, process, or store on the Services. Carolina Cloud will not access, use, or share Customer data except as necessary to provide the Services or as required by law.

6.5. **Data Deletion.** Upon account termination or Customer request, Carolina Cloud will delete all Customer data within 30 days. Customers are responsible for exporting their data before termination.

6.6. **No Backups.** Carolina Cloud does not provide managed backup services. This is a deliberate design tradeoff to retain maximum disk I/O performance for scientific and computational workloads. Customers are responsible for maintaining their own backup and data redundancy strategy.

6.7. **HIPAA.** For Customers processing Protected Health Information (PHI), a separate Business Associate Agreement (BAA) is available upon request.

6.8. **Law Enforcement.** In the event of any criminal activity or law enforcement inquiry relating to the Services, Carolina Cloud shall cooperate fully with relevant law enforcement authorities to the extent required by applicable law, including the preservation and disclosure of data and records as directed by valid legal process.

## 7. Acceptable Use

7.1. Customers must not use the Services for any unlawful purpose, to distribute malware, to conduct attacks on third-party systems or to mine cryptocurrency without prior written consent.

7.2. Carolina Cloud reserves the right to suspend Services immediately if a Customer's usage poses a security risk to the platform or other customers.

## 8. Intellectual Property

8.1. Carolina Cloud retains all rights to its platform, software, APIs, and documentation. These Terms do not grant the Customer any rights to Carolina Cloud's intellectual property beyond the right to use the Services.

8.2. Customers retain all rights to their own software, data, and intellectual property.

## 9. Limitation of Liability

9.1. To the maximum extent permitted by law, Carolina Cloud's total liability for any claims arising from the Services shall not exceed the total fees paid by the Customer in the 12 months preceding the claim.

9.2. Carolina Cloud shall not be liable for indirect, incidental, consequential, or punitive damages, including lost profits or data loss.

## 10. Term and Termination

10.1. These Terms are effective from the date of account registration and continue until terminated.

10.2. Either party may terminate at any time. Billing will stop immediately on termination of all Carolina Cloud compute and storage.

10.3. Carolina Cloud may terminate immediately if the Customer breaches these Terms and fails to cure within 14 days of written notice.

10.4. Upon termination, outstanding balances become immediately due. Unused prepaid credits are non-refundable.

## 11. Dispute Resolution

11.1. In the event of any dispute arising out of or relating to these Terms, the parties agree to first attempt resolution through good-faith mediation before pursuing litigation. Mediation shall be conducted in Orange County, North Carolina, by a mutually agreed mediator. If mediation fails to resolve the dispute within 60 days, either party may pursue remedies available at law.

## 12. Changes to Terms

12.1. Carolina Cloud may update these Terms from time to time. Material changes will be communicated via email at least 30 days before taking effect. Continued use of the Services after changes take effect constitutes acceptance.

## 13. Governing Law

13.1. These Terms are governed by the laws of the State of North Carolina, USA. Any disputes shall be resolved in the courts of Orange County, North Carolina.

## 14. Contact

Carolina Cloud LLC
Chapel Hill, NC
Email: support@carolinacloud.io
