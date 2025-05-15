// pages/index.tsx
import React from "react";
import {Benefits} from "@/components/Benefits";
import { Container } from "@/components/Container";
import { ContentWithImage } from "@/components/ContentWithImage";
import { Cta } from "@/components/Cta";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { Testimonials } from "@/components/Testimonials";
import { Video } from "@/components/Video";
import './../app/globals.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { 
    getBenefitsData, 
    getContentWithImageData,
    getCtaData,
    getFaqData,
    getFooterData,
    getHeroData,
    getHeaderData,
    getSectionHeadingData,
    getTestimonialsData, 
    getVideoData 
} from "@/lib/fetch";



interface HomePageProps {  
    benefitsData: any;
    contentWithImageData: any;
    ctaData: any;
    faqData: any;
    footerData: any;
    heroData: any;
    headerData: any;
    sectionHeadingData: any;
    testimonialsData: any;
    videoData: any; 
  }


export async function getStaticProps() {
  try {
    const benefitsData = await getBenefitsData();
    const contentWithImageData = await getContentWithImageData();
    const ctaData = await getCtaData();
    const faqData = await getFaqData();
    const footerData = await getFooterData();
    const heroData = await getHeroData();
    const headerData = await getHeaderData();
    const sectionHeadingData = await getSectionHeadingData();
    const testimonialsData = await getTestimonialsData();
    const videoData = await getVideoData();
    return {
        props: {
            benefitsData,
            contentWithImageData,
            ctaData,
            faqData,
            footerData,
            heroData,
            headerData,
            sectionHeadingData,
            testimonialsData,
            videoData,
        },  
        // revalidate: 60,
    };
  } catch (err) {
    console.error('Error fetching data in getStaticProps:', err);
    return { notFound: true }; // or fallback to empty props
  }
  }


  
  export default function HomePage(
    {
    benefitsData,
    contentWithImageData,
    ctaData,
    faqData,
    footerData,
    heroData,
    headerData,
    sectionHeadingData,
    testimonialsData,
    videoData,
  }: HomePageProps): React.ReactElement {
    return (
        <Container>
          {sectionHeadingData && <Navbar headerData={headerData} />}
          
          {heroData && <Hero heroData={heroData} />}
          {sectionHeadingData && <SectionHeading sectionHeadingData={sectionHeadingData} />}
          {benefitsData && <Benefits benefitsData={benefitsData} />}
          {contentWithImageData && <ContentWithImage contentWithImageData={contentWithImageData} />}
          {sectionHeadingData && <SectionHeading sectionHeadingData={sectionHeadingData} />}
          {videoData && <Video videoData={videoData} />}
          {sectionHeadingData && <SectionHeading sectionHeadingData={sectionHeadingData} />}
          {testimonialsData && <Testimonials testimonialsData={testimonialsData} />}
          {sectionHeadingData && <SectionHeading sectionHeadingData={sectionHeadingData} />}
          {faqData && <Faq faqData={faqData} />}
          {ctaData && <Cta ctaData={ctaData} />}
          {footerData && <Footer footerData={footerData} />}
        </Container>
      );
  
    }