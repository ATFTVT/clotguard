export default function ProcessInfographic() {
  const steps = [
    {
      number: 1,
      title: "Creating Platelets for ClotGuard Patch",
      description:
        "Freeze-dried platelets are sourced from blood donors or lab-grown using stem cell tech. Platelets are preserved using cryoprotectants, then lyophilized (freeze-dried) for long-term storage inside the patch. These platelets are stored in sterile, single-use microchambers within the patch.",
    },
    {
      number: 2,
      title: "Creating Nanobots for ClotGuard Patch",
      description:
        "Nanobots are made using biocompatible materials (like silica, gold, or smart polymers). Each nanobot is programmed to: Detect vascular damage, migrate toward the injury site, and activate as well as assist with clot formation. They carry clotting agents such as thrombin, which will assist the hemostasis process.",
    },
    {
      number: 3,
      title: "ClotGuard Patch Activation",
      description:
        "The patch contains biosensors that detect: blood leakage, blood pressure drop, and tissue pH change. Upon detection, it: Rehydrates the freeze-dried platelets, deploys nanobots through the patch's microneedles, and sends a signal to alert the user's emergency contact.",
    },
    {
      number: 4,
      title: "Preventing Blood Loss Method",
      description:
        "Nanobots and platelets start to work hard together: Platelets initiate the clotting cascade, and nanobots amplify clotting signals and seal microtears. Microneedles will provide the localized delivery to external wounds. For internal hemorrhage, bots circulate and target the source of bleeding.",
    },
    {
      number: 5,
      title: "Deactivation of Nanobots After Blood Clotting",
      description:
        "After clotting is achieved, nanobots detect clotting factor levels and pressure normalization. They also become biodegradable, breaking down into harmless byproducts.",
    },
  ]

  const flowSteps = ["Rapid blood Loss", "Release of freeze-dried platelets", "Blood clotting at the wound"]

  const impactMetrics = [
    {
      value: "5-10x",
      description: "more effective than current treatments",
    },
    {
      value: "30-60%",
      description: "slower bleeding",
    },
    {
      value: "10-30min",
      description: "extended survival time",
    },
  ]

  const advantages = [
    "Traumatic hemorrhage deaths can be prevented",
    "Extending the survival period from initial injury occurrence",
  ]

  return (
    <div className="min-h-screen bg-white p-8 print:p-0">
      {/* Header */}
      <div className="bg-clotguard-red text-white py-8 rounded-t-lg print:rounded-none">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center">ClotGuard</h1>
          <p className="text-xl text-center mt-2">
            Using freeze-dried platelets, delivered by nanobots, to prevent traumatic hemorrhage
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 bg-white border border-gray-200 rounded-b-lg shadow-lg print:shadow-none print:border-0">
        {/* Process Flow */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center text-clotguard-red mb-6">Our Process</h2>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-8">
            {flowSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="bg-clotguard-50 p-4 rounded-lg text-center">
                  <h3 className="font-bold text-clotguard-red">{step}</h3>
                </div>
                {index < flowSteps.length - 1 && (
                  <div className="hidden md:block mx-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-clotguard-red"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            {/* The Problem */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-clotguard-red mb-4">The Problem</h2>
              <p className="text-gray-700 mb-4">
                Hemorrhage, or uncontrolled bleeding, is a major cause of preventable deaths, especially when the body
                is affected by traumatic injuries. It's estimated that hemorrhage accounts for 1.5 million global deaths
                every year, while excessive blood loss in injuries accounts for roughly 2 million deaths each year, for
                civilian-related accidents.
              </p>
              <p className="text-gray-700">
                On the battlefield, roughly 81.5% of fatalities were due to hemorrhage, and all fatalities occurred
                before the casualties reached a medical facility. Around 80% of 'Died of Wounds' on the battlefield
                (DOW) deaths were caused by hemorrhages from major trauma. Current methods to treat hemorrhages, both in
                civilian accidents and on the battlefield, are not suitable for traumatic injuries of that scale.
              </p>
            </div>

            {/* Our Solution */}
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <h2 className="text-2xl font-bold text-clotguard-red mb-4">Our Solution</h2>
              <p className="text-gray-700 mb-4">
                ClotGuard proposes a unique anti-blood loss system that transports platelets to the site of bleeding to
                create blood clots and prevent excess bleeding, saving crucial time for paramedics to treat the injury.
                All the technology used is stored in a patch, similar to that of a diabetes patch. The patch includes a
                storage cartridge where freeze-dried platelets attached to nanobots are stored, is equipped with sensors
                that detect different bleeding biomarkers such as thrombin and oxygen levels, and has already secured
                tubes for immediate platelet delivery.
              </p>
              <p className="text-gray-700 mb-4">
                When bleeding is detected, the patch provides the dosage of nanobots and platelets into the body through
                the already attached tubes, which will travel to the bleeding site and create blood clotting to prevent
                further excessive blood loss.
              </p>
              <p className="text-gray-700">
                ClotGuard patches can be specifically applied before military personnel go onto the battlefield, for
                immediate reaction to detected bleeding when traumatic injury occurs. The freeze-dried platelets can be
                stored at varying temperatures until needed and can last for up to three years before needing a
                replacement. ClotGuard patches can also be 5x-10x cheaper than the constant supply of gauze for a year
                because of their reusable and long-lasting methods, as well as technology.
              </p>
            </div>

            {/* Platelets Info */}
            <div className="bg-clotguard-50 p-6 rounded-lg mb-8 border border-clotguard-100">
              <h2 className="text-2xl font-bold text-clotguard-red mb-2">Platelets</h2>
              <p className="text-gray-700">
                Tiny blood cells in blood that form clots and stop or prevent bleeding. Platelets can be easily
                freeze-dried for long-term storage until use. Once the freeze-dried platelets are released into the
                bloodstream, they will reactivate and become active for effective use at the damaged area.
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div>
            {/* Process Steps */}
            <div className="space-y-6 mb-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="flex-shrink-0 flex items-start">
                    <div className="w-10 h-10 rounded-full bg-clotguard-red text-white flex items-center justify-center text-xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex-grow">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">{step.title}</h3>
                    <p className="text-gray-700 text-sm">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Impact and Advantages */}
            <div className="space-y-8">
              {/* Impact Metrics */}
              <div>
                <h2 className="text-2xl font-bold text-clotguard-red mb-4">Impact</h2>
                <div className="grid grid-cols-3 gap-4">
                  {impactMetrics.map((metric, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                      <h3 className="text-2xl font-bold text-clotguard-red">{metric.value}</h3>
                      <p className="text-gray-700 text-sm">{metric.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Advantages */}
              <div>
                <h2 className="text-2xl font-bold text-clotguard-red mb-4">Advantages</h2>
                <div className="space-y-2">
                  {advantages.map((advantage, index) => (
                    <div key={index} className="flex items-start gap-2">
                      <div className="flex-shrink-0 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-clotguard-red"
                        >
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      </div>
                      <p className="text-gray-700">{advantage}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-clotguard-red text-white py-4 mt-8 rounded-lg print:mt-0 print:rounded-none">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg font-bold">ClotGuard</p>
          <p className="text-sm">Revolutionizing Trauma Care</p>
        </div>
      </div>
    </div>
  )
}
