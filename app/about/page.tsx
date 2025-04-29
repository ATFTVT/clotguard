import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { AnimatedSection } from "@/components/animated-section"

export default function About() {
  const teamMembers = [
    {
      name: "Arissai Filleul",
      role: "Team Member",
      bio: "Key contributor to the ClotGuard project with expertise in medical technology development.",
      image: "/images/arissai-filleul.jpeg",
    },
    {
      name: "Sophia Dhami",
      role: "Team Member",
      bio: "Brings expertise in healthcare innovation and medical device development to the ClotGuard team.",
      image: "/images/sophia-dhami.jpeg",
    },
    {
      name: "Isavella Tsoulias",
      role: "Team Member",
      bio: "Specializes in biomedical engineering with a focus on emergency medical solutions.",
      image: "/images/isavella-tsoulias.jpeg",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-clotguard-600 to-white">
        <div className="container px-4 md:px-6 text-center">
          <AnimatedSection animation="fade-up">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white mb-6">
              Meet the Minds Behind ClotGuard
            </h1>
            <p className="mx-auto max-w-[700px] text-white md:text-xl">
              A team of innovators dedicated to revolutionizing trauma care and saving lives.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <AnimatedSection animation="fade-up">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-clotguard-red">Our Mission</h2>
                <p className="text-xl text-gray-800 font-medium">
                  Our mission is to save lives by bridging the gap between trauma and treatment.
                </p>
                <p className="text-gray-600">
                  At ClotGuard, we believe that no one should die from preventable bleeding. We're dedicated to
                  developing innovative solutions that can be deployed anywhere, by anyone, to stop life-threatening
                  hemorrhage in seconds.
                </p>
                <p className="text-gray-600">
                  By combining cutting-edge technology with medical expertise, we're creating a future where rapid
                  response to trauma is accessible to all – from battlefield medics to civilian first responders and
                  everyday people.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="mx-auto lg:ml-auto">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src="/images/team-mission.png"
                    alt="ClotGuard team working on their mission"
                    width={500}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold tracking-tighter text-clotguard-red text-center mb-12">Our Team</h2>
          </AnimatedSection>
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 200}>
                <Card className="overflow-hidden h-full">
                  <div className="aspect-square relative w-full">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold">{member.name}</h3>
                    <p className="text-sm text-clotguard-red mb-2">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <AnimatedSection animation="fade-up">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter text-clotguard-red">Our Journey</h2>
                <p className="text-xl text-gray-800 font-medium">
                  ClotGuard started as a project driven by a shared passion for innovation and saving lives.
                </p>
                <p className="text-gray-600">
                  What began as a research initiative in trauma medicine quickly evolved into a mission to revolutionize
                  emergency care. Our team came together with a single goal: to create a solution that could save lives
                  in those critical first minutes after trauma.
                </p>
                <p className="text-gray-600">
                  Through research, testing, and refinement, we've developed a technology that we believe will transform
                  trauma care worldwide. Today, we're on the cusp of bringing ClotGuard to those who need it most.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slide-left" delay={200}>
              <div className="mx-auto lg:ml-auto">
                <Image
                  src="/placeholder.svg?height=400&width=500"
                  alt="ClotGuard journey timeline"
                  width={500}
                  height={400}
                  className="rounded-lg object-cover"
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
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Want to collaborate or learn more?
            </h2>
            <p className="text-lg md:text-xl">
              We're always looking for partners, investors, and collaborators who share our vision.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-white text-clotguard-red hover:bg-gray-100">Contact Us</Button>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
