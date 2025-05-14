import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Clock, Check, Activity, Zap, BarChart } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export default function Solution() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative w-full h-[70vh] flex items-center">
        {/* Background with Gradient */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-clotguard-600 to-white z-0"></div>
        </div>

        <div className="container px-4 md:px-6 relative z-10 text-center">
          <AnimatedSection animation="fade-up">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white mb-6">
              The ClotGuard Advantage
            </h1>
            <p className="mx-auto max-w-[700px] text-white md:text-xl mb-8">
              A revolutionary approach to trauma care that saves precious seconds when they matter most.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <AnimatedSection animation="slide-right">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-clotguard-red">The Problem</h2>
                <p className="text-xl text-gray-800 font-medium">
                  Every second counts in trauma. Delayed care means lives lost.
                </p>
                <p className="text-gray-600">
                  Hemorrhage, or uncontrolled bleeding, is a major cause of preventable deaths, especially when the body
                  is affected by traumatic injuries. It's estimated that hemorrhage accounts for 1.5 million global
                  deaths every year, while excessive blood loss in injuries accounts for roughly 2 million deaths each
                  year, for civilian-related accidents.
                </p>
                <p className="text-gray-600">
                  On the battlefield, roughly 81.5% of fatalities were due to hemorrhage, and all fatalities occurred
                  before the casualties reached a medical facility. Around 80% of 'Died of Wounds' on the battlefield
                  (DOW) deaths were caused by hemorrhages from major trauma.
                </p>
                <p className="text-gray-600">
                  Current methods to treat hemorrhages, both in civilian accidents and on the battlefield, are not
                  suitable for traumatic injuries of that scale.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="mx-auto lg:ml-auto">
                <div className="relative rounded-lg overflow-hidden shadow-xl border-2 border-clotguard-100">
                  <Image
                    src="/images/patch-diagram.png"
                    alt="ClotGuard patch diagram"
                    width={500}
                    height={400}
                    className="rounded-lg object-contain w-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-clotguard-red/90 to-transparent p-4">
                    <p className="text-white text-sm font-medium">ClotGuard Microneedle Patch Technology</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-clotguard-red mb-4">Our Solution</h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
              ClotGuard proposes a unique anti-blood loss system that transports platelets to the site of bleeding to
              create blood clots and prevent excess bleeding, saving crucial time for paramedics to treat the injury.
            </p>
          </AnimatedSection>

          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center mb-12">
            <AnimatedSection animation="slide-right" className="order-2 lg:order-1">
              <div className="relative">
                <Image
                  src="/images/patch-on-arm.png"
                  alt="ClotGuard patch on arm"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" className="space-y-4 order-1 lg:order-2">
              <h3 className="text-2xl font-bold text-gray-800">How ClotGuard Works</h3>
              <p className="text-gray-600">
                All the technology used is stored in a patch, similar to that of a diabetes patch. The patch includes a
                storage cartridge where freeze-dried platelets attached to nanobots are stored, is equipped with sensors
                that detect different bleeding biomarkers such as thrombin and oxygen levels, and has already secured
                tubes for immediate platelet delivery.
              </p>
              <p className="text-gray-600">
                When bleeding is detected, the patch provides the dosage of nanobots and platelets into the body through
                the already attached tubes, which will travel to the bleeding site and create blood clotting to prevent
                further excessive blood loss.
              </p>
              <p className="text-gray-600">
                ClotGuard patches can be specifically applied before military personnel go onto the battlefield, for
                immediate reaction to detected bleeding when traumatic injury occurs. The freeze-dried platelets can be
                stored at varying temperatures until needed and can last for up to three years before needing a
                replacement.
              </p>
              <p className="text-gray-600">
                ClotGuard patches can also be 5x-10x cheaper than the constant supply of gauze for a year because of
                their reusable and long-lasting methods, as well as technology.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Technology Process Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-clotguard-red mb-4">Our Process</h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
              Using freeze-dried platelets, delivered by nanobots, to prevent traumatic hemorrhage
            </p>
          </AnimatedSection>

          <div className="space-y-16">
            {/* Step 1 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <AnimatedSection animation="fade-up">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-clotguard-100 text-clotguard-red font-bold">
                      1
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Creating Platelets for ClotGuard Patch</h3>
                  </div>
                  <p className="text-gray-600">
                    Freeze-dried platelets are sourced from blood donors or lab-grown using stem cell tech. Platelets
                    are preserved using cryoprotectants, then lyophilized (freeze-dried) for long-term storage inside
                    the patch. These platelets are stored in sterile, single-use microchambers within the patch.
                  </p>
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <h4 className="font-bold text-clotguard-red mb-2">What are Platelets?</h4>
                    <p className="text-sm text-gray-600">
                      Tiny blood cells in blood that form clots and stop or prevent bleeding. Platelets can be easily
                      freeze-dried for long-term storage until use. Once the freeze-dried platelets are released into
                      the bloodstream, they will reactivate and become active for effective use at the damaged area.
                    </p>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="relative">
                    <Image
                      src="/images/platelets-microscope.png"
                      alt="Microscope view of platelets (purple dots) and red blood cells"
                      width={500}
                      height={500}
                      className="rounded-lg object-contain w-full mb-4"
                    />
                    <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded text-xs text-gray-700 max-w-[250px]">
                      Microscope view: Purple dots are platelets, circular structures are red blood cells (dyed for
                      visibility)
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Step 2 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <AnimatedSection animation="fade-up" delay={200} className="order-2 lg:order-1">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="relative">
                    <Image
                      src="/images/nanobot-microscope.png"
                      alt="Microscopic view of a nanobot"
                      width={500}
                      height={300}
                      className="rounded-lg object-contain w-full mb-4"
                    />
                    <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded text-xs text-gray-700 max-w-[250px]">
                      Electron microscope image of a biocompatible nanobot designed to navigate blood vessels and
                      deliver clotting agents. The structured design allows for precise movement and targeted delivery.
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" className="order-1 lg:order-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-clotguard-100 text-clotguard-red font-bold">
                      2
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Creating Nanobots for ClotGuard Patch</h3>
                  </div>
                  <p className="text-gray-600">
                    Nanobots are made using biocompatible materials (like silica, gold, or smart polymers). Each nanobot
                    is programmed to: Detect vascular damage, migrate toward the injury site, and activate as well as
                    assist with clot formation. They carry clotting agents such as thrombin, which will assist the
                    hemostasis process.
                  </p>
                  <p className="text-gray-600 mt-2">
                    The microscopic robots shown in the image are engineered at the nanoscale with precision components
                    that allow them to navigate through blood vessels and respond to biochemical signals at injury
                    sites. Their structure includes sensors for detecting bleeding and compartments for carrying
                    platelets and clotting factors.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Step 3 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <AnimatedSection animation="fade-up">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-clotguard-100 text-clotguard-red font-bold">
                      3
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">ClotGuard Patch Activation</h3>
                  </div>
                  <p className="text-gray-600">
                    The patch contains biosensors that detect: blood leakage, blood pressure drop, and tissue pH change.
                    Upon detection, it: Rehydrates the freeze-dried platelets, deploys nanobots through the patch's
                    microneedles, and sends a signal to alert the user's emergency contact.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" delay={200}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="relative">
                    <Image
                      src="/images/activated-platelets.png"
                      alt="Activated platelets under electron microscope"
                      width={500}
                      height={500}
                      className="rounded-lg object-contain w-full mb-4"
                    />
                    <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded text-xs text-gray-700 max-w-[250px]">
                      Electron microscope image of activated platelets with extended pseudopods, ready to form clots at
                      injury sites. These platelets are similar to those deployed by the ClotGuard patch.
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>

            {/* Step 4 */}
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <AnimatedSection animation="fade-up" delay={200} className="order-2 lg:order-1">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="relative">
                    <Image
                      src="/images/hemostasis-diagram.png"
                      alt="Hemostasis process diagram showing the four stages of blood clotting"
                      width={600}
                      height={500}
                      className="rounded-lg object-contain w-full mb-4"
                    />
                    <div className="absolute bottom-4 right-4 bg-white/80 backdrop-blur-sm p-2 rounded text-xs text-gray-700 max-w-[250px]">
                      The natural hemostasis process: 1) Vessel constriction, 2) Primary hemostasis with platelet clot
                      formation, 3) Secondary hemostasis with coagulation factors, 4) Stable fibrin clot formation.
                      ClotGuard accelerates and enhances this process.
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="fade-up" className="order-1 lg:order-2">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-clotguard-100 text-clotguard-red font-bold">
                      4
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Preventing Blood Loss Method</h3>
                  </div>
                  <p className="text-gray-600">
                    Nanobots and platelets work together to accelerate the natural hemostasis process shown in the
                    diagram. When deployed, ClotGuard's platelets initiate the clotting cascade (primary hemostasis),
                    while nanobots amplify clotting signals and deliver additional coagulation factors to strengthen the
                    clot (secondary hemostasis).
                  </p>
                  <p className="text-gray-600 mt-2">
                    For external wounds, microneedles provide localized delivery directly to the injury site. For
                    internal hemorrhage, nanobots circulate through the bloodstream and target the source of bleeding
                    using advanced biosensors that detect chemical signals released by damaged tissue.
                  </p>
                  <p className="text-gray-600 mt-2">
                    The ClotGuard system can reduce clotting time by up to 60% compared to the body's natural response,
                    creating stable clots that prevent further blood loss until medical professionals can provide
                    definitive care.
                  </p>
                </div>
              </AnimatedSection>
            </div>

            {/* Step 5 */}
            <div className="max-w-3xl mx-auto">
              <AnimatedSection animation="fade-up">
                <div className="bg-gray-50 p-8 rounded-lg shadow-md border border-gray-100 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-clotguard-100 text-clotguard-red font-bold">
                      5
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Deactivation of Nanobots After Blood Clotting</h3>
                  </div>
                  <p className="text-gray-600">
                    After clotting is achieved, nanobots detect clotting factor levels and pressure normalization. The
                    intelligent sensors within each nanobot monitor the surrounding environment for signs that
                    hemostasis has been successful, including stabilized blood pressure and normalized clotting factor
                    concentrations.
                  </p>
                  <p className="text-gray-600">
                    Once their mission is complete, the nanobots enter a programmed biodegradation phase, breaking down
                    into harmless byproducts that are safely processed and eliminated by the body. This self-terminating
                    feature ensures that the nanobots don't interfere with normal bodily functions after they've served
                    their purpose.
                  </p>
                  <p className="text-gray-600">
                    The biodegradation process typically completes within 24-48 hours, leaving no trace of the
                    intervention except for the stabilized clot that continues to protect the wound until natural
                    healing can occur.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-clotguard-red mb-4">Impact</h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
              ClotGuard is revolutionizing trauma care with measurable results
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-3">
            <AnimatedSection animation="fade-up" delay={0}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-clotguard-50 flex items-center justify-center">
                    <BarChart className="h-8 w-8 text-clotguard-red" />
                  </div>
                  <h3 className="text-2xl font-bold">5-10x</h3>
                  <p className="text-gray-600">More effective than current treatments</p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-clotguard-50 flex items-center justify-center">
                    <Activity className="h-8 w-8 text-clotguard-red" />
                  </div>
                  <h3 className="text-2xl font-bold">30-60%</h3>
                  <p className="text-gray-600">Slower bleeding</p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={400}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow h-full">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-clotguard-50 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-clotguard-red" />
                  </div>
                  <h3 className="text-2xl font-bold">10-30 min</h3>
                  <p className="text-gray-600">Extended survival time</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-clotguard-red mb-4">Advantages</h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">Why ClotGuard is the future of trauma care</p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection animation="fade-up" delay={0}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Check className="h-12 w-12 text-clotguard-red" />
                  <h3 className="text-xl font-bold">Preventable Deaths</h3>
                  <p className="text-gray-600">
                    Traumatic hemorrhage deaths can be prevented with our rapid response technology
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Clock className="h-12 w-12 text-clotguard-red" />
                  <h3 className="text-xl font-bold">Extended Survival</h3>
                  <p className="text-gray-600">
                    Extending the survival period from initial injury occurrence gives medical professionals more time
                    to save lives
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={400}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Zap className="h-12 w-12 text-clotguard-red" />
                  <h3 className="text-xl font-bold">Rapid Response</h3>
                  <p className="text-gray-600">
                    Automatic detection and immediate deployment of clotting agents when seconds count
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Learn More Section with Medium Article Link */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <AnimatedSection animation="fade-up">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-clotguard-red">Dive Deeper</h2>
                <p className="text-xl text-gray-800 font-medium">
                  Tiny Bots, Big Impact: Revolutionizing Healing with Platelet Nanobots
                </p>
                <p className="text-gray-600">
                  In our detailed Medium article, we delve heavily into how engineered platelet nanobots could
                  accelerate healing, minimize medical complications, and redefine the future of medicine itself.
                  Platelet nanobots aren't just science fiction; in fact, they're turning into a real solution for
                  traumatic healing and care.
                </p>
                <p className="text-gray-600">
                  Learn more about how these tiny engineered machines navigate the bloodstream alongside red blood
                  cells, targeting disease at the cellular level for precision treatment.
                </p>
                <div className="pt-4">
                  <a
                    href="https://medium.com/@sophiadhami123/tiny-bots-big-impact-revolutionizing-healing-with-platelet-nanobots-4dac2e9fc6aa"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="bg-clotguard-red hover:bg-clotguard-dark">
                      Read the Full Article
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="mx-auto lg:ml-auto">
                <div className="relative rounded-lg overflow-hidden shadow-xl border-2 border-clotguard-100">
                  <Image
                    src="/images/nanobots-bloodstream.png"
                    alt="Nanobots navigate the bloodstream alongside red blood cells"
                    width={600}
                    height={400}
                    className="rounded-lg object-contain w-full"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-clotguard-red/90 to-transparent p-4">
                    <p className="text-white text-sm font-medium">
                      Nanobots navigate the bloodstream alongside red blood cells, targeting disease at the cellular
                      level for precision treatment.
                    </p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-clotguard-red text-white">
        <div className="container px-4 md:px-6 text-center">
          <AnimatedSection animation="fade-up" className="mx-auto max-w-[800px] space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">See ClotGuard in Action</h2>
            <p className="text-lg md:text-xl">
              Explore our prototype and see how we're making trauma care faster and more effective.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/prototype">
                <Button className="bg-white text-clotguard-red hover:bg-gray-100">
                  Explore Our Prototype
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
