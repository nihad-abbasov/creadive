"use client";

import Script from "next/script";

// interface SchemaProps {
//     type: "organization" | "website" | "article" | "service" | "product";
//     data?: unknown;
// }

interface SchemaData {
    id?: number | string;
    title?: string;
    name?: string;
    description?: string;
    excerpt?: string;
    image?: string;
    url?: string;
    date?: string;
    author?: {
        name?: string;
        linkedin?: string;
    };
    category?: string;
    price?: string;
}

interface SchemaProps {
    type: "organization" | "website" | "article" | "service" | "product";
    data?: SchemaData;
}

export default function Schema({ type, data }: SchemaProps) {
    const generateSchema = () => {
        const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://creadive.az";

        switch (type) {
            case "organization":
                return {
                    "@context": "https://schema.org",
                    "@type": "Organization",
                    name: "Creadive Agency",
                    url: baseUrl,
                    logo: `${baseUrl}/logos/black_h.png`,
                    description: "Kreativ rəqəmsal agentlik - vebsayt yaradılması, dizayn və marketinq xidmətləri",
                    address: {
                        "@type": "PostalAddress",
                        addressLocality: "Bakı",
                        addressCountry: "AZ"
                    },
                    contactPoint: {
                        "@type": "ContactPoint",
                        telephone: "+994-10-531-99-87",
                        contactType: "customer service",
                        email: "info@creadive.az"
                    },
                    sameAs: [
                        "https://www.instagram.com/creadive.az",
                        "https://www.linkedin.com/company/creadive-az",
                        "https://www.facebook.com/creadive.az"
                    ],
                    founder: {
                        "@type": "Person",
                        name: "Nihad Abbasov",
                        jobTitle: "Founder & CEO",
                        url: "https://www.linkedin.com/in/nihad-abbasov-dev"
                    },
                    employee: [
                        {
                            "@type": "Person",
                            name: "Ənvər Nağıyev",
                            jobTitle: "Rəqəmsal Marketinq Mütəxəssisi"
                        },
                        {
                            "@type": "Person",
                            name: "Cavid Məmmədli",
                            jobTitle: "Creative Dizayner"
                        }
                    ],
                    serviceArea: {
                        "@type": "GeoCircle",
                        geoMidpoint: {
                            "@type": "GeoCoordinates",
                            latitude: 40.3777,
                            longitude: 49.8920
                        },
                        geoRadius: "50000"
                    },
                    areaServed: "AZ",
                    hasOfferCatalog: {
                        "@type": "OfferCatalog",
                        name: "Xidmətlərimiz",
                        itemListElement: [
                            {
                                "@type": "Offer",
                                itemOffered: {
                                    "@type": "Service",
                                    name: "Vebsayt yaradılması",
                                    description: "Modern və funksional veb saytlar və tətbiqlər"
                                }
                            },
                            {
                                "@type": "Offer",
                                itemOffered: {
                                    "@type": "Service",
                                    name: "SMM",
                                    description: "Sosial media platformalarında professional idarəetmə"
                                }
                            },
                            {
                                "@type": "Offer",
                                itemOffered: {
                                    "@type": "Service",
                                    name: "UI/UX Dizayn",
                                    description: "İstifadəçi təcrübəsini artıran kreativ dizayn həlləri"
                                }
                            }
                        ]
                    }
                };

            case "website":
                return {
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    name: "Creadive Agency",
                    url: baseUrl,
                    description: "Kreativ rəqəmsal agentlik - vebsayt yaradılması, dizayn və marketinq xidmətləri",
                    publisher: {
                        "@type": "Organization",
                        name: "Creadive Agency",
                        logo: {
                            "@type": "ImageObject",
                            url: `${baseUrl}/logos/black_h.png`
                        }
                    },
                    potentialAction: {
                        "@type": "SearchAction",
                        target: {
                            "@type": "EntryPoint",
                            urlTemplate: `${baseUrl}/search?q={search_term_string}`
                        },
                        "query-input": "required name=search_term_string"
                    }
                };

            case "article":
                return {
                    "@context": "https://schema.org",
                    "@type": "Article",
                    headline: data?.title || "Blog Post",
                    description: data?.excerpt || "Blog post description",
                    image: data?.image ? `${baseUrl}${data.image}` : undefined,
                    author: {
                        "@type": "Person",
                        name: data?.author?.name || "Creadive Team",
                        url: data?.author?.linkedin || baseUrl
                    },
                    publisher: {
                        "@type": "Organization",
                        name: "Creadive Agency",
                        logo: {
                            "@type": "ImageObject",
                            url: `${baseUrl}/logos/black_h.png`
                        }
                    },
                    datePublished: data?.date || new Date().toISOString(),
                    dateModified: data?.date || new Date().toISOString(),
                    mainEntityOfPage: {
                        "@type": "WebPage",
                        "@id": `${baseUrl}/blog/${data?.id}`
                    }
                };

            case "service":
                return {
                    "@context": "https://schema.org",
                    "@type": "Service",
                    name: data?.title || "Digital Service",
                    description: data?.description || "Professional digital service",
                    provider: {
                        "@type": "Organization",
                        name: "Creadive Agency",
                        url: baseUrl
                    },
                    areaServed: "AZ",
                    serviceType: data?.category || "Digital Marketing",
                    offers: {
                        "@type": "Offer",
                        priceCurrency: "AZN",
                        price: data?.price || "500",
                        priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString()
                    }
                };

            case "product":
                return {
                    "@context": "https://schema.org",
                    "@type": "SoftwareApplication",
                    name: data?.name || "Product",
                    description: data?.description || "Product description",
                    url: data?.url || baseUrl,
                    applicationCategory: "BusinessApplication",
                    operatingSystem: "Web",
                    offers: {
                        "@type": "Offer",
                        price: "0",
                        priceCurrency: "AZN"
                    },
                    author: {
                        "@type": "Organization",
                        name: "Creadive Agency",
                        url: baseUrl
                    }
                };

            default:
                return null;
        }
    };

    const schema = generateSchema();

    if (!schema) return null;

    return (
        <Script
            id={`schema-${type}`}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
} 