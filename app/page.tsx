import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Clock, Heart, Shield } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { TestimonialCarousel } from "@/components/testimonial-carousel"

export default function Home() {
  const testimonials = [
    {
      quote:
        "It's great to hear you're working on such an impactful healthcare product. I think it's a very novel idea!",
      author: "Grace Fu",
      title: "Pharmaceutical research at U of T's Leslie Dan Faculty",
    },
    {
      quote: "I think your idea is fascinating and certainly would be very useful to the medical field.",
      author: "Issac Tang",
      title: "Medical Researcher w/UCalgary",
    },
    {
      quote:
        "The device in question is truly revolutionary. For people who are more likely to suffer serious injuries or clotting issues, a patch that can detect bleeding and distribute freeze-dried platelets exactly where they are needed could save lives. It's like having a personal, smart medic on your skin, ready to go in the event of an emergency. The potential of this technology to revolutionize emergency treatment and improve general safety truly fascinates me.",
      author: "Mehak Nijjar",
      title: "Board Member – Airdrie Affairs & Legal Insurance Liaison",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section with Full Screen Background Image */}
      <section className="relative w-full h-screen flex items-center">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-clotguard-600 via-clotguard-100/50 to-white z-0"></div>
          <Image
            src="/images/patch-on-arm.png"
            alt="Medical patch on arm"
            fill
            className="object-cover object-center opacity-30"
            priority
          />
        </div>

        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <AnimatedSection animation="fade-up">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white">
                    Saving Lives, One Second at a Time.
                  </h1>
                  <p className="max-w-[600px] text-white md:text-xl">
                    ClotGuard is the future of autonomous bleeding control.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/solution">
                    <Button className="bg-white text-clotguard-red hover:bg-gray-100">
                      Learn More About Our Innovation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="fade-in" delay={300}>
              <div className="mx-auto lg:ml-auto flex items-center justify-center">
                <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border border-clotguard-100">
                  <div className="space-y-4">
                    <h2 className="text-2xl font-bold text-clotguard-red">Emergency Hemorrhage Control</h2>
                    <p className="text-gray-700">
                      When seconds count, ClotGuard delivers. Our revolutionary technology stops bleeding faster than
                      any conventional method.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-clotguard-red"></span>
                        <span className="text-gray-700">Activates in seconds</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-clotguard-red"></span>
                        <span className="text-gray-700">Works on all wound types</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-clotguard-red"></span>
                        <span className="text-gray-700">No training required</span>
                      </li>
                    </ul>
                    <Link href="/prototype">
                      <Button
                        variant="outline"
                        className="border-clotguard-red text-clotguard-red hover:bg-clotguard-50"
                      >
                        See Our Prototype
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

      {/* Problem Statement Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <AnimatedSection animation="fade-up" className="mx-auto max-w-[800px] text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-clotguard-red">
              The Problem
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-gray-800">
              Uncontrolled bleeding is the #1 cause of preventable deaths in trauma.
            </p>
            <p className="text-lg text-gray-600 max-w-[600px] mx-auto">
              Our cutting-edge patch detects injuries and autonomously stops bleeding in seconds.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Expert Testimonials Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <AnimatedSection animation="fade-up" className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter text-clotguard-red mb-4">What Experts Say</h2>
            <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
              Healthcare professionals recognize the revolutionary potential of ClotGuard
            </p>
          </AnimatedSection>

          <AnimatedSection animation="fade-up" delay={200}>
            <TestimonialCarousel testimonials={testimonials} />
          </AnimatedSection>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <AnimatedSection animation="slide-left" delay={0}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Clock className="h-12 w-12 text-clotguard-red" />
                  <h3 className="text-xl font-bold">Real-Time Detection</h3>
                  <p className="text-gray-600">
                    ClotGuard instantly detects bleeding and activates within seconds of application.
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
                    Our smart patch delivers targeted clotting agents exactly where needed.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="slide-right" delay={400}>
              <Card className="border-none shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                  <Shield className="h-12 w-12 text-clotguard-red" />
                  <h3 className="text-xl font-bold">Portable & User-Friendly</h3>
                  <p className="text-gray-600">Designed for ease of use in emergency situations by anyone, anywhere.</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Solution Overview Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <AnimatedSection animation="fade-up" className="mx-auto max-w-[900px] space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-clotguard-red">
              Our Solution
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-800">Revolutionary Approach</h3>
                <p className="text-gray-600">
                  ClotGuard is a dissolvable microneedle patch designed to deliver clotting agents for emergency
                  hemorrhage control. Our innovative technology bridges the critical gap between injury and treatment.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="mr-2 text-clotguard-red">•</span>
                    <span>Autonomous activation upon contact with blood</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-clotguard-red">•</span>
                    <span>Rapid deployment of freeze-dried platelets</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-clotguard-red">•</span>
                    <span>Effective clotting within seconds of application</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2 text-clotguard-red">•</span>
                    <span>Simple enough for untrained personnel to use</span>
                  </li>
                </ul>
                <div className="pt-4">
                  <Link href="/solution">
                    <Button className="bg-clotguard-red hover:bg-clotguard-dark">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <AnimatedSection animation="slide-left" delay={200}>
                <div className="relative rounded-lg overflow-hidden shadow-xl">
                  <Image
                    src="/images/patch-on-arm.png"
                    alt="ClotGuard patch on arm"
                    width={500}
                    height={400}
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </AnimatedSection>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-clotguard-red text-white">
        <div className="container px-4 md:px-6 text-center">
          <AnimatedSection animation="fade-up" className="mx-auto max-w-[800px] space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Learn More?</h2>
            <p className="text-lg md:text-xl">
              Discover how ClotGuard is revolutionizing trauma care and saving lives.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/solution">
                <Button className="bg-white text-clotguard-red hover:bg-gray-100">Explore Our Solution</Button>
              </Link>
              <Link href="/contact">
                <Button className="bg-white text-clotguard-red hover:bg-gray-100 border-white">Contact Us</Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
