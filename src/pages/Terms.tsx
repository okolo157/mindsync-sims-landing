
import Navbar from "@/components/Landing/Navbar";
import Footer from "@/components/Landing/Footer";

export default function Terms() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white font-sans transition-colors duration-300">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <p className="mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            1. Acceptance of Terms
          </h2>
          <p className="mb-4">
            By accessing and using this website and our services, you accept and
            agree to be bound by the terms and provision of this agreement.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">2. Use License</h2>
          <p className="mb-4">
            Permission is granted to temporarily download one copy of the
            materials (information or software) on Mindsync Systems' website for
            personal, non-commercial transitory viewing only. This is the grant
            of a license, not a transfer of title, and under this license you
            may not:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>modify or copy the materials;</li>
              <li>
                use the materials for any commercial purpose, or for any public
                display (commercial or non-commercial);
              </li>
              <li>
                attempt to decompile or reverse engineer any software contained
                on Mindsync Systems' website;
              </li>
            </ul>
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">3. Disclaimer</h2>
          <p className="mb-4">
            The materials on Mindsync Systems' website are provided on an 'as
            is' basis. Mindsync Systems makes no warranties, expressed or
            implied, and hereby disclaims and negates all other warranties
            including, without limitation, implied warranties or conditions of
            merchantability, fitness for a particular purpose, or
            non-infringement of intellectual property or other violation of
            rights.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Governing Law</h2>
          <p className="mb-4">
            These terms and conditions are governed by and construed in
            accordance with the laws and you irrevocably submit to the exclusive
            jurisdiction of the courts in that location.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
