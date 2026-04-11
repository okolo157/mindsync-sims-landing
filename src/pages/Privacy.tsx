
import Navbar from "@/components/Landing/Navbar";
import Footer from "@/components/Landing/Footer";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white font-sans transition-colors duration-300">
      <Navbar />
      <div className="container mx-auto px-4 pt-32 pb-20">
        <div className="max-w-4xl mx-auto prose dark:prose-invert">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <p className="mb-4">
            Last updated: {new Date().toLocaleDateString()}
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to Mindsync Systems. We respect your privacy and are
            committed to protecting your personal data. This privacy policy will
            inform you as to how we look after your personal data when you visit
            our website and use our services.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            2. Data We Collect
          </h2>
          <p className="mb-4">
            We may collect, use, store and transfer different kinds of personal
            data about you which we have grouped together follows:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Identity Data: includes first name, last name, username or
                similar identifier.
              </li>
              <li>
                Contact Data: includes email address and telephone numbers.
              </li>
              <li>
                Technical Data: includes internet protocol (IP) address, browser
                type and version, time zone setting and location.
              </li>
            </ul>
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">
            3. How We Use Your Data
          </h2>
          <p className="mb-4">
            We will only use your personal data when the law allows us to. Most
            commonly, we will use your personal data in the following
            circumstances:
            <ul className="list-disc pl-6 mt-2 space-y-1">
              <li>
                Where we need to perform the contract we are about to enter into
                or have entered into with you.
              </li>
              <li>
                Where it is necessary for our legitimate interests (or those of
                a third party) and your interests and fundamental rights do not
                override those interests.
              </li>
            </ul>
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">4. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about this privacy policy or our privacy
            practices, please contact us at:
            <a
              href="mailto:hello@mindsync.solutions"
              className="text-indigo-600 hover:text-indigo-500 ml-1"
            >
              hello@mindsync.solutions
            </a>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
