import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Clock, Heart, Shield } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export default function Solution() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-clotguard-600 to-white">
        <div className="container px-4 md:px-6 text-center">
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
                  In trauma situations, uncontrolled bleeding can lead to death within minutes. The gap between injury
                  and treatment is where most preventable deaths occur.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-clotguard-red">•</span>
                    <span>Over 60,000 Americans die annually from traumatic bleeding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-clotguard-red">•</span>
                    <span>The majority of trauma deaths occur within the first hour</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-clotguard-red">•</span>
                    <span>Current solutions require trained personnel and precious time</span>
                  </li>
                </ul>
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

      {/* Rest of the page content remains unchanged */}
      {/* Current Methods Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold tracking-tighter text-clotguard-red text-center mb-12">
              Current Methods
            </h2>
          </AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AnimatedSection animation="fade-up" delay={0}>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Tourniquets</h3>
                  <p className="text-gray-600">
                    Effective for limb injuries but requires training and can cause tissue damage if left on too long.
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    Limitation: Only works on limbs, requires proper application
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Hemostatic Gauze</h3>
                  <p className="text-gray-600">
                    Requires direct pressure and packing into wounds, which takes time and training.
                  </p>
                  <p className="text-sm text-gray-500 italic">
                    Limitation: Requires manual application and continuous pressure
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={400}>
              <Card>
                <CardContent className="p-6 space-y-4">
                  <h3 className="text-xl font-bold">Pressure Bandages</h3>
                  <p className="text-gray-600">
                    Simple but less effective for severe bleeding and requires constant pressure.
                  </p>
                  <p className="text-sm text-gray-500 italic">Limitation: Limited effectiveness for severe trauma</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Our Innovation Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-clotguard-red mb-4">Our Innovation</h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
              ClotGuard uses smart sensing, rapid response, and autonomous clotting to revolutionize trauma care.
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
              <ol className="space-y-4">
                <li className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-clotguard-100 text-clotguard-red font-bold mr-3">
                    1
                  </span>
                  <div>
                    <p className="font-medium">Detection</p>
                    <p className="text-gray-600">Smart sensors identify bleeding and assess severity</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-clotguard-100 text-clotguard-red font-bold mr-3">
                    2
                  </span>
                  <div>
                    <p className="font-medium">Activation</p>
                    <p className="text-gray-600">Patch autonomously activates clotting mechanism</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-clotguard-100 text-clotguard-red font-bold mr-3">
                    3
                  </span>
                  <div>
                    <p className="font-medium">Targeted Delivery</p>
                    <p className="text-gray-600">Clotting agents are delivered precisely where needed</p>
                  </div>
                </li>
                <li className="flex">
                  <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-full bg-clotguard-100 text-clotguard-red font-bold mr-3">
                    4
                  </span>
                  <div>
                    <p className="font-medium">Stabilization</p>
                    <p className="text-gray-600">Bleeding is controlled within seconds</p>
                  </div>
                </li>
              </ol>
            </AnimatedSection>
          </div>

          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <AnimatedSection animation="fade-up" delay={0}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Clock className="h-12 w-12 text-clotguard-red" />
                  <h3 className="text-xl font-bold">Real-Time Detection</h3>
                  <p className="text-gray-600">
                    Advanced sensors detect bleeding instantly and assess severity to trigger appropriate response.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Heart className="h-12 w-12 text-clotguard-red" />
                  <h3 className="text-xl font-bold">Automated Clotting</h3>
                  <p className="text-gray-600">
                    Proprietary technology delivers clotting agents directly to the wound site without manual
                    intervention.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={400}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Shield className="h-12 w-12 text-clotguard-red" />
                  <h3 className="text-xl font-bold">Portable & User-Friendly</h3>
                  <p className="text-gray-600">
                    Simple application requires minimal training, making it accessible for military, first responders,
                    and civilians.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-clotguard-red mb-4">How It Works</h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
              The ClotGuard microneedle patch uses advanced technology to rapidly control bleeding
            </p>
          </AnimatedSection>

          <div className="grid gap-8 md:grid-cols-3 items-center">
            <AnimatedSection animation="fade-up" delay={0} className="text-center">
              <div className="rounded-full bg-clotguard-50 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-clotguard-red font-bold text-xl">1</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Rapid Blood Loss</h3>
              <p className="text-gray-600">
                When bleeding occurs, every second counts. Traditional methods require manual intervention.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200} className="text-center">
              <div className="rounded-full bg-clotguard-50 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-clotguard-red font-bold text-xl">2</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Release of Platelets</h3>
              <p className="text-gray-600">
                ClotGuard's microneedles release freeze-dried platelets directly to the wound site.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400} className="text-center">
              <div className="rounded-full bg-clotguard-50 w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-clotguard-red font-bold text-xl">3</span>
              </div>
              <h3 className="text-xl font-bold mb-2">Blood Clotting</h3>
              <p className="text-gray-600">
                The platelets immediately begin forming clots, stopping blood loss within seconds.
              </p>
            </AnimatedSection>
          </div>

          <div className="mt-16 max-w-3xl mx-auto">
            <AnimatedSection animation="fade-up" delay={600}>
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/patch-diagram.png"
                  alt="ClotGuard mechanism diagram"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
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
