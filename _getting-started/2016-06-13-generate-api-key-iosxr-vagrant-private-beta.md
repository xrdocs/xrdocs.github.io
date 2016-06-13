---
published: true
date: '2016-06-13 16:37 -0500'
title: Generate API-KEY to access IOS-XR Vagrant box
author: Akshat Sharma
excerpt: Steps to download the private-beta IOS-XR Vagrant box
permalink: /getting-started/steps-download-iosxr-vagrant
---

{% include base_path %}

Since the IOS-XR Vagrant box is currently under Private-Beta, there is a slightly more involved/secure process for downloading the vagrant boxes.  

**This is just a one time process. Once you have your API-KEY, you can start downloading boxes without going through this again.**
{: .notice--info}


Follow along and we'll get you going:  

*  To begin, make sure you have a CCO-ID. If you don't have one, create it here:  

   <http://tools.cisco.com/RPF/register/register.do>
   
   **You will need to activate your account once you receive an Email from Cisco, post sign-up. Without the activation, your subsequent login will fail.**
   {: .notice--warning}
   
*  Request Access to the Vagrant box by filling up the form here:

   <{{ site.url }}/getting-started/iosxr-vagrant-beta>
   
   **You will get a confirmation email from us stating that you have been granted access**
   {: .notice--info}
   
*  Once you have access, browse to the artifactory that houses the vagrant box, here:

   <http://devhub.cisco.com/artifactory/webapp/#/login>

   Click on SSO login as shown below:

   ![artifactory-login](https://xrdocs.github.io/xrdocs-images/assets/tutorial-images/artifactory-login.png){: .align-center}
   {: .notice}
  

*  you will be redirected to the page below. Login using your CCO ID

   ![sso-login](https://xrdocs.github.io/xrdocs-images/assets/tutorial-images/sso-login.png){: .align-center}
   {: .notice}

*  Once you're in, Click on your user-name on the top right to open up the profile settings:  

   ![open-artifactory-profile](https://xrdocs.github.io/xrdocs-images/assets/tutorial-images/browse-to-user-profile.png){: .align-center}
   {: .notice}

*  Now generate an API-KEY as shown below:  

   ![generate-api-key](https://xrdocs.github.io/xrdocs-images/assets/tutorial-images/generate-key.png){: .align-center}
   {: .notice}

*  Click on  "Copy key to clipboard" to copy your API-KEY for browser-free operation!
  
   ![copy-api-key](https://xrdocs.github.io/xrdocs-images/assets/tutorial-images/copy-api-key.png){: .align-center}
   {: .notice}


**Now head over to the   
[IOS-XR Vagrant Quick Start guide]({{ site.url }}/application-hosting/tutorials/iosxr-vagrant-quickstart)   
to learn how to use this API-KEY and download the box.**
{: .notice--success}



