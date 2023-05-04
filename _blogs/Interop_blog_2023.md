---
published: true
date: '2023-05-4 09:23 +0200'
title: Interop Blog 2023
permalink: /blogs/interop_blog_2023
author: Sai Gopalakrishnan
excerpt: The following blog outlines the highlights from the EANTC Interop Showcase at MPLS SD & AI Net World 2023 in Paris.
tags:
  - iosxr
  - cisco
position: hidden
sitemap: false
---

{% include toc icon="table" title="interop" %}

## Intro

The Seventeenth century English poet John Donne famously wrote that “No man is an island.” Similarly, one can say “No vendor is an island” as in today's complex networking landscape, most communication service providers rely on multiple vendors to build up their network. As communication service providers take for granted that components from multiple vendors work seamlessly together to ensure smooth and efficient network operations, interoperability between vendors is of critical importance.

## The Twin Pillars
Innovation is in Cisco’s DNA (18% of Cisco revenues are spent on [Research and Development](https://investor.cisco.com/news/news-details/2023/CISCO-REPORTS-SECOND-QUARTER-EARNINGS/default.aspx) as it helps us to stay ahead of the curve in this highly competitive networking industry. Interoperability fosters an environment of collaboration between vendors and underpins our customer success. So, at Cisco, we consider innovation and interoperability as twin pillars of our technology philosophy, each playing a vital role in shaping the future of the other. Our unwavering commitment to foster innovation and seamless interoperability empowers us to drive cutting-edge solutions that not only push the boundaries of what is possible but also ensure that these solutions work harmoniously together, unlocking new opportunities and delivering unparalleled value to our customers.

## Contribution
Cisco is strongly committed to open standards, driven by standard bodies through inclusive and transparent processes. Cisco has been a leading force in this realm, actively engaging and contributing to esteemed organizations such as the Internet Engineering Task Force (IETF), as well as other prominent industry associations such as International Telecommunication Union (ITU-T), Metro Ethernet Forum (MEF), Institute of Electrical and Electronics Engineers (IEEE), and more.

## EANTC
The second important aspect of interoperability is to showcase it works when put to the test. This is why we actively support vendor neutral forums such as what is provided by European Advanced Networking Test Center [(EANTC)](https://eantc.de/) for hosting public multi-vendor interoperability tests. This year, the scope of these tests covered: Segment Routing (SR-MPLS and SRv6), Ethernet Virtual Private Network (EVPN) including Layer2 E-LAN, E-LINE, E-TREE and also Layer3 IP Gateway services, Software Defined Networking (Signaling SR policies, NETCONF/YANG, Telemetry-gNMI and OpenConfig), and Clock synchronization (Fronthaul with O-RAN specs, Precision Time Protocol (PTP), enhanced SyncE, and more).

By participating in scenarios involving EVPN, SRv6, SR-MPLS, and SDN technologies, Cisco showed multi-vendor readiness of their solutions with regard to network slicing, traffic engineering, policing, and packet network synchronization,” said Carsten Rossenhövel, Managing Director and Co-Founder of EANTC. He added, “Cisco provided significant contributions to the success of the EANTC SDN interoperability event 2023, involving four router product lines and a network automation solution. The test event was a major success, with over 80 attendees from 17 vendors. This year’s testing program reflected the continued industry shift towards software-defined networking; many testing scenarios involving programmability and manageability. In particular, Cisco products smoothly interoperated in the SRv6 area, where we tested compressed segment IDs (µSID) for the first time.
{: .notice--success}

## Snapshots

![interop blog 2023 1.1.jpg]({{site.baseurl}}/images/interop blog 2023 1.1.jpg){: .align-center}
_The engineers who made the interop a huge success! (Photo credit: @ EANTC AG)_
{: .text-center}

![interop blog 2023 1.2.jpg]({{site.baseurl}}/images/interop blog 2023 1.2.jpg){: .align-center}
_EANTC Interop Showcase at MPLS SD & AI Net World 2023, All the gears racked up (Photo credit: © EANTC AG_
{: .text-center}

![interop blog 2023 1.3.jpg]({{site.baseurl}}/images/interop blog 2023 1.3.jpg){: .align-center}
_The engineers burning the metaphorical midnight oil. (Photo credit: © EANTC AG)_
{: .text-center}

![interop blog 2023 1.4.jpg]({{site.baseurl}}/images/interop blog 2023 1.4.jpg){: .align-center}
_SRv6 interop showcase @ the EANTC booth in MPLS SD & AI Net World 2023._
{: .text-center}

## Highlights

The key highlights from EANTC public Interop 2023 are:

- Cisco participated with our entire portfolio of Provider Connectivity product line consisting of physical routers, virtual routers, and automation suite – 8000, ASR9K, NCS540, NCS5700, Crosswork and IOS XRd.
- Segment Routing v6: Industry-first micro segment ID (usid) multi-vendor interop. Several test cases including Topology Independent Loop Free Alternate (TI-LFA), Flex Algo, Summarization, Unreachable Prefix Announcement (UPA) and Segment Routing Traffic Engineering (SR-TE) policies with usid.
- SR-MPLS test cases: including Flexible Algorithm Prefix Metric (FAPM), Fast Re-routing (FRR), performance measurement, failure discovery and SR traffic steering.
- Ethernet Virtual Private Network (EVPN): EVPN with Segment Routing transport (MPLS and IPv6), EVPN enhancements, and EVPN interworking.
- 400G OpenZR+: An SR-MPLS (OSPF) control plane was established between multiple nodes and bi-directional traffic through three nodes, all of which were connected using ZR+ optics.
- Software Defined Networking (SDN): Path Computation Element Communication Protocol (PCEP), NETCONF/YANG across SRv6 and SR-MPLS data planes, streaming Telemetry using gNMI and OpenConfig data models.
- Clock synchronization: Class C, Class D, enhanced SyncE and O-RAN Fronthaul synchronization in mobile open RAN scenarios.
    
If you are interested in getting access to more details about the tests and results, download the [EANTC report](https://eantc.de/fileadmin/eantc/downloads/events/2023/EANTC-InteropTest2023-TestReport.pdf). In the coming weeks, [Jose Liste](https://www.linkedin.com/in/jose-liste-a8565248/), Distinguished Engineer, will post a blog to do a technical deep dive and share some key learnings and best practices. Finally, we are planning to host a Cisco Knowledge Webinar on this topic, stay tuned!


