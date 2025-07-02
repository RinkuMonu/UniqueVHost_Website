"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function Plans() {
     const [activeTab, setActiveTab] = useState('monthly');
    
      // Pricing plans data
      const pricingPlans = [
        {
          id: 'monthly',
          label: 'Monthly',
          plans: [
            {
              type: 'Basic Plan',
              price: '$7.20',
              sub: '/ mo',
              renews: 'Renews at $5.32/month'
            },
            {
              type: 'Business Plan',
              price: '$7.20',
              sub: '/ mo',
              renews: 'Renews at $5.32/month'
            },
            {
              type: 'Pro Plan',
              price: '$7.20',
              sub: '/ mo',
              renews: 'Renews at $5.32/month'
            }
          ]
        },
        {
          id: 'yearly',
          label: 'Yearly',
          plans: [
            {
              type: 'Basic Plan',
              price: '$17.20',
              sub: '/ yr',
              renews: 'Renews at $15.32/yearly'
            },
            {
              type: 'Business Plan',
              price: '$17.20',
              sub: '/ yr',
              renews: 'Renews at $15.32/yearly'
            },
            {
              type: 'Pro Plan',
              price: '$17.20',
              sub: '/ yr',
              renews: 'Renews at $15.32/yearly'
            }
          ]
        },
        {
          id: '3year',
          label: '3 Year',
          plans: [
            {
              type: 'Basic Plan',
              price: '$37.20',
              sub: '/ 3yr',
              renews: 'Renews at $35.32/3yr'
            },
            {
              type: 'Business Plan',
              price: '$37.20',
              sub: '/ 3yr',
              renews: 'Renews at $35.32/3yr'
            },
            {
              type: 'Pro Plan',
              price: '$37.20',
              sub: '/ 3yr',
              renews: 'Renews at $35.32/3yr'
            }
          ]
        }
      ];
    
      // Features data
      const features = [
        {
          id: 'plan-features',
          title: 'Plan Features',
          rows: [
            { name: 'Disk Space', basic: '20 GB SSD', business: '20 GB SSD', pro: '50 GB SSD' },
            { name: 'File (Inode) Limit', basic: '300.000', business: '300.000', pro: '600.000' },
            { name: 'Bandwidth', basic: 'Unmetered', business: 'Unmetered', pro: 'Unmetered' },
            { name: 'Hosted Domains', basic: '4', business: 'Unlimited', pro: 'Unlimited' },
            { name: 'Parked Domains', basic: 'Unlimited', business: 'Unlimited', pro: 'Unlimited' },
            { name: 'Subdomains', basic: '32', business: 'Unlimited', pro: 'Unlimited' },
            { 
              name: 'Backups', 
              basic: 'Twice a Week', 
              business: 'Twice a Week + Autobackup', 
              pro: 'Twice a Week + Autobackup' 
            }
          ]
        },
        {
          id: 'email-features',
          title: 'Email Features',
          rows: [
            { name: 'Email Accounts', basic: '100', business: 'Unlimited', pro: 'Unlimited' },
            { name: 'Email Storage', basic: '1 GB', business: '5 GB', pro: '10 GB' },
            { name: 'Email Forwarders', basic: 'Unlimited', business: 'Unlimited', pro: 'Unlimited' },
            { name: 'Auto-Responders', basic: 'Yes', business: 'Yes', pro: 'Yes' },
            { name: 'Mailing Lists', basic: 'No', business: 'Yes', pro: 'Yes' },
            { name: 'Spam Protection', basic: 'Basic', business: 'Advanced', pro: 'Advanced' }
          ]
        },
        {
          id: 'database-features',
          title: 'Databases Features',
          rows: [
            { name: 'MySQL Databases', basic: '5', business: 'Unlimited', pro: 'Unlimited' },
            { name: 'PostgreSQL Databases', basic: '1', business: '5', pro: 'Unlimited' },
            { name: 'Database Storage', basic: '1 GB', business: '5 GB', pro: '10 GB' },
            { name: 'phpMyAdmin', basic: 'Yes', business: 'Yes', pro: 'Yes' },
            { name: 'Remote MySQL', basic: 'Yes', business: 'Yes', pro: 'Yes' }
          ]
        },
        {
          id: 'mysql-features',
          title: 'MySQL Databases',
          rows: [
            { name: 'Max Connections', basic: '50', business: '100', pro: '200' },
            { name: 'Max User Connections', basic: '20', business: '50', pro: '100' },
            { name: 'Query Cache', basic: 'Yes', business: 'Yes', pro: 'Yes' },
            { name: 'InnoDB Support', basic: 'Yes', business: 'Yes', pro: 'Yes' }
          ]
        },
        {
          id: 'server-features',
          title: 'Server Features',
          rows: [
            { name: 'PHP Version', basic: '8.0', business: '8.0', pro: '8.0' },
            { name: 'SSH Access', basic: 'Yes', business: 'Yes', pro: 'Yes' },
            { name: 'Cron Jobs', basic: 'Yes', business: 'Yes', pro: 'Yes' },
            { name: 'Git Support', basic: 'Yes', business: 'Yes', pro: 'Yes' },
            { name: 'Node.js Support', basic: 'No', business: 'Yes', pro: 'Yes' },
            { name: 'Ruby Support', basic: 'No', business: 'Yes', pro: 'Yes' }
          ]
        }
      ];
    
      const activePlan = pricingPlans.find(plan => plan.id === activeTab);
       useEffect(() => {
    // typeof window !== 'undefined' &&
    //   require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
   
     <section className="rts-plan section__padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="rts-section text-center w-560">
            <h3 className="rts-section__title">Choose Your Plan</h3>
          </div>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-4 col-md-5">
            <div className="rts-pricing-plan__tab color-primary">
              <div className="tab__button">
                <div className="tab__button__item">
                  {pricingPlans.map((plan) => (
                    <button
                      key={plan.id}
                      className={`tab__btn ${activeTab === plan.id ? 'active' : ''}`}
                      onClick={() => setActiveTab(plan.id)}
                    >
                      {plan.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tab__content open">
          <div className="row">
            <div className="col-lg-12 p--0 overflow-x-scroll">
              <div className="rts-plan__table overflow-hidden">
                <table className="table-bordered">
                  <thead>
                    <tr>
                      <th className="package__left">
                        <Image 
                          src="/images/pricing/pricing-image.svg" 
                          alt="Pricing" 
                          width={100} 
                          height={100}
                        />
                      </th>
                      {activePlan.plans.map((plan, index) => (
                        <th key={index} className="package__item">
                          <div className="package__item__info">
                            <span className="package__type">{plan.type}</span>
                            <span className="start">{plan.renews}</span>
                            <h5 className="card-plan__price">
                              {plan.price} <sub>{plan.sub}</sub>
                            </h5>
                            <div className="card-plan__cartbtn">
                              <a href="#">Get Started</a>
                            </div>
                          </div>
                        </th>
                      ))}
                    </tr>
                  </thead>
                </table>

                <div className="accordion accordion-flush" id="rts-accordion">
                  {features.map((feature, index) => (
                    <div key={feature.id} className={`accordion-item ${index === 0 ? 'active' : ''}`}>
                      <div className="accordion-header" id={`heading-${feature.id}`}>
                        <h4 
                          className={`accordion-button ${index === 0 ? 'collapse show' : 'collapsed'}`}
                          data-bs-toggle="collapse"
                          data-bs-target={`#${feature.id}`}
                          aria-expanded={index === 0 ? 'true' : 'false'}
                          aria-controls={feature.id}
                        >
                          {feature.title}
                        </h4>
                      </div>
                      <div 
                        id={feature.id} 
                        className={`accordion-collapse collapse ${index === 0 ? 'show' : ''}`}
                        aria-labelledby={`heading-${feature.id}`}
                        data-bs-parent="#rts-accordion"
                      >
                        <div className="accordion-body">
                          <table className="table-bordered">
                            <tbody>
                              {feature.rows.map((row, rowIndex) => (
                                <tr key={rowIndex} data-filter="hardware">
                                  <td className="package__left">
                                    {row.name}
                                    <span 
                                      className="tolltip" 
                                      data-bs-toggle="tooltip" 
                                      data-bs-placement="bottom" 
                                      title="Explore, discover, and learn on our innovative and informative website."
                                    >
                                      <i className="fa-light fa-circle-question"></i>
                                    </span>
                                  </td>
                                  <td className="package__item">{row.basic}</td>
                                  <td className="package__item">{row.business}</td>
                                  <td className="package__item">{row.pro}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Plans
