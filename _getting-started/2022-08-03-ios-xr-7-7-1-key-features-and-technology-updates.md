---
published: true
date: '2022-08-03 16:48 -0700'
title: IOS-XR 7.7.1 Key Features and Technology Updates
excerpt: >-
  This blog post covers new feature updates to IOS-XR 7.7.1 and their business
  impacts. 
author: Akhil Sehgal
permalink: /getting-started/ios_xr771_key_features_and_technology_updates
tags:
  - iosxr
---
{% include toc %}
# IOS-XR 7.7.1 Key Features

## Key Technology Updates in XR 7.7.1: 
- Segment Routing 
- EVPN
- BGP
- RON 
- Peering 
- Security


## IOS-XR 7.7.1 Software Availability
IOS-XR 7.7.1 is Generally Available (GA) for release. 8000, ASR9K 64-bit, NCS5500/NCS5700, NCS560, NCS540, XRv9K, and XRd are supported in this release. 

## Overview 
- Feature updates among technologies 
- Software PID's for product portfolio 
- New hardware supported 


## Segment Routing

Segment Routing provides complete control over the forwarding paths by combining simple network instructions. It does not require any additional protocol. In some cases, it removes unnecessary protocols simplifying your network. 

SR does not require any path signaling. Hence, per-flow state only needs to be maintained at the ingress node of the SR domain increasing your network flexibility while reducing cost.  

Segment Routing runs natively on an MPLS or IPv6 data plane. A simple software upgrade will enable your hardware to run it. Also, SR can coexist with your existing LDP network, making the migration painless. 

XR 7.7.1 features improvements to the automation product, helping brown-field clientage, and removes limitations on platforms. Cisco Optimization Engine (COE) v4.0 requires optimization in certain capabilities within SR-PCE. XR 7.7.1 features the ability to configure a centralized solution to override PCC-initiated objectives and help the customer deploy constraints as override actions. 

### COE v4.0 

- First in industry for customers to visualize their multicast tree live in the network 
- Enable visualization of tree-SID use cases in multicast 
- Double COE scale across industry

### SRv6-Services: 
- L2 EVPN QoS Enhancement 
- L3 Services QoS Enhancement

### SR-PCE: Objective override of PCC-Initiated policies 
- Several SPs have old devices in the network where, as an example, the old PCC can delegate computation of IGP metric policies but does not support a PCC-initiated “low delay” policy. 
- In such deployments, a centralized solution (PCE-centric) can be implemented to “override” a PCC-initiated optimization objective (ex: IGP cost) to another objective (ex: delay) and help the customer deploy the intended policy SLA albeit this PCC limitation.


## EVPN for Private Line Emulation (PLE)  

The new PLE (Private Line Emulation) Port Adaptor adds the capability that allows the transparent transfer of ODU/SONET/SDH/Eth/FC packets over MPLS networks without the need for a dedicated equipment and allows interconnecting optical networks with Ethernet networks. 

PLE-MPA Capable NCS5700 end points on both ends will provide native client interfaces. This is achieved by circuit emulation. Circuit Emulation over Packet is a way to carry any circuits over packet switched network placing client bitstreams into packet payload with appropriate pseudo-wire emulation headers and is sent over a packet switched network (PSN). 

Supported client types:
- 1GE, 10GE 
- OC48/STM16, OC192/STM64 
- Fibre channel (1, 2, 4, 8 ,10 ,16 and 32G) 
- OTU2, OTU2e 
- Any mix of client types supported 
- Supported in NCS-55A2 and NCS-57C3


## Security
- Cisco DDOS Protect integration provides critical protection for DDOS attacks for SP infrastructure 
- This update contains improvements to strengthen security by increasing password protection among the following platforms: IOS-XR, NCS5000, NCS5500, NCS5700, ASR9000, ASR9900, NCS540, NCS560, to meet enhanced password guidelines. 

## NCS 5700 
- Testing and improvements for DCI and L3VPN 
- Scalable improvements for hybrid DCI by compressing memory entries and expandability 
- Peering use cases in BGP flowspec 
- Unicast Reverse Path Forwarding (uRPF) and port mirroring updates for monitoring and mitigation actions for security threats such as DDoS attacks
- Supports BGP Route Groups (RG) to allow customers to control VPN routing by subscribing up to 12 pre-defined RGs 


## Coming Soon
- PLE support (phase 2) 
- Updates to NCS 5700 for scalability and peering 
- IOS-XR 7.8.1 

# New Hardware Support 
#### NCS 5500:

| PID  				|  Description |
|-------------------|---------------------------------------------------------------------------|
| NC55-OIP-02   | Support for modular port adapter for PLE  |
| QDD-4X100G-LR-S   | Cisco 400GBASE Quad Small Form-Factor Pluggable Double Density (QSFP-DD)   |


#### NCS 560 New Optics Support:

| PID  					|  Description |
|-------------------|---------------------------------------------------------------------------|
| GLC-GE-DR-LX SFP  | Cisco 100/1000BASE-LX SFP   |
| SFP-GE-Z  | Cisco 1000BASE-ZX SFP Transceiver Module  |
| QSFP-100G-LR4-I | Cisco 100GBASE CFP Module |


#### NCS 540 New Optics Support

|  PID 				|  Description |
|-------------------|---------------------------------------------------------------------------|
| SFP-10G-SR-I   |  Support for Cisco 10GBASE SFP+ Module |
|SFP-10G-ZR-I| Support for Cisco 10GBASE SFP+ Module  |
| SFP-10G-AOCxM   | Support for Cisco 10GBASE SFP+ Module  |
| SFP-10G-T-X  | SFP+ 10GBASE-T Transceiver Module  |
| QSFP-100G-ZR4-S  | Cisco 100GBASE QSFP-100G Modules  |

#### 8000 Series New Optics Support 

| PID               | Description                                                               |
|-------------------|---------------------------------------------------------------------------|
| QSFP-100G-LR-S    | Cisco 100GBASE Quad Small Form-Factor Pluggable (QSFP)                    |
| QSFP-100G-PSM4-S  |      Cisco 100GBASE Quad Small Form-Factor Pluggable (QSFP)               |
| QDD-4X100G-LR-S   | Cisco 400GBASE Quad Small Form-Factor Pluggable Double Density (QSFP-DD)  |
| QDD-400G-LR4-S    |          Cisco 400GBASE Quad Small Form-Factor Pluggable Double Density (QSFP-DD)                                                                 |
| SFP-10G-SR-S      | Cisco 10GBASE SFP+ Modules                                                |
| SFP-10G-ER-S      | Cisco 10GBASE SFP+ Modules |


# IOS-XR 7.7.1 Software PIDs

#### Ordering Information ASR 9000: 

|PID |Description|
|-------------------|---------------------------------------------------------------------------|
| XR-A9K-X64-07.7  |  Cisco IOS XR IP/MPLS Core Software - IOS-XR 64 Bit |
| XR-A9K-X64K9-07.7  | Cisco IOS XR IP/MPLS Core Software 3DES - IOS-XR 64 Bit  |

#### Ordering Information NCS 5500:

| PID  |  Description |
|-------------------|---------------------------------------------------------------------------|
| XR-NC55-PK9-07.07  | Cisco IOS XR IP/MPLS Software 3DES   |
| XR-NC55-P-07.07  | Cisco IOS XR IP/MPLS Software  |
| XR-7.7-TRK  | IOS-XR Software Tracking PID 7.7  |
|XR-7.7-K9-TRK | IOS-XR K9 Software Tracking PID 6.6  |


#### Ordering Information NCS 560:

|PID |Description|
|-------------------|---------------------------------------------------------------------------|
| XR-N560-7.7-TRK  |  NCS 560 Series IOS-XR Software Tracking PID 7.7 |
| XR-N560-7.7-K9-TRK  | NCS 560 Series IOS-XR Software K9 Tracking PID 7.7|

#### Ordering Information NCS 540:

|PID |Description|
|-------------------|---------------------------------------------------------------------------|
| XR-N540-7.7-TRK  |  NCS 540 Series IOS-XR Software Tracking PID 7.7 |
| XR-N540-7.7-K9-TRK  | NCS 540 Series IOS-XR Software K9 Tracking PID 7.7|

#### Ordering Information NCS 5000:

|PID |Description|
|-------------------|---------------------------------------------------------------------------|
| XR-N50-7.7-TRK  |  Cisco IOS XR IP/MPLS Software 3DES |
| XR-N50-7.7-K9-TRK  | Cisco IOS XR IP/MPLS Software|
