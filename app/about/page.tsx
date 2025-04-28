import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function About() {
  const teamMembers = [
    {
      name: "Dr. Jane Smith",
      role: "Founder & Chief Medical Officer",
      bio: "Emergency medicine specialist with 15 years of experience in trauma care.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Dr. Michael Chen",
      role: "Chief Technology Officer",
      bio: "Biomedical engineer specializing in nanotechnology and smart materials.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Sarah Johnson",
      role: "Head of Research",
      bio: "PhD in biochemistry with expertise in hemostatic agents and blood clotting mechanisms.",
      image: "/placeholder.svg?height=300&width=300",
    },
    {
      name: "Robert Williams",
      role: "Operations Director",
      bio: "Former military medic with extensive field experience in trauma situations.",
      image: "/placeholder.svg?height=300&width=300",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-red-50 to-white">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-red-600 mb-6">
            Meet the Minds Behind ClotGuard
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-700 md:text-xl">
            A team of medical professionals, engineers, and innovators dedicated to saving lives.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-red-600">Our Mission</h2>
              <p className="text-xl text-gray-800 font-medium">
                Our mission is to save lives by bridging the gap between trauma and treatment.
              </p>
              <p className="text-gray-600">
                At ClotGuard, we believe that no one should die from preventable bleeding. We're dedicated to developing
                innovative solutions that can be deployed anywhere, by anyone, to stop life-threatening hemorrhage in
                seconds.
              </p>
              <p className="text-gray-600">
                By combining cutting-edge technology with medical expertise, we're creating a future where rapid
                response to trauma is accessible to all – from battlefield medics to civilian first responders and
                everyday people.
              </p>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="ClotGuard mission visualization"
                width={500}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-red-600 text-center mb-12">Our Team</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-square relative">
                  <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">{member.name}</h3>
                  <p className="text-sm text-red-600 mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter text-red-600">Our Journey</h2>
              <p className="text-xl text-gray-800 font-medium">
                ClotGuard started as a moonshot project, driven by a shared passion for innovation and saving lives.
              </p>
              <p className="text-gray-600">
                What began as a research initiative in trauma medicine quickly evolved into a mission to revolutionize
                emergency care. Our team of medical professionals and engineers came together with a single goal: to
                create a solution that could save lives in those critical first minutes after trauma.
              </p>
              <p className="text-gray-600">
                Through years of research, testing, and refinement, we've developed a technology that we believe will
                transform trauma care worldwide. Today, we're on the cusp of bringing ClotGuard to those who need it
                most.
              </p>
            </div>
            <div className="mx-auto lg:ml-auto">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="ClotGuard journey timeline"
                width={500}
                height={400}
                className="rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-red-600 text-white">
        <div className="container px-4 md:px-6 text-center">
          <div className="mx-auto max-w-[800px] space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Want to collaborate or learn more?
            </h2>
            <p className="text-lg md:text-xl">
              We're always looking for partners, investors, and collaborators who share our vision.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/contact">
                <Button className="bg-white text-red-600 hover:bg-gray-100">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
