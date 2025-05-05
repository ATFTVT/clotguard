import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Clock, Lightbulb, Mail } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export default function Prototype() {
  const upcomingMilestones = [
    "Initial prototype design and modeling",
    "Laboratory testing of nanobot components",
    "Freeze-dried platelet stability testing",
    "Biosensor integration and calibration",
    "First functional prototype assembly",
  ]

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
              Prototype in Development
            </h1>
            <p className="mx-auto max-w-[700px] text-white md:text-xl">
              We're working hard to bring ClotGuard from concept to reality.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <AnimatedSection animation="fade-up">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-clotguard-red">Prototype Coming Soon</h2>
                <p className="text-xl text-gray-800 font-medium">From concept to life-saving innovation</p>
                <p className="text-gray-600">
                  Our team is currently in the research and development phase, working diligently to transform our
                  innovative concept into a functional prototype. The ClotGuard patch represents a significant
                  advancement in trauma care technology, and we're committed to ensuring its effectiveness and safety
                  through rigorous development and testing.
                </p>
                <p className="text-gray-600">
                  While our prototype is not yet ready for demonstration, we're making steady progress on the core
                  technologies that will power ClotGuard, including freeze-dried platelet preparation, nanobot
                  engineering, and biosensor integration.
                </p>
                <p className="text-gray-600">
                  We invite you to check back for updates as we continue our journey toward creating a revolutionary
                  solution for emergency hemorrhage control.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="mx-auto lg:ml-auto">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-100">
                  <div className="flex items-center justify-center mb-6">
                    <div className="h-24 w-24 rounded-full bg-clotguard-50 flex items-center justify-center">
                      <Clock className="h-12 w-12 text-clotguard-red" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-center mb-4">Development in Progress</h3>
                  <p className="text-gray-600 text-center mb-6">
                    Our team is working on bringing the ClotGuard prototype to life. Subscribe to our newsletter to
                    receive updates on our progress.
                  </p>
                  <div className="flex justify-center">
                    <Link href="/contact">
                      <Button className="bg-clotguard-red hover:bg-clotguard-dark">
                        Stay Updated
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Development Roadmap Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-clotguard-red mb-4">Development Roadmap</h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
              Our path from concept to functional prototype
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-8">
              {upcomingMilestones.map((milestone, index) => (
                <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-clotguard-100 text-clotguard-red font-bold">
                      {index + 1}
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex-grow">
                      <h3 className="text-lg font-bold text-gray-800">{milestone}</h3>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Research Focus Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-clotguard-red mb-4">Current Research Focus</h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
              Key areas we're exploring to make ClotGuard a reality
            </p>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-3">
            <AnimatedSection animation="fade-up" delay={0}>
              <Card className="border-none shadow-lg h-full">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-clotguard-50 flex items-center justify-center">
                    <Lightbulb className="h-8 w-8 text-clotguard-red" />
                  </div>
                  <h3 className="text-xl font-bold">Freeze-Dried Platelet Technology</h3>
                  <p className="text-gray-600">
                    Researching optimal preservation methods to ensure platelets remain viable and effective after
                    rehydration
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="border-none shadow-lg h-full">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-clotguard-50 flex items-center justify-center">
                    <Lightbulb className="h-8 w-8 text-clotguard-red" />
                  </div>
                  <h3 className="text-xl font-bold">Biocompatible Nanobots</h3>
                  <p className="text-gray-600">
                    Developing microscale delivery systems that can navigate the bloodstream and target injury sites
                    with precision
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" delay={400}>
              <Card className="border-none shadow-lg h-full">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <div className="h-16 w-16 rounded-full bg-clotguard-50 flex items-center justify-center">
                    <Lightbulb className="h-8 w-8 text-clotguard-red" />
                  </div>
                  <h3 className="text-xl font-bold">Bleeding Detection Sensors</h3>
                  <p className="text-gray-600">
                    Creating sensitive biosensors that can rapidly detect internal bleeding and trigger the patch's
                    activation
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-clotguard-red text-white">
        <div className="container px-4 md:px-6 text-center">
          <AnimatedSection animation="fade-up" className="mx-auto max-w-[800px] space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get Involved</h2>
            <p className="text-lg md:text-xl">
              Interested in our progress or want to collaborate? We'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-white text-clotguard-red hover:bg-gray-100">
                  Contact Our Team
                  <Mail className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
