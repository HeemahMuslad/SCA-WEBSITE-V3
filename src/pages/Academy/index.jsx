import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import { Helmet } from "react-helmet-async";
import academyHero from "../../images/academy/academy.png";
import guidance from "../../images/about/guidance.jpg";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import { apiConstants, paths } from "../../utils";
import bglineImage from "../../images/academy/bg-line.svg";
import { getAllSchools } from "../../services";
import { useQuery } from "@tanstack/react-query";

const LandingPage = () => {
  const { data, isLoading } = useQuery([apiConstants.academy], getAllSchools);

  const [schools, setSchools] = useState([]);

  useEffect(() => {
    if (!isLoading) {
      setSchools(data);
    }
  }, [data, isLoading]);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Academy</title>
        <meta
          name="description"
          content="Our Academy offers a range of tech training programs and boot camps across various tech fields"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="She Code Africa Academy" />
        <meta
          property="og:description"
          content="Our Academy offers a range of tech training programs and boot camps across various tech fields"
        />
        <meta name="twitter:title" content="She Code Africa Academy" />
        <meta
          name="twitter:description"
          content="Our Academy offers a range of tech training programs and boot camps across various tech fields"
        />
      </Helmet>

      <Header page={"academy"} />
      <main className=" text-secondary-main-black">
        <section className=" bg-hero-bg-gradient pt-16 md:pt-24 lg:pt-28">
          <div className="w-90 mx-auto min-h-[600px] flex flex-col justify-center 2md:justify-between 2md:flex-row md:items-center event-hero gap-8 py-12 2md:py-0 px-3 sm:px-0">
            <div className="w-full max-w-[600px] ">
              <h1 className="hero-heading capitalize font-bold text-[32px] md:text-[36px] 2md:text-[40px] text-center leading-[150%] mx-auto 2md:text-left">
                Unleash Your Potential.
              </h1>

              <p className="m-0 mt-2 text-center md:w-[90%] text-base md:text-2xl mx-auto 2md:mx-0 2md:w-full leading-[30px] text-seal-brown 2md:text-justify font-normal">
                Our Academy offers a range of tech training programs and boot
                camps across various tech fields. These programs are designed to
                equip African women with the necessary technical and soft skills
                to build a successful career in the industry.
              </p>
            </div>

            <div className="w-full 2md:w-1/2  2md:flex 2md:justify-end">
              <figure className="max-w-[400px] sm:max-w-[600px] 2md:max-w-[500px] w-full h-[500px] border-[7px] rounded-[42px] overflow-hidden border-primary-main-pink mx-auto 2md:mx-0">
                <img
                  src={academyHero}
                  alt="academy"
                  className="object-cover h-full w-full"
                />
              </figure>
            </div>
          </div>
        </section>

        <section id="mentor" className="my-32 w-10/12 mx-auto">
          {schools.length > 0 &&
            schools.map((school, index) => (
              <article
                className={`md:flex items-center justify-between my-40 ${
                  index % 2 === 0 && "flex-row-reverse"
                }`}
                key={index}
              >
                <div className="md:w-6/12">
                  <h2
                    aria-labelledby="mentor"
                    className="font-bold text-[32px] leading-[44px] text-primary-main-pink mb-4 capitalize"
                  >
                    {school.name}.
                  </h2>
                  <p className="text-lg text-[#210D15] mb-3">
                    {school?.description}
                  </p>

                  <Link
                    to={`/academy/${school.slug}`}
                    className="bg-[#FDC0E3] px-8 py-4 inline-block mt-3 rounded-full text-[#434343]"
                  >
                    View school
                  </Link>
                </div>
                <img
                  src={school.image || guidance}
                  alt="four people reviewing code"
                  className="object-contain h-[350px]"
                />
              </article>
            ))}

          <div className="flex items-center justify-center gap-8 mt-20">
            <Link
              className="bg-primary-main-pink px-8 py-[14px] mt-3 rounded-[30px] text-white text-base hover:bg-community-pink-bg hover:text-charcoal transition-all font-normal"
              to="/chapters"
              rel="noreferrer"
            >
              Become a mentor
            </Link>

            <Link
              className="bg-primary-main-pink px-8 py-[14px] mt-3 rounded-[30px] text-white text-base hover:bg-community-pink-bg hover:text-charcoal transition-all font-normal"
              to="/chapters"
              rel="noreferrer"
            >
              Become a mentee
            </Link>
          </div>
        </section>

        <section className="my-[120px]">
          <div className="relative text-center max-w-[80rem] 2xl:max-w-[90rem] mx-auto flex flex-col justify-center items-center py-12 lg:py-20 bg-white rounded-lg text-primary-dark-brown ">
            <div className="hidden lg:inline-block absolute top-0 left-0">
              {" "}
              <img className="w-52" src={bglineImage} alt="bg-line" />
            </div>
            <h2 className="font-normal text-4xl text-primary-dark-brown">
              Hire Our Graduates
            </h2>
            <p className="text-sm lg:text-base py-6 w-[80%] mx-auto lg:w-[55ch]">
              Access a pool of talented engineers from our renowned engineering
              school and take your business to the next level by building a
              skilled and diverse team
            </p>
            <Link
              to={paths.hire}
              className="rounded-lg text-white text-sm px-8 py-4 bg-primary-main-pink"
            >
              Hire Our Talent
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
