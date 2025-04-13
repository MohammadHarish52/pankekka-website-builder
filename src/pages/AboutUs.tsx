import React from "react";
import Navbar from "@/components/Navbar";
import FruitIllustrations from "@/components/FruitIllustrations";
import Footer from "@/components/Footer";

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      name: "Emma Pankekka",
      role: "Head of Product Development",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Johan Berglund",
      role: "Master Preserver",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sofia Lindström",
      role: "Creative Director",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <div className="container-custom mt-8">
        <div className="flex flex-col items-center">
          <div className="text-xs uppercase tracking-widest text-darkText/70 mb-1">
            <span>Home</span> &gt; <span>About Us</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-serif tracking-wide uppercase mt-8">
            Our Story
          </h1>

          <div className="max-w-2xl mx-auto text-center mt-8 leading-relaxed">
            <p className="text-base md:text-lg font-serif">
              The Pankekka family has been creating artisanal fruit preserves
              since 1879. What began as a small kitchen operation has grown into
              a beloved brand, while still maintaining the dedication to quality
              and tradition set by our founders.
            </p>
          </div>
        </div>
      </div>

      <FruitIllustrations />

      {/* History Section */}
      <div className="container-custom my-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1591378603223-e15560f3d906?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Historic photo of Pankekka family"
              className="w-full h-auto rounded-sm"
            />
          </div>
          <div>
            <h2 className="text-3xl font-serif uppercase tracking-wide mb-6">
              Our Heritage
            </h2>
            <p className="font-serif mb-4">
              It all began in a small kitchen in rural Sweden, where Elsa
              Pankekka perfected her recipes for preserving the summer's bounty
              of wild berries and fruits. Her preserves became renowned in the
              local community for their exceptional flavor and quality.
            </p>
            <p className="font-serif mb-4">
              By the early 1900s, her son Karl expanded the operation,
              establishing the first Pankekka workshop and beginning to
              distribute products beyond their village. He maintained his
              mother's unwavering commitment to quality while introducing new
              preservation techniques.
            </p>
            <p className="font-serif">
              Today, the fifth generation of the Pankekka family continues this
              legacy, combining time-honored traditions with modern innovation
              to create preserves and other products that honor our past while
              looking to the future.
            </p>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="bg-white py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif uppercase tracking-wide mb-6">
              Our Values
            </h2>
            <p className="font-serif">
              The principles that have guided our work for generations continue
              to inspire everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif uppercase tracking-wide mb-3">
                Natural Quality
              </h3>
              <p className="font-serif">
                We use only the finest fruits, harvested at peak ripeness, and
                minimal, natural ingredients to let the true flavors shine
                through.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif uppercase tracking-wide mb-3">
                Artisanal Craft
              </h3>
              <p className="font-serif">
                Every product is made with attentive care, using traditional
                methods that honor our heritage while ensuring exceptional taste
                and texture.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-serif uppercase tracking-wide mb-3">
                Sustainability
              </h3>
              <p className="font-serif">
                We work with local farmers, use sustainable practices, and
                strive to minimize our environmental footprint in everything we
                do.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="container-custom my-16">
        <h2 className="text-3xl font-serif uppercase tracking-wide mb-10 text-center">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white shadow-sm overflow-hidden">
              <div className="h-80 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-serif mb-1">{member.name}</h3>
                <p className="text-sm uppercase tracking-wider text-darkText/70">
                  {member.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Visit Us Section */}
      <div className="bg-secondary py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-serif uppercase tracking-wide mb-6">
              Visit Our Workshop
            </h2>
            <p className="font-serif mb-8">
              Experience the Pankekka tradition firsthand at our workshop and
              store, where you can see our artisans at work and taste our
              seasonal specialties.
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-6 md:space-y-0 md:space-x-12">
              <div>
                <h4 className="text-lg font-serif uppercase mb-2">Location</h4>
                <address className="font-serif not-italic">
                  Pankekka Workshop
                  <br />
                  Berryhill Lane 45
                  <br />
                  SE-10234 Stockholm
                  <br />
                  Sweden
                </address>
              </div>
              <div>
                <h4 className="text-lg font-serif uppercase mb-2">Hours</h4>
                <p className="font-serif">
                  Monday - Friday: 9am - 6pm
                  <br />
                  Saturday: 10am - 5pm
                  <br />
                  Sunday: 11am - 4pm
                </p>
              </div>
            </div>
            <div className="mt-8">
              <a
                href="#"
                className="bg-black text-white text-xs px-6 py-3 uppercase tracking-wider inline-block"
              >
                Plan Your Visit
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
