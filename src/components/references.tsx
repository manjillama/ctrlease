import React from 'react';

type Reference = {
  name: string;
  url: string;
};

const References: React.FC = () => {
  const references: Reference[] = [
    { name: "AcQ4", url: "https://acq4.readthedocs.io/en/latest/" },
    { name: "Auspex-BBN-Q", url: "https://github.com/BBN-Q/Auspex" },
    { name: "Crappy", url: "https://github.com/LaboratoireMecaniqueLille/crappy" },
    { name: "Cryostat GUI", url: "https://github.com/Cryostat-GUI/Cryostat-GUI" },
    { name: "Experimentor", url: "https://github.com/aquilesC/experimentor" },
    { name: "Hardware-control", url: "https://github.com/topics/hardware-control?o=asc&s=stars" },
    { name: "InstrumentKit", url: "https://github.com/instrumentkit/InstrumentKit" },
    { name: "Instrumental", url: "https://github.com/mabuchilab/Instrumental" },
    { name: "Labdrivers", url: "https://github.com/masonlab/labdrivers" },
    { name: "Lantz", url: "https://github.com/lantzproject/lantz" },
    { name: "Micro-manager", url: "https://github.com/micro-manager/pycro-manager" },
    { name: "Place", url: "https://github.com/PALab/place" },
    { name: "PyGMI", url: "https://github.com/Argonne-National-Laboratory/PyGMI" },
    { name: "Pylabinstruments", url: "https://github.com/psklight/pylabinstrument" },
    { name: "PyLabLib", url: "https://pylablib.readthedocs.io/en/latest/" },
    { name: "PyMeasRF", url: "https://github.com/JAnderson419/PyMeasRF" },
    { name: "Pymeasure", url: "https://pymeasure.readthedocs.io/en/latest/" },
    { name: "PyMoDaq", url: "https://pymodaq.cnrs.fr/en/pymodaq-dev/" },
    { name: "Pythics", url: "https://github.com/dursobr/Pythics" },
    { name: "Qcodes", url: "https://qcodes.github.io/Qcodes/" },
    { name: "Qtlab", url: "https://github.com/heeres/qtlab" },
    { name: "Qudi", url: "https://ulm-iqo.github.io/qudi-generated-docs/html-docs/md_README.html" },
    { name: "ScopeFoundry", url: "https://www.scopefoundry.org/" },
    { name: "Taurus", url: "https://www.taurus-scada.org/" },
  ];

  const renderTag = (reference: Reference, index: number) => (
    <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-teal-700 mr-2 mb-2">
      <a href={reference.url} target="_blank" rel="noopener noreferrer">
        {reference.name}
      </a>
    </span>
  );

  return (
    <div>
      <h1 id="introduction" className="text-2xl font-bold mt-5 mb-2">
        References
      </h1>
      <p className="mb-2">
        A number of open-source python packages exist to control scientific
        instruments. Each has their own framework and a list of devices they
        support. We encourage our users to check them out as well.
      </p>
      <div className="my-4">
        {references.map((reference, index) => renderTag(reference, index))}
      </div>
    </div>
  );
};

export default References;


