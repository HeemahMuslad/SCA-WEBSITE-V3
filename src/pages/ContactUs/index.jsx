import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import PrimaryInput from "../../components/ContactUs/inputs/PrimaryInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const ContactUsPage = () => {
  const schema = yup
    .object({
      name: yup.string().required("Please enter your name"),
      email: yup
        .string()
        .email("Please enter a valid email address.")
        .required("Please enter your email address."),
      subject: yup.string().required("Please enter a message title."),
      messageBody: yup.string().required("Please enter your message."),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onsubmit = (data) => console.log(data);
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact Page</title>
        <meta
          name="description"
          content="Get free access to events focused on empowering and getting more young girls and women into technology across cities and tertiary institutions in Africa."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Events" />
        <meta
          property="og:description"
          content="Get free access to events focused on empowering and getting more young girls and women into technology across cities and tertiary institutions in Africa."
        />
        <meta name="twitter:title" content="Events" />
        <meta
          name="twitter:description"
          content="Get free access to events focused on empowering and getting more young girls and women into technology across cities and tertiary institutions in Africa."
        />
      </Helmet>
      <Header />
      <main className=" text-secondary-main-black">
        <section className=" bg-primary-main-pink pt-16 md:pt-24 lg:pt-28">
          <div className="w-90 mx-auto min-h-[541px] flex flex-col justify-center 2md:justify-between 2md:flex-row md:items-center event-hero gap-8 py-12 2md:py-0 px-3 sm:px-0 star-bg">
            <div className="w-full max-w-[832px] mx-auto">
              <h1 className="hero-heading capitalize font-bold text-[32px] md:text-[36px] 2md:text-[40px] text-center leading-[150%] mx-auto text-white">
                contact us
              </h1>

              <p className="text-base md:text-lg mt-4 text-center text-white font-medium w-[85%] lg:w-full lg:max-w-[676px] mx-auto">
                Thank you for your interest in She Code Africa.
              </p>
              <p className="text-base md:text-lg text-center text-white font-medium w-[85%] lg:w-full lg:max-w-[676px] mx-auto">
                Reach out to us. Send an email to{" "}
                <a href="mailto:info@shecodeafrica.org" className="font-bold">
                  info@shecodeafrica.org
                </a>{" "}
                or fill the form below and send. If you would like to support
                our mission, please see our “partner with us” section.
              </p>
            </div>
          </div>
        </section>

        <section className="w-[90%] max-w-[900px] mx-auto mt-10 md:mt-12">
          <form className="w-full" onSubmit={handleSubmit(onsubmit)}>
            <div className="flex flex-col md:flex-row gap-5 md:gap-20">
              <div className="w-full md:w-[50%]">
                <PrimaryInput
                  register={register}
                  label="name"
                  name="name"
                  placeholder="Enter your name"
                  type="text"
                  errors={errors.name}
                />
                <PrimaryInput
                  register={register}
                  label="email address"
                  name="email"
                  placeholder="Enter your email address"
                  type="email"
                  errors={errors.email}
                />
                <PrimaryInput
                  register={register}
                  label="enter subject"
                  name="subject"
                  placeholder="What is the subject of this message"
                  type="text"
                  errors={errors.subject}
                />
              </div>

              <div className="w-full md:w-[50%]">
                <label
                  htmlFor="message"
                  className="text-base capitalize font-medium text-[rgba(46,52,79,1)]"
                >
                  enter message
                </label>
                <div
                  className={`w-full md:max-w-[549px] h-[290px] mt-2 rounded-md border border-gains overflow-hidden ${
                    errors.messageBody?.message && "border-primary-main-pink"
                  }`}
                >
                  <textarea
                    {...register("messageBody")}
                    name="messageBody"
                    placeholder="Write your message"
                    className="text-base w-full h-full border-0 outline-none p-3 bg-white placeholder:text-[rgba(130,130,130,1)] resize-none"
                  ></textarea>
                </div>
                <p className="text-primary-main-pink text-sm">
                  {errors.messageBody?.message}
                </p>
              </div>
            </div>

            <div className="flex md:justify-end w-full">
              <div className="mt-5 md:mt-8 w-full max-w-[177px] rounded-[30px] h-[56px] overflow-hidden bg-primary-main-pink">
                <button className="w-full h-full text-white capitalize">
                  send message
                </button>
              </div>
            </div>
          </form>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default ContactUsPage;
