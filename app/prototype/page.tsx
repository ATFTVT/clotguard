import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, CheckCircle } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

export default function Prototype() {
  const achievements = [
    "Achieved clotting in <2 minutes in lab tests",
    "Proven autonomous response in trauma scenarios",
    "Successfully tested on multiple wound types",
    "Demonstrated stability in various environmental conditions",
  ]

  const nextSteps = [
    "Finalizing prototype design for manufacturing",
    "Preparing for clinical trials",
    "Seeking regulatory approvals",
    "Developing training programs for first responders",
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-clotguard-600 to-white">
        <div className="container px-4 md:px-6 text-center">
          <AnimatedSection animation="fade-up">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white mb-6">
              Prototype in Action
            </h1>
            <p className="mx-auto max-w-[700px] text-white md:text-xl">
              See how ClotGuard is already demonstrating its life-saving potential.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Visual Showcase Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-clotguard-red text-center mb-12">Visual Showcase</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="ClotGuard prototype demonstration"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Laboratory Testing</h3>
                <p className="text-gray-600">
                  ClotGuard undergoing rigorous testing in controlled laboratory conditions.
                </p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="ClotGuard prototype in simulated environment"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Simulated Trauma</h3>
                <p className="text-gray-600">Testing ClotGuard's response in realistic trauma simulations.</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src="/placeholder.svg?height=300&width=500"
                  alt="ClotGuard prototype components"
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold">Component View</h3>
                <p className="text-gray-600">A closer look at the innovative technology inside ClotGuard.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Achievements Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <AnimatedSection animation="fade-up">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-clotguard-red">Key Achievements</h2>
                <p className="text-gray-600">
                  Our prototype has already demonstrated remarkable results in preliminary testing, showing the
                  potential to revolutionize trauma care.
                </p>
                <ul className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-clotguard-red mr-2 flex-shrink-0" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="mx-auto lg:ml-auto">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="ClotGuard achievement metrics"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Next Steps Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <AnimatedSection animation="slide-right" className="order-2 lg:order-1">
              <div>
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="ClotGuard future roadmap"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover"
                />
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-up" className="space-y-4 order-1 lg:order-2">
              <h2 className="text-3xl font-bold tracking-tighter text-clotguard-red">Next Steps</h2>
              <p className="text-gray-600">
                We're preparing for clinical trials and real-world deployment, with a clear roadmap to bring ClotGuard
                to those who need it most.
              </p>
              <ul className="space-y-4">
                {nextSteps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-clotguard-100 text-clotguard-red font-bold mr-2">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-clotguard-red text-white">
        <div className="container px-4 md:px-6 text-center">
          <AnimatedSection animation="fade-up">
            <div className="mx-auto max-w-[800px] space-y-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Support Our Mission</h2>
              <p className="text-lg md:text-xl">Join us in revolutionizing trauma care and saving countless lives.</p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link href="/contact">
                  <Button className="bg-white text-clotguard-red hover:bg-gray-100">
                    Partner With Us
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
