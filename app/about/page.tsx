import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedSection } from "@/components/animated-section"

export default function About() {
  const teamMembers = [
    {
      name: "Arissai Filleul",
      role: "Neuroscience Specialist",
      bio: "Arissai Filleul, a 16-year-old neuroscience enthusiast, is enrolled in The Knowledge Society's (TKS) Innovate program for the 2024–2025 academic year. Her research interests are in the fields of connectomics, brain science, and cognitive diversity, especially ADHD. In order to map and comprehend these connections in real time, Arissai is delving into complex subjects like functional MRI (fMRI) analysis. She is particularly interested in how the brain's neural wiring affects behavior, memory, and perception. Her goal is audacious: to identify the neural pathways underlying cognition and attention and to help make discoveries that could revolutionize our knowledge of and approach to treating neurodivergent disorders.",
      image: "/images/arissai-filleul.jpeg",
    },
    {
      name: "Sophia Dhami",
      role: "Regenerative Medicine Expert",
      bio: "Sophia Dhami has a strong interest in regenerative medicine and biotechnology. She has worked on a number of innovative projects, such as creating a pill that uses cutting-edge drug delivery systems to dissolve kidney stones caused by uric acid. Sophia's love of biotechnology is evident in her studies of CAR-T therapy, where she investigates how tailored approaches could transform cancer treatment. The difficulties of improving T-cell customization and expanding the patient base for whom CAR-T treatments are available are of special interest to her. Sophia is also engaged in a Super CAR-T therapy project. She is dedicated to creating novel solutions that push the limits of medical science because she has a strong interest in biotechnology and how it can revolutionize healthcare.",
      image: "/images/sophia-dhami.jpeg",
    },
    {
      name: "Isavella Tsoulias",
      role: "Biotechnology Innovator",
      bio: "A rising star in the biotechnology field, Isavella Tsoulias is particularly interested in phage therapy and the development of antimicrobial therapies. She is a member of The Knowledge Society (TKS) and an exceptional Grade 9 student who is working at the cutting edge of synthetic biology, creating bacteriophages to combat drug-resistant, deadly infections that pose a threat to world health. Isavella is not merely studying the science; she is reimagining what is possible thanks to her profound understanding of molecular biology, which is far beyond her years. Her efforts are intended to push the limits of contemporary medicine, prevent medical collapse in dire situations, and create the foundation for scalable, life-saving solutions.",
      image: "/images/isavella-tsoulias.jpeg",
    },
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
              Meet the Minds Behind ClotGuard
            </h1>
            <p className="mx-auto max-w-[700px] text-white md:text-xl">
              A team of innovators dedicated to revolutionizing trauma care and saving lives.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Introduction Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <AnimatedSection animation="fade-up" className="mx-auto max-w-[900px] text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter text-clotguard-red">Our Team</h2>
            <p className="text-lg text-gray-700">
              We are a group of driven innovators; Sophia Dhami, Isavella Tsoulias, and Arissai Filleul, who are all
              committed to transforming the blood clotting treatment industry. By combining our knowledge of biomedical
              engineering, regenerative medicine, neurology, and scientific research, we hope to investigate new
              approaches to the problems associated with blood clotting disorders.
            </p>
            <p className="text-lg text-gray-700">
              Our project's main goal is to develop cutting-edge therapeutic approaches that can enhance patient
              outcomes and have a long-lasting effect on medical research. We are committed to advancing the treatment
              and prevention of blood clotting problems with our varied backgrounds and inventive spirit.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
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

      {/* Team Members Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <AnimatedSection animation="fade-up">
            <h2 className="text-3xl font-bold tracking-tighter text-clotguard-red text-center mb-12">Meet Our Team</h2>
          </AnimatedSection>
          <div className="grid gap-12 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 200}>
                <div className="grid md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-1">
                    <div className="aspect-square relative w-full max-w-[300px] mx-auto overflow-hidden rounded-lg shadow-lg">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-2xl font-bold text-gray-800 mb-1">{member.name}</h3>
                    <p className="text-md text-clotguard-red font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                </div>
                {index < teamMembers.length - 1 && <hr className="my-10 border-gray-200" />}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
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
