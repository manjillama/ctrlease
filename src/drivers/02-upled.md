---
title: UPLED LED Driver
slug: upled
author: Prashanta
manufacturer: Thorlabs
connectionType: USB
application: Optogenetics
date: 2023-04-27
githubURL: https://github.com/kharelpk/OpenHardwareAPI/blob/main/light_sources/tlup.py
instrument: Light Sources
instrumentSlug: light-sources
---


### **Thorlabs upLED Driver**
This Thorlabs upLED driver can be controlled via USB communication.

### **Prerequisite**
Please download and install the Thorlabs [upLED Driver](https://www.thorlabs.com/software_pages/ViewSoftwarePage.cfm?Code=upSERIES), which installs .dll files necessary to communicate with the upLED driver. This means you'll also need a computer running on Windows OS. Make sure to choose the right 32-bit or 64-bit version. 


### **Example**
Below, we provide an example showing you how to communicate with your led driver using a high-level API in python. The API is implemented as a wrapper on top of Thorlabs .dll.

```python
import time
from upLED import TLUP

def main():
    dll_path = "path/to/your/dll/file.dll"  # Replace with the path to your DLL file.

    resource_name = "USB0::0x1313::0x8079::P1000000::INSTR"  # Replace with your upLED driver's resource name. Replace with the path to your DLL file. TLUP_64.dll for 64-bit system and TLUP_32.dll for 32-bit system.
    tlup = TLUP(dll_path)

    # Initialize the upLED driver
    instrument_handle = tlup.init(resource_name, id_query=True, reset_device=True)
    print(f"Initialized upLED driver with handle: {instrument_handle}")

    # Measure device temperature
    device_temperature = tlup.measure_device_temperature(instrument_handle)
    print(f"Measured device temperature: {device_temperature} °C")

    # Enable LED output
    enable_led_output = True
    tlup.switch_led_output(instrument_handle, enable_led_output)
    print(f"Enabled LED output")

    # Set LED current setpoint
    led_current_setpoint = 0.5
    tlup.set_led_current_setpoint(instrument_handle, led_current_setpoint)
    print(f"Set LED current setpoint to {led_current_setpoint} A")

    time.sleep(5)  # Let the LED output be enabled for 5 seconds

    # Disable LED output
    enable_led_output = False
    tlup.switch_led_output(instrument_handle, enable_led_output)
    print(f"Disabled LED output")

    # Close the upLED driver
    tlup.close(instrument_handle)
    print(f"Closed upLED driver with handle: {instrument_handle}")

if __name__ == "__main__":
    main()
```

This example code does the following:

1. Imports the necessary modules and the TLUP class from the upLED.py file provided.
2. Defines a main function that:
    - Initializes the upLED driver with the given resource name.
    - Measures the device temperature.
    - Enables the LED output.
    - Sets the LED current setpoint.
    - Waits for 5 seconds with the LED output enabled.
    - Disables the LED output.
    - Closes the upLED driver.

Make sure to replace the `dll_path` variable with the correct path to your DLL file. Typically, TLUP_64.dll can be found inside `C:\Program Files\IVI Foundation\VISA\Win64\Bin\TLUP_64.dll` in 64-bit windows system and `C:\Program Files (x86)\IVI Foundation\VISA\WinNT\Bin\TLUP_32.dll ` for 32-bit system. Replace `resource_name` with your LED driver's resource name.
