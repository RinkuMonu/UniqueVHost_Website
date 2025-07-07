export default function RefundPolicyPage() {
  return (
    <div className="min-h-screen bg-[#FFF5EF] py-12 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl rounded-lg shadow-lg overflow-hidden">
        {/* Policy Header Section */}
        <div className="bg-[#001233] p-5 text-[#fff] text-center">
          <h1 className="text-4xl font-bold mb-2">Refund Policy</h1>
        </div>
        {/* Policy Content Section */}
        <div className="bg-[#fff] p-8">
          <section className="mb-8 bg-[#FFF8F4] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#FD5D07] mb-4">1. Overview</h2>
            <p className="text-[#4C5671] leading-relaxed">
              At [Your Company Name], we strive to provide high-quality web hosting and server services. This Refund
              Policy outlines the conditions under which refunds may be issued for our services.
            </p>
          </section>
          <section className="mb-8 bg-[#fff] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#FD5D07] mb-4">2. Money-Back Guarantee</h2>
            <p className="text-[#4C5671] leading-relaxed">
              We offer a [e.g., 30-day] money-back guarantee for new web hosting and VPS hosting accounts. If you are
              not satisfied with our services within this period, you may request a full refund of your hosting fees.
            </p>
            <ul className="list-disc list-inside text-[#4C5671] ml-4 mt-2 space-y-2">
              <li>This guarantee applies only to the initial purchase of eligible hosting plans.</li>
              <li>
                Domain registrations, SSL certificates, dedicated IPs, and other add-on services are generally
                non-refundable.
              </li>
            </ul>
          </section>
          <section className="mb-8 bg-[#FFF8F4] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#FD5D07] mb-4">3. Eligibility for Refunds</h2>
            <p className="text-[#4C5671] leading-relaxed">
              To be eligible for a refund under the money-back guarantee:
            </p>
            <ul className="list-disc list-inside text-[#4C5671] ml-4 mt-2 space-y-2">
              <li>
                The refund request must be made within the specified money-back guarantee period from the date of
                purchase.
              </li>
              <li>The service must be cancelled through your client area or by contacting our support team.</li>
              <li>
                This policy does not apply to renewals, upgrades, or services purchased outside the initial guarantee
                period.
              </li>
              <li>
                Accounts found to be in violation of our Terms of Service (e.g., for illegal activities) are not
                eligible for refunds.
              </li>
            </ul>
          </section>
          <section className="mb-8 bg-[#fff] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#FD5D07] mb-4">4. Non-Refundable Items</h2>
            <p className="text-[#4C5671] leading-relaxed">The following services are generally non-refundable:</p>
            <ul className="list-disc list-inside text-[#4C5671] ml-4 mt-2 space-y-2">
              <li>Domain name registrations (once registered).</li>
              <li>SSL Certificates.</li>
              <li>Dedicated IP addresses.</li>
              <li>Software licenses.</li>
              <li>Setup fees for dedicated servers or custom configurations.</li>
              <li>Any services purchased from third-party providers through our platform.</li>
            </ul>
          </section>
          <section className="mb-8 bg-[#FFF8F4] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#FD5D07] mb-4">5. Processing Refunds</h2>
            <ul className="list-disc list-inside text-[#4C5671] ml-4 mt-2 space-y-2">
              <li>Refunds will be processed within [e.g., 7-10] business days of approval.</li>
              <li>Refunds will be issued to the original payment method used for the purchase.</li>
              <li>
                Please note that it may take additional time for the refund to appear on your bank or credit card
                statement.
              </li>
            </ul>
          </section>
          <section className="mb-8 bg-[#fff] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#FD5D07] mb-4">6. Changes to This Refund Policy</h2>
            <p className="text-[#4C5671] leading-relaxed">
              We reserve the right to modify this Refund Policy at any time. Any changes will be posted on this page,
              and the "Last updated" date will be revised accordingly. Your continued use of our services after any
              modifications signifies your acceptance of the updated policy.
            </p>
          </section>
          <section className="bg-[#FFF8F4] p-6 rounded-lg">
            <h2 className="text-2xl font-semibold text-[#FD5D07] mb-4">7. Contact Us</h2>
            <p className="text-[#4C5671] leading-relaxed">
              If you have any questions about our Refund Policy, please contact us:
            </p>
            <ul className="list-disc list-inside text-[#4C5671] ml-4 mt-2 space-y-2">
              <li>
                By email:{" "}
                <a href="mailto:support@[yourcompany.com]" className="text-[#FD5D07] hover:underline">
                  support@[yourcompany.com]
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
