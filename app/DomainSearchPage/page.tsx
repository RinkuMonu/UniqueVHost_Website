"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  CheckCircle,
  XCircle,
  Globe2,
  ShoppingCart,
  RefreshCw,
  Info,
  Shield,
  Zap,
  Star,
  Lock,
} from "lucide-react";
import Link from "next/link";

interface DomainItem {
  name: string;
  price: string;
  salePrice: string;
  popular: boolean;
  available: boolean;
  inCart: boolean;
  fullDomain?: string;
}
interface WhoisData {
  domain: string;
  registrar: string;
  creationDate: string;
  expiryDate: string;
  updatedDate: string;
  status: string;
  nameServers: string[];
  registrant: string;
  adminContact: string;
  techContact: string;
  rawData: string;
}

export default function DomainSearchPage() {
  const [domain, setDomain] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [whoisData, setWhoisData] = useState<WhoisData | null>(null);

  const [activeTab, setActiveTab] = useState("search");
  const [domainResults, setDomainResults] = useState<DomainItem[]>([
    {
      name: ".com",
      price: "$12.99",
      salePrice: "$9.99",
      popular: true,
      available: true,
      inCart: false,
    },
    {
      name: ".net",
      price: "$15.99",
      salePrice: "$12.99",
      popular: false,
      available: true,
      inCart: false,
    },
    {
      name: ".org",
      price: "$10.99",
      salePrice: "$8.99",
      popular: false,
      available: true,
      inCart: false,
    },
    {
      name: ".io",
      price: "$39.99",
      salePrice: "$32.99",
      popular: true,
      available: true,
      inCart: false,
    },
    {
      name: ".dev",
      price: "$19.99",
      salePrice: "$14.99",
      popular: false,
      available: true,
      inCart: false,
    },
    {
      name: ".ai",
      price: "$69.99",
      salePrice: "$59.99",
      popular: true,
      available: true,
      inCart: false,
    },
  ]);
  const [cart, setCart] = useState<DomainItem[]>([]);

  const checkAvailability = () => {
    if (!domain) return;

    setSearchLoading(true);
    setWhoisLoading(false);
    setSearchTerm(domain);
    setActiveTab("search");

    setTimeout(() => {
      const updatedResults = domainResults.map((d) => ({
        ...d,
        fullDomain: `${domain.split(".")[0] || "example"}${d.name}`,
      }));
      setDomainResults(updatedResults);
      setSearchLoading(false);
      setShowResults(true);
    }, 1500);
  };

  const lookupWhois = () => {
    if (!domain) return;

    setWhoisLoading(true);
    setSearchLoading(false);
    setActiveTab("whois");

    setTimeout(() => {
      setWhoisData({
        domain,
        registrar: "Example Registrar, Inc.",
        creationDate: "2021-01-05",
        expiryDate: "2026-01-05",
        updatedDate: "2023-05-15",
        status: "Active",
        nameServers: ["ns1.example.com", "ns2.example.com"],
        registrant: "REDACTED FOR PRIVACY",
        adminContact: "REDACTED FOR PRIVACY",
        techContact: "REDACTED FOR PRIVACY",
        rawData: `Domain Name: ${domain}\nRegistrar: Example Registrar, Inc.\nCreation Date: 2021-01-05\nExpiration Date: 2026-01-05\nUpdated Date: 2023-05-15\nStatus: Active\nName Server: ns1.example.com\nName Server: ns2.example.com`,
      });
      setWhoisLoading(false);
      setShowResults(true);
    }, 1500);
  };

  const addToCart = (item: DomainItem) => {
    setDomainResults(
      domainResults.map((d) =>
        d.name === item.name ? { ...d, inCart: true } : d
      )
    );
    setCart([...cart, item]);
  };

  const removeFromCart = (item: DomainItem) => {
    setDomainResults(
      domainResults.map((d) =>
        d.name === item.name ? { ...d, inCart: false } : d
      )
    );
    setCart(cart.filter((c) => c.name !== item.name));
  };

  const [searchLoading, setSearchLoading] = useState(false);
  const [whoisLoading, setWhoisLoading] = useState(false);

  return (
    <div className="min-h-screen text-gray-800">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-amber-50 to-white">
        <div className="container mx-auto px-6 py-24 text-center">
          <div className="absolute -top-20 -left-32 w-80 h-80 bg-[#FD5D07]/10 rounded-full"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-[#FD5D07]/10 rounded-full"></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Find the perfect domain name
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Search domain availability or check WHOIS information instantly.
            </p>
            <div className="relative flex items-center overflow-hidden">
              <input
                type="text"
                placeholder="example.com"
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="flex-grow bg-white px-6 py-4 focus:outline-none border  rounded-xl mr-3 text-lg placeholder-gray-400"
                style={{ height: "-webkit-fill-available" }}
              />
              <button
                onClick={checkAvailability}
                disabled={searchLoading || whoisLoading || !domain}
                className={`flex items-center rounded-sm mr-3 px-6 py-4 font-semibold transition ${
                  !domain || searchLoading || whoisLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-amber-600 hover:bg-amber-700 text-white"
                }`}
              >
                {searchLoading ? (
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                ) : (
                  <Search className="w-5 h-5 mr-2" />
                )}
                Search
              </button>

              <button
                onClick={lookupWhois}
                disabled={whoisLoading || searchLoading || !domain}
                className={`flex items-center rounded-sm px-6 py-4 font-semibold transition ${
                  !domain || whoisLoading || searchLoading
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-amber-600 hover:bg-amber-700 text-white"
                }`}
              >
                {whoisLoading ? (
                  <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                ) : (
                  <Globe2 className="w-5 h-5 mr-2" />
                )}
                WHOIS
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Dynamic Results */}
      <AnimatePresence>
        {showResults && activeTab === "search" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="container mx-auto px-6 pb-20"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 mt-10">
              <div className="border-b border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Results for{" "}
                  <span className="text-amber-600">{searchTerm}</span>
                </h2>
                <p className="text-gray-600 mt-1">
                  {domainResults.length} domains available
                </p>
              </div>
              <div className="divide-y divide-gray-200">
                {domainResults.map((d, i) => (
                  <div
                    key={i}
                    className="p-6 hover:bg-gray-50 transition flex justify-between items-center flex-wrap"
                  >
                    <div className="flex items-center">
                      {d.available ? (
                        <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-500 mr-3" />
                      )}
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">
                          {d.fullDomain}
                        </h3>
                        {d.popular && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-amber-100 text-amber-800 mt-1">
                            <Star className="w-3 h-3 mr-1" /> Popular
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 mt-3 md:mt-0">
                      <div className="text-right">
                        <span className="text-lg font-bold text-gray-900">
                          {d.salePrice}
                        </span>
                        <span className="ml-2 text-sm text-gray-500 line-through">
                          {d.price}
                        </span>
                        <p className="text-xs text-gray-500 mt-1">First year</p>
                      </div>
                      {d.available &&
                        (d.inCart ? (
                          <button
                            onClick={() => removeFromCart(d)}
                            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium transition flex items-center"
                          >
                            <ShoppingCart className="w-4 h-4 mr-2" /> Added
                          </button>
                        ) : (
                          <button
                            onClick={() => addToCart(d)}
                            className="px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition flex items-center"
                          >
                            <ShoppingCart className="w-4 h-4 mr-2" /> Add
                          </button>
                        ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Proceed to Cart button */}
              {cart.length > 0 && (
                <div className="flex justify-end p-6 border-t border-gray-200 bg-gray-50">
                  <Link
                    href={"/cart"}
                    className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-lg font-medium transition shadow-md"
                  >
                    Proceed to Cart ({cart.length})
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {showResults && activeTab === "whois" && whoisData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="container mx-auto px-6 pb-20"
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
              <div className="border-b border-gray-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  WHOIS for{" "}
                  <span className="text-amber-600">{whoisData.domain}</span>
                </h2>
              </div>
              <div className="p-6">
                <pre className="bg-gray-50 p-4 rounded text-sm overflow-x-auto">
                  {whoisData.rawData}
                </pre>
              </div>
              <div className="bg-gray-50 p-4 border-t border-gray-200 text-sm text-gray-600 flex items-center">
                <Lock className="w-4 h-4 mr-2 text-green-500" /> Some info may
                be hidden due to privacy.
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {/* Pricing by TLD */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Pricing by TLD
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600">
            Explore popular extensions for your brand.
          </p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {[
            { tld: ".com", price: "$9.99" },
            { tld: ".net", price: "$12.99" },
            { tld: ".org", price: "$8.99" },
            { tld: ".io", price: "$32.99" },
            { tld: ".ai", price: "$59.99" },
          ].map((tld, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:border-amber-300 transition shadow-sm"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {tld.tld}
              </h3>
              <p className="text-gray-600">Starting at</p>
              <p className="text-lg font-bold text-amber-600">{tld.price}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-br from-amber-50 to-white">
        <div className="container mx-auto px-6 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Everything you need to get online
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-gray-600">
              Fast, reliable and secure services for your brand.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Globe2 className="w-8 h-8 text-amber-500" />,
                title: "Domain Registration",
                description: "Search, find and secure your name easily.",
              },
              {
                icon: <Shield className="w-8 h-8 text-amber-500" />,
                title: "WHOIS Privacy",
                description: "Keep your contact information private.",
              },
              {
                icon: <Zap className="w-8 h-8 text-amber-500" />,
                title: "Instant Setup",
                description: "Start using your domain immediately.",
              },
            ].map((f, i) => (
              <div
                key={i}
                className="bg-white p-8 rounded-xl border border-gray-200 hover:shadow-lg hover:-translate-y-1 transition"
              >
                <div className="w-14 h-14 mb-6 rounded-full bg-amber-100 flex items-center justify-center">
                  {f.icon}
                </div>
                <h3 className="text-xl font-bold mb-1 text-gray-900 relative inline-block after:block after:w-10 after:h-1 after:bg-amber-500 after:mt-1">
                  {f.title}
                </h3>
                <p className="text-gray-600 mt-2">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* WHOIS Lookup */}
      <div className="container mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 inline-block border-b-4 border-amber-500 pb-1">
            WHOIS Lookup
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 mt-4">
            Check ownership details, name servers, and privacy status in
            seconds.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              icon: <Info className="w-8 h-8 text-white" />,
              title: "Detailed Records",
              description:
                "Access registrar, creation, expiration, and status information.",
            },
            {
              icon: <Globe2 className="w-8 h-8 text-white" />,
              title: "Name Servers",
              description:
                "See DNS configuration and pointing details instantly.",
            },
            {
              icon: <Shield className="w-8 h-8 text-white" />,
              title: "Privacy Check",
              description: "Find out if WHOIS privacy is enabled on a domain.",
            },
          ].map((f, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-md hover:shadow-xl hover:scale-[1.03] transition transform"
            >
              <div className="w-14 h-14 mb-6 rounded-full bg-gradient-to-r from-amber-500 to-amber-600 flex items-center justify-center shadow-lg">
                {f.icon}
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                {f.title}
              </h3>
              <p className="text-gray-600">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
