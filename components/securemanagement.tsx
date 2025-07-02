import Image from 'next/image';

export default function SecureManagementFeatures() {
  return (
    <div className="rts-hosting-feature-area section__padding">
      <div className="container">
        <div className="section-inner">
          <div className="row">
            <div className="col-lg-6">
              <div className="left-side-image">
                <Image
                  src="/images/feature/feature-hero-08.webp"
                  alt="Feature Hero"
                  width={574}
                  height={574}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="rts-whychoose__content area-3">
                <h2 className="rts-whychoose__content--title">
                  Secure Remote Management Protocols
                </h2>

                {/* single content */}
                <div className="single">
                  <div className="single__image">
                    <Image
                      src="/images/feature/feature-05.svg"
                      alt="SSL Certificates"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="single__content">
                    <h6>SSL Certificates:</h6>
                    <p>Find the perfect domain name with various extensions (.com, .net, .org, etc.).</p>
                  </div>
                </div>

                {/* single content */}
                <div className="single">
                  <div className="single__image">
                    <Image
                      src="/images/feature/feature-06.svg"
                      alt="DDoS Protection"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="single__content">
                    <h6>DDoS Protection</h6>
                    <p>Enjoy affordable domain registration fees.</p>
                  </div>
                </div>

                {/* single content */}
                <div className="single">
                  <div className="single__image">
                    <Image
                      src="/images/feature/feature-07.svg"
                      alt="Two-Factor Authentication"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="single__content">
                    <h6>Two-Factor Authentication (2FA)</h6>
                    <p>Get assistance anytime with our round-the-clock support team.</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
