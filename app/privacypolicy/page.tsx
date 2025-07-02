export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FFF5EF] py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-lg shadow-lg overflow-hidden">
        {/* Policy Header Section */}
        <div className="bg-[#001233] p-5 text-[#fff] text-center">
          <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        </div>

        {/* Policy Content Section */}
        <div className="bg-[#fff] p-8">
          <section className="mb-8 bg-[#FFF8F4] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#FD5D07] mb-4">1. Introduction</h2>
            <p className="text-[#4C5671] leading-relaxed">
              Welcome to [Your Company Name]! We are committed to protecting your privacy and handling your data in an
              open and transparent manner. This Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you visit our website [Your Website URL] and use our hosting and server services.
            </p>
            <p className="text-[#4C5671] leading-relaxed mt-2">
              By using our services, you agree to the collection and use of information in accordance with this policy.
              If you do not agree with the terms of this Privacy Policy, please do not access or use our services.
            </p>
          </section>

          <section className="mb-8 bg-[#fff] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#FD5D07] mb-4">2. Information We Collect</h2>
            <p className="text-[#4C5671] leading-relaxed">
              We collect various types of information to provide and improve our services to you.
            </p>
            <ul className="list-disc list-inside text-[#4C5671] ml-4 mt-2 space-y-2">
              <li>
                <strong className="font-bold text-[#001233]">Personal Identifiable Information (PII):</strong> This
                includes information you voluntarily provide to us when you register for an account, place an order,
                subscribe to our newsletter, respond to a survey, or fill out a form. This may include your name, email
                address, postal address, phone number, and payment information.
              </li>
              <li>
                <strong className="font-bold text-[#001233]">Usage Data:</strong> We automatically collect information
                on how the service is accessed and used ("Usage Data"). This Usage Data may include information such as
                your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages
                of our service that you visit, the time and date of your visit, the time spent on those pages, unique
                device identifiers, and other diagnostic data.
              </li>
              <li>
                <strong className="font-bold text-[#001233]">Cookies and Tracking Technologies:</strong> We use cookies
                and similar tracking technologies to track the activity on our service and hold certain information.
                Cookies are files with a small amount of data which may include an anonymous unique identifier. You can
                instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
              </li>
            </ul>
          </section>

          <section className="mb-8 bg-[#FFF8F4] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#FD5D07] mb-4">3. How We Use Your Information</h2>
            <p className="text-[#4C5671] leading-relaxed">We use the collected data for various purposes:</p>
            <ul className="list-disc list-inside text-[#4C5671] ml-4 mt-2 space-y-2">
              <li>To provide and maintain our services</li>
              <li>To process your transactions and manage your orders</li>
              <li>To notify you about changes to our services</li>
              <li>To allow you to participate in interactive features of our service when you choose to do so</li>
              <li>To provide customer support</li>
              <li>To gather analysis or valuable information so that we can improve our services</li>
              <li>To monitor the usage of our services</li>
              <li>To detect, prevent, and address technical issues</li>
              <li>To send periodic emails regarding your order or other products and services</li>
            </ul>
          </section>

          <section className="mb-8 bg-[#fff] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#FD5D07] mb-4">4. Data Security</h2>
            <p className="text-[#4C5671] leading-relaxed">
              The security of your data is important to us. We implement a variety of security measures to maintain the
              safety of your personal information when you place an order or enter, submit, or access your personal
              information. These measures include using secure servers, encryption, and access controls.
            </p>
            <p className="text-[#4C5671] leading-relaxed mt-2">
              However, no method of transmission over the Internet or method of electronic storage is 100% secure. While
              we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its
              absolute security.
            </p>
          </section>

          <section className="mb-8 bg-[#FFF8F4] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#FD5D07] mb-4">5. Disclosure of Your Information</h2>
            <p className="text-[#4C5671] leading-relaxed">
              We may disclose your personal information in the following situations:
            </p>
            <ul className="list-disc list-inside text-[#4C5671] ml-4 mt-2 space-y-2">
              <li>
                <strong className="font-bold text-[#001233]">Service Providers:</strong> We may employ third-party
                companies and individuals to facilitate our service ("Service Providers"), to provide the service on our
                behalf, to perform service-related services, or to assist us in analyzing how our service is used. These
                third parties have access to your Personal Data only to perform these tasks on our behalf and are
                obligated not to disclose or use it for any other purpose.
              </li>
              <li>
                <strong className="font-bold text-[#001233]">Legal Requirements:</strong> We may disclose your Personal
                Data in the good faith belief that such action is necessary to:
                <ul className="list-circle list-inside ml-6 mt-1 space-y-1">
                  <li>Comply with a legal obligation</li>
                  <li>Protect and defend the rights or property of [Your Company Name]</li>
                  <li>Prevent or investigate possible wrongdoing in connection with the service</li>
                  <li>Protect the personal safety of users of the service or the public</li>
                  <li>Protect against legal liability</li>
                </ul>
              </li>
              <li>
                <strong className="font-bold text-[#001233]">Business Transfer:</strong> If [Your Company Name] is
                involved in a merger, acquisition, or asset sale, your Personal Data may be transferred. We will provide
                notice before your Personal Data is transferred and becomes subject to a different Privacy Policy.
              </li>
            </ul>
          </section>

          <section className="mb-8 bg-[#fff] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#FD5D07] mb-4">6. Third-Party Services</h2>
            <p className="text-[#4C5671] leading-relaxed">
              Our service may contain links to other sites that are not operated by us. If you click on a third-party
              link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy
              of every site you visit.
            </p>
            <p className="text-[#4C5671] leading-relaxed mt-2">
              We have no control over and assume no responsibility for the content, privacy policies, or practices of
              any third-party sites or services.
            </p>
          </section>

          <section className="mb-8 bg-[#FFF8F4] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#FD5D07] mb-4">7. Your Choices</h2>
            <p className="text-[#4C5671] leading-relaxed">
              You have certain rights regarding the personal information we hold about you:
            </p>
            <ul className="list-disc list-inside text-[#4C5671] ml-4 mt-2 space-y-2">
              <li>
                <strong className="font-bold text-[#001233]">Access and Update:</strong> You can access and update your
                personal information through your account settings.
              </li>
              <li>
                <strong className="font-bold text-[#001233]">Opt-Out:</strong> You can opt-out of receiving promotional
                emails from us by following the unsubscribe link in those emails.
              </li>
              <li>
                <strong className="font-bold text-[#001233]">Cookies:</strong> Most web browsers are set to accept
                cookies by default. If you prefer, you can usually choose to set your browser to remove or reject
                browser cookies.
              </li>
            </ul>
          </section>

          <section className="mb-8 bg-[#fff] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#FD5D07] mb-4">8. Changes to This Privacy Policy</h2>
            <p className="text-[#4C5671] leading-relaxed">
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
              Privacy Policy on this page.
            </p>
            <p className="text-[#4C5671] leading-relaxed mt-2">
              We will let you know via email and/or a prominent notice on our service, prior to the change becoming
              effective and update the "Last updated" date at the top of this Privacy Policy.
            </p>
            <p className="text-[#4C5671] leading-relaxed mt-2">
              You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy
              are effective when they are posted on this page.
            </p>
          </section>

          <section className="bg-[#FFF8F4] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#FD5D07] mb-4">9. Contact Us</h2>
            <p className="text-[#4C5671] leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <ul className="list-disc list-inside text-[#4C5671] ml-4 mt-2 space-y-2">
              <li>
                By email:{" "}
                <a href="mailto:privacy@[yourcompany.com]" className="text-[#FD5D07] hover:underline">
                  privacy@[yourcompany.com]
                </a>
              </li>
              <li>
                By visiting this page on our website:{" "}
                <a href="[Your Website Contact Page URL]" className="text-[#FD5D07] hover:underline">
                  [Your Website Contact Page URL]
                </a>
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  )
}
