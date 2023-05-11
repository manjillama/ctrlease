// import { HeadFC } from 'gatsby';
// import React from 'react';
// import { SEO } from '../components/seo';
// import Layout from '../components/layout';

// const TutorialPage = () => (
//   <Layout>
//     <div className="max-w-[1024px] mx-auto py-20">
//       <h1 className="text-2xl font-bold">Tutorials</h1>
//       <p>This is tutorials page. To be added...
//         Things to put here.
//         1. What exactly are we trying to do?
//         2. How to use this website?
//         3. How to find resources?
//         4. How to connect to the COM port?
//         5. Various communication protocols?
//         6. What's next?
//          🤙</p>
//     </div>
//   </Layout>
// );

// export default TutorialPage;

// export const Head: HeadFC = () => <SEO title={'Tutorials | CtrlEase'} />;

import { HeadFC, Link } from 'gatsby';
import React from 'react';
import { SEO } from '../components/seo';
import Layout from '../components/layout';
import ArchImage from '../images/architecture_summary.png'
import CodeBlock from '../components/codeblock'; // Import the CodeBlock component
import References from '../components/references';


const TutorialPage = () => (
  <Layout>
    <div className="max-w-[1024px] mx-auto py-0 flex relative">
      <aside className="w-1/4 pr-4 sticky top-0 h-screen">
        <h2 className="text-lg font-bold mb-4">Tutorials</h2>
        <ul className="text-sm font-normal">
          <li className="mb-2"><a href="#introduction" className="text-gray-500 hover:text-teal-500">Introduction</a></li>
          <li className="mb-2"><a href="#communication-protocols" className="text-gray-500 hover:text-teal-500">Communication Protocols</a></li>
          <li className="mb-2"><a href="#find-resources" className="text-gray-500 hover:text-teal-500">How to find device address</a></li>
          <li className="mb-2"><a href="#find-resources" className="text-gray-500 hover:text-teal-500">References</a></li>
        </ul>
      </aside>
      <div className="w-3/4 pl-4">
        <h1 id="introduction" className="text-2xl font-bold mb-4">Introduction</h1>
        <p className="mb-2">The <Link to="/drivers" className="text-teal-600 hover:text-teal-500 hover:underline"> Devices</Link> section currently provides examples of opensource hardware APIs to control a range of scientific instruments. For each device, you can follow the Github link and download drivers to try it for yourself! 
            We are actively working on adding more drivers to this list and supporting more languages. 
            </p>
        <p className="mb-2">These easy-to-use APIs are implemented as abstractions to low-level drivers and communication protocols used to interact with scientific instruments. 
        Building on top of these hardware APIs, we offer a cloud-based solution that integrates APIs from multiple vendors, streamlining communication, automating measurements, and generating AI-powered workflows in one place. 
        If you are interested in using web APIs to control these instruments or would like us to add a driver to this list, please reach out <Link to="/contact" className="text-teal-600 hover:text-teal-500 hover:underline">
              to us
            </Link>{'.'}</p>
        <Link to="/">
            <img src={ArchImage} className="mx-auto block mb-4 mt-3" />
          </Link>
        <p className="mb-2">Web APIs have transformed software communication, data sharing, and application integration in the last decade. 
        Our platform brings similar convenience and flexibility to the hardware domain. 
        With pre-built templates, users spend less time interfacing with their devices and more time using them for research and development projects in a modern, browser-based user interface. </p>

        <p className="mb-2">Users can save a lot of time using our
        <Link to="https://ctrlease.netlify.app/" className="text-teal-600 hover:text-teal-500 hover:underline"> AI-Powered Automation Workflow. </Link> 
        This intelligent functionality allows users to generate automation scripts for a wide variety of devices such as motorized stages, 
        lasers, sensors, cameras, and more. Users simply need to input specific prompts based on the devices currently supported. 
        For example, a prompt could be as simple as "Home the CNC machine, and take a picture using the ueye camera after homing." 
        Alternatively, it can handle more complex instructions, like "I have two Thorlabs stages with brushless DC motor controllers. 
        I am using the Pure Photonics laser and measuring optical power using a Thorlabs power meter.
         I want to run gradient search optimization on the two stages to maximize optical power." 
         The platform swiftly responds with a Python script and additional code information. 
         This AI-driven process drastically cuts down time previously spent on writing drivers and generating code, making hardware automation swift, efficient, and user-friendly.</p>
      
      
      <h1 id="communication-protocols" className="text-2xl font-bold mt-5 mb-2">Communication Protocols</h1>
        <p className="mb-2">When it comes to communicating with scientific instruments, there are a bunch of different ways to make it happen. 
        Over the years, people have used a variety of communication protocols to help computers and instruments work together. 
        Our hardware APIs use more than one communication protocols listed below.
        Let's take a look at some of the most popular ones.
        </p>
        <ul className="list-outside list-decimal">
          <li className="ml-8 mb-1"><strong>GPIB (General Purpose Interface Bus):</strong> GPIB, also known as IEEE-488, is an established protocol for connecting and controlling multiple instruments in a test and measurement setup. Developed in the late 1960s, it enables computers to send data, commands, and responses to instruments through a parallel data bus.</li>
          <li className="ml-8 mb-1"><strong>RS-232 (Recommended Standard 232):</strong> RS-232 is another well-known protocol for connecting various devices, including scientific instruments. It is designed for asynchronous data transmission over short distances (usually less than 50 feet). Despite the emergence of newer protocols, RS-232 remains in use with some older devices.</li>
          <li className="ml-8 mb-1"><strong>USB (Universal Serial Bus):</strong> USB is a widely adopted method for connecting and communicating between computers and peripheral devices, including scientific instruments. It offers advantages such as plug-and-play functionality, hot-swapping capabilities, and relatively fast data transfer rates.</li>
          <li className="ml-8 mb-1"><strong>Ethernet/LAN (Local Area Network):</strong> Ethernet is a standard choice for wired communication in local networks. Many scientific instruments now support Ethernet, providing high-speed communication and seamless integration with existing network infrastructures.</li>
          <li className="ml-8 mb-1"><strong>LXI (LAN eXtensions for Instrumentation):</strong> LXI is an extension of Ethernet, specifically designed for test and measurement instruments. It builds upon Ethernet by adding features such as precise synchronization, web-based instrument control, and easy integration with various programming environments.</li>
          <li className="ml-8 mb-1"><strong>Bluetooth and Wi-Fi:</strong> Wireless communication protocols like Bluetooth and Wi-Fi have also been adopted in the field of scientific instruments. These wireless technologies enable instruments and computers or mobile devices to communicate without any physical connections, offering greater flexibility and convenience.</li>
        </ul>

        <h1 id="find-resources" className="text-2xl font-bold mt-10 mb-4">How to find device address (Windows)</h1>
        <p>
          To find available COM ports and devices on Windows, you can:
        </p>
        <ul className="list-disc list-inside">
          <li>Open Device Manager, expand the "Ports (COM & LPT)" section, and look for devices listed as "COM#". The number indicates the COM port number.</li>
          <li>For USB devices, expand the "Universal Serial Bus controllers" section and look for your device. You can view more details about the device by right-clicking on it and selecting "Properties".</li>
        </ul>
        <h2 className="text-xl font-semibold mt-4 mb-4">Using the PyVISA Library</h2>
        <p>
          To find available resources using Python and the `pyvisa` library, you can follow these steps:
        </p>
        <ol className="list-decimal list-inside">
          <li>Install the `pyvisa` library:</li>
          <CodeBlock code="pip install pyvisa" />
          <li>Create a Python script to list available resources:</li>
          <CodeBlock code={`import visa

rm = visa.ResourceManager()
resources = rm.list_resources()

for resource in resources:
    print(f"Resource: {resource}")`} />
        </ol>
        <p>
          The `pyvisa` library allows you to interact with various resources, such as serial, USB, and GPIB devices.
        </p>
        <References />
      </div>

    </div>
  </Layout>
);

export default TutorialPage;

export const Head: HeadFC = () => <SEO title={'Tutorials | CtrlEase'} />;

