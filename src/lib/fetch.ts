import { flattenAttributes } from "@/lib/utils";
// import { headers } from "next/headers";
import { getStrapiURL } from "@/lib/utils";
import QueryString from "qs";

export async function fetchData(url: string, authToken?: string) {
  const headers = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${authToken}`,
    },
  };

  try {
    console.log('url',url);

    const response = await fetch(url  , authToken ? headers : {});
    console.log('response',response);
    const data = await response.json();
    if (!response.ok) throw new Error("Failed to fetch data");
    return flattenAttributes(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error; // or return null;
  }
}


export async function getBenefitsData() {
  const path = ("/api/pepsi-benefit");
  const baseUrl = getStrapiURL();
  const query = QueryString.stringify({
    populate: {
      image: {
        fields: ["url", "alternativeText", "name"],
      },
      item: {
        fields: ["id", "text", "heading", "icon"],
      },
    },
  }, {
    encodeValuesOnly: true, 
  });
  const url = new URL(path, baseUrl);
  url.search = query;
  const benefitsData = await fetchData(url.href);
  // const benefitsData = await data.json();
  console.log('benefits data..',benefitsData);
  return benefitsData;
}

export async function getContentWithImageData() {
  const path = ("/api/pepsi-content-section");
  const baseUrl = getStrapiURL();
  const query = QueryString.stringify({
    populate: {
      image: {
        fields: ["url", "alternativeText", "name"],
      },
    },
    fields: ["id", "heading", "text", "imageRight"],
  }, {
    encodeValuesOnly: true, 
  });
  const url = new URL(path, baseUrl);
  url.search = query;
  const contentWithImageData = await fetchData(url.href);
  // const contentWithImageData = await data.json();
  console.log('contentWithImageData data..',contentWithImageData);

  return contentWithImageData;
}

export async function getCtaData() {
  const path = ("/api/pepsi-cta");
  const baseUrl = getStrapiURL();
  const query = QueryString.stringify({
    populate: {
      fields: ["heading", "subHeading"],
      cta: {
        fields: ["href", "text", "external"],
      },
    },
  }, {
    encodeValuesOnly: true, 
  });
  const url = new URL(path, baseUrl);
  url.search = query;
  const ctaData = await fetchData(url.href);
  // const ctaData = await data.json();
  console.log('ctaData..',ctaData);

  return ctaData;
}

export async function getFaqData() {
  const path = ("/api/pepsi-faq");
  const baseUrl = getStrapiURL();

  const query = QueryString.stringify({
    populate: {
      questions: {
        populate: {
          data: {
            fields: ['question', 'answer'],
          },
        },
      },
    },
  });


  const url = new URL(path, baseUrl);
  url.search = query;
  const faqData = await fetchData(url.href);
  // const faqData = await data.json();
  console.log('faqData..',faqData);

  return faqData;
}

export async function getFooterData() {
  const path = "/api/pepsi-footer";
  const baseUrl = getStrapiURL();
  const query = QueryString.stringify({
    populate: {
      footer: {
        populate: {
          logoLink: {
            populate: {
              image: {
                fields: ["url", "alternativeText", "name"],
              },
            },
          },
          colOneLinks: {
            populate: true, // gets all fields
          },
          socialLinks: {
            populate: {
              socialLink: true, // gets all fields inside socialLink
            },
          },
        },
      },
    },
  }, {
    encodeValuesOnly: true, 
  });
  
  const url = new URL(path, baseUrl);
  url.search = query;
  const footerData = await fetchData(url.href);
  // const footerData = await data.json();
  console.log('footerData..',footerData);

  return footerData;
}

export async function getHeroData() {
  const path = ("/api/pepsi-hero");
  const baseUrl = getStrapiURL();
  const query = QueryString.stringify({
    populate: {
      cta: {
        fields: ["href", "text", "external"],
      },
      image: {
        fields: ["url", "alternativeText", "name"],
      },
    },
    }, {
      encodeValuesOnly: true, 
    });
  const url = new URL(path, baseUrl);
  url.search = query;
  const heroData = await fetchData(url.href);
  // const heroData = await data.json();
  console.log('heroData..',heroData);

  return heroData;
}

export async function getHeaderData() {
  const path = "/api/pepsi-header";
  const baseUrl = getStrapiURL();
  const query = QueryString.stringify({
    populate: {
         topnav: {
           populate: { 
             logoLink: {
               populate: {
                 image: {
                   fields: ["url", "alternativeText", "name"],
                 },
               },
             },
             link: {
                    populate: true,
             },
             cta: {
                       populate: true
             }
           },
         },
     },
  }, {
    encodeValuesOnly: true, 
  });

  const url = new URL(path, baseUrl);
  url.search = query;
  const headerData = await fetchData(url.href);
  // const headerData = await data.json();
  console.log('headerData..',headerData);

  return headerData;
}

export async function getSectionHeadingData() {
  const path = "/api/pepsi-section-heading";
  const baseUrl = getStrapiURL();
   const query = QueryString.stringify({
    populate: true,
  }, {
    encodeValuesOnly: true, 
  });
  const url = new URL(path, baseUrl);
  url.search = query;
  const sectionHeadingData = await fetchData(url.href);
  // const sectionHeadingData = await data.json();
  console.log('sectionHeadingData..',sectionHeadingData);

  return sectionHeadingData;
}

export async function getTestimonialsData() {
  const path = "/api/pepsi-testimonial";
  const baseUrl = getStrapiURL();
   const query = QueryString.stringify({
    populate: {
      card: {
        populate: {
          image: {
            fields: ["url", "alternativeText", "name"],
          },
        },
        fields: ["id", "text", "heading", "subHeading"],
      },
    },
  }, {
    encodeValuesOnly: true, 
  });
  const url = new URL(path, baseUrl);
  url.search = query;
  const testimonialsData = await fetchData(url.href);
  // const testimonialsData = await data.json();
  console.log('testimonialsData..',testimonialsData);

  return testimonialsData;
}

export async function getVideoData() {
  const path = "/api/pepsi-video";
  const baseUrl = getStrapiURL();
  
   const query = QueryString.stringify({
    videoId: {
      populate: true,
    },
  }, {
    encodeValuesOnly: true, 
  });
  const url = new URL(path, baseUrl);
  url.search = query;
  const videoData = await fetchData(url.href);
  // const videoData = await data.json();
  console.log('videoData..',videoData);

  return videoData;
}

// Add other API helpers as necessary
