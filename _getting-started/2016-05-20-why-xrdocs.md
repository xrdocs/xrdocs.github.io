---
published: true
date: '2016-05-20 10:05 -0700'
title: Why XRdocs?
permalink: /getting-started/why-@xrdocs
author: Jose Palafox
tags:
  - iosxr
  - cisco
---


XR 6.0.0 shifts IOS-XR to a 64-bit linux operating system. Now, Cisco's core routing products can join the vibrant Linux ecosystem. We’re committed to engaging the community in various open source projects and working in a collaborative model with our partners and customers.   

XRdocs is one critical step in our journey. Here you’ll find tools that enable developer work flows, cleaner, user focused documentation and demos, more robust usability guides, a variety of internal and external tools and integrations. 

Virtual Platform
------
First you’ll find a virtual edition of IOS-XR 6.1.1. You’ll notice this is ahead of the public release of the product. We’re releasing early to enable our community to integrate their automation and monitoring tools with XR prior to the release of the product.

Releases of the virtual platform should be made frequently as new bugs are fixed and features are added until the release of the software for the hardware platforms. This will allow our community to more quickly deploy and manage our software and take a test drive of new features like Streaming Telemetry.

The virtual platform is packaged as a Vagrant Box for Virtual Box, and as an ISO. We’re exploring other formats, too. The tools we’ve used to transform the base ISO to Vagrant/Virtual Box are also being released to transparently show how we’re transforming the image. Our goal is to distribute the right end artifact but should you want to make it in house, or change and improve the workflow you can.

YDK
-----
You’ll also see the Yang Developer Kit (YDK). Again we’ve released the tools needed to generate a python library based on Yang models supported by the box as well as the libraries themselves. The tool is open source and pluggable and in the future could produce other libraries as needed by the community.

Linux Tools
------

In addition to these tools you’ll find useful integrations with leading configuration management tools, and soon, plugins for common monitoring and alerting tools. 

In addition to getting a virtual edition of XR, you’ll notice the licensing terms are simple and meant to support a CI/CD workflow in the future. In the future hope to see customers working with us to define the provisioning syntax for a tool like Terraform to generate representative test topologies, execute a configuration management tool like Puppet, Ansible, or Chef to configure the test environment, and then execute tests using tools like Robot, Behave, or ServerSpec. 

Some tools like Puppet and Chef, and many monitoring and analytics tools require an agent to run on the router. XR supports two modes of hosting applications. Using the standard Virsh commands you can bring up a container on the router. A tutorial on how to do this is provided using Ansible. By packaging an application in a container and moving it to the router you can use packages built for a distribution of choice and you control how many resources that application uses.

Alternatively, you may want to install packages in the Wind River Linux container along with IOS-XR. Should you want to do that we’ve provided a virtual machine of our base operating system and some additional packages like yum, rpm, createrepo, etc. so that you can build packages for our operating system. We’ve also provided a repository of base packages.

These tools should enable a community to build, integrate, and test applications and configuration.
