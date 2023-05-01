<p align="center">
<img alt="CtrlEase" src="https://ctrlease.gatsbyjs.io/logo.svg" width="60" />
</p>
<h1 align="center">
  CtrlEase
</h1>

# Project Introduction

**CtrlEase** aims to provide high-level APIs to access your hardware, making instrumentation accessible to any scientist and engineer. With reusable building blocks of code, scientists and engineers will spend less time interfacing with instruments but more time utilizing their devices.

Below you can find a documentation on how to add new instrument and drivers.

- [Add new instruments and drivers](#add-new-instruments-and-drivers)
- [Project installation](#project-installation)

Clone the project

```sh
$ git clone https://github.com/manjillama/ctrlease.git
```

<hr/>

## Add new instruments and drivers

You don't need to setup or install the project to add new instruments and drivers.

### Create a new instrument

Navigate inside `src/data` folder. Add a new instrument (name, description, slug) to `instrument.json` file.

```
// i.e.
{
    "name": "Power meters",
    "description": "Devices for measuring optical power.",
    "slug": "power-meters"
  },
```

You can validate the json by [testing it out](https://jsonlint.com/) before uploading the code.

### Create a new driver

Navigate inside `src/drivers`. Create a new file with `.md` extension.

> Filename's have a specific convention to make it easier for the developers. For e.g. 01-pm100usb.md here, `01` is the instrument driver serial number. `pm100usb` is the driver title itself.

On the top of the driver file you can add the metadata fields.

```
---
title: PM100D
slug: pm100d
author: Nikola
manufacturer: Thorlabs
connectionType: USB
application: Test and Measurement
date: 2023-04-27
instrument: Power meters
instrumentSlug: power-meters
---
```

Important: The fields `instrument` and `instrumentSlug` has to exactly match the name and slug property of a instrument inside the `src/data/instrument.json` file.

Visit [basic writing and formatting syntax](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) to getting started on how to format a `.md` file.

<hr/>

> After you've finished adding new instruments or drivers. Push the code in remote `dev` branch and then send a PR to the `main` branch. All commits to main branch will trigger the CI/CD build pipeline which will automatically deploying the changes.

## Project installation

### Configuration

In the root project folder, copy the `.env.example` and save as `.env.development`. Update the variables.

### Install dependencies

Inside the root project root folder.

```bash
$ npm install
```

### Start developing

Navigate into root folder and start it up.

```bash
cd ctrlease/
npm run develop
```

## Legal

© Ctrl Ease. All rights reserved.
