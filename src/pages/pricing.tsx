import Footer from "~/components/Footer";
import Header from "~/components/Header";
import Head from "next/head";
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";
import Tooltip from "~/components/Tooltip";
import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import CTA from "~/components/CTA";
import VideoRecordModal from "~/components/VideoRecordModal";

export default function Pricing() {
  const [billedAnnually, setBilledAnnually] = useState<boolean>(false);

  return (
    <>
      <Head>
        <title>{"Snapify | Pricing"}</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <div className="my-20 flex h-40 items-center justify-center sm:mx-10 lg:mx-20">
        <span className="text-center text-4xl font-bold lg:text-7xl">
          Choose the plan that fits your needs.
        </span>
      </div>

      <div className="relative mx-4 mb-20 flex flex-row gap-4 lg:mx-16 lg:gap-16">
        <div className="absolute left-[calc(50%_-_calc(min(75vw,500px)_/_2))] h-[min(75vw,500px)] w-[min(75vw,500px)] bg-[radial-gradient(circle_at_center,#666_0,#fff_100%)] opacity-80 blur-[calc(0.5_*_min(75vw,500px))]"></div>
        {[
          {
            name: "Free",
            price: { monthly: 0, annual: 0 },
            features: [
              {
                feature: "Unlimited video recording",
                description: "Record and share unlimited videos",
              },
              {
                feature: "10 video uploads",
                description: "Upload external videos to your Library",
              },
              {
                feature: "Remove branding",
                description: "Remove Snapify branding from your videos",
              },
            ],
          },
          {
            name: "Pro",
            price: { monthly: 5, annual: 4 },
            features: [
              {
                feature: "Unlimited videos",
                description: "Record and share unlimited videos",
              },
              {
                feature: "Video uploads",
                description: "Upload external videos to your Library",
              },
              {
                feature: "Remove branding",
                description: "Remove Snapify branding from your videos",
              },
            ],
          },
        ].map(({ name, price, features }) => (
          <div
            key={name}
            className="relative flex-1 rounded-3xl border bg-white shadow-sm"
          >
            {name === "Pro" ? (
              <div className="absolute -top-6 left-2/4 z-[1] mt-0 -translate-x-2/4 cursor-default select-none rounded-3xl border-0 border-solid border-[#eaeaea] bg-[linear-gradient(180deg,rgba(0,0,0,.8),#000)] px-[22px] py-3.5 text-white shadow-[0_8px_30px_rgb(0_0_0/6%)] backdrop-blur-[2px]">
                <span className="text-xs font-bold">Most Popular</span>
              </div>
            ) : null}
            <div className="hero relative flex flex-col items-start rounded-3xl px-6 py-6 shadow-sm">
              <div className="rounded-lg bg-white/20 px-2 font-medium">
                {name}
              </div>
              <div className="mb-2 mt-4 flex items-end text-5xl font-extrabold tracking-tight">
                {billedAnnually ? price.annual : price.monthly}
                <span className="mb-1 text-sm opacity-80">/ mo.</span>
              </div>
              <div className="mt-2 text-sm">
                {billedAnnually ? "billed annually" : "billed monthly"}
              </div>
              <div className="mt-2 flex-grow" />
              <button
                type="submit"
                className="btn mt-4 block w-full appearance-none rounded-lg bg-black px-4 py-2.5 text-center text-sm font-medium text-white shadow-lg shadow-black/50 duration-100 focus:outline-transparent disabled:opacity-80"
              >
                Get started
              </button>
            </div>
            <div className="mt-4 flex flex-col gap-2 pb-8">
              {features.map(({ feature, description }) => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-gray-500"
                >
                  <div className="ml-6 h-5 w-5 flex-none">
                    <CheckIcon />
                  </div>

                  <Tooltip title={description}>
                    <div className="text-base text-gray-500 underline decoration-gray-400 decoration-dashed underline-offset-4">
                      {feature}
                    </div>
                  </Tooltip>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center border-y border-[#eaeaea] bg-[#fafafa] pb-8">
        <div className="mb-12 mt-8">
          <span className="text-5xl font-bold">FAQs</span>
        </div>
        <div className="flex flex-1 border-collapse flex-col justify-center px-6">
          {[
            {
              question: "What is your refund policy?",
              answer:
                "If you're unhappy with your purchase for any reason, email us within 90 days and we'll refund you in full, no questions asked.",
            },
            {
              question: "Do you offer technical support?",
              answer: "No",
            },
            {
              question: "Which payment formats and currencies do you accept?",
              answer:
                "All payments on our standard plans are via credit card and PayPal.\n" +
                "\n" +
                "We use Paddle, the leading Merchant of Record for SaaS companies.\n" +
                "\n" +
                "Contact us if you need an alternative payment method.",
            },
          ].map(({ answer, question }) => (
            <Disclosure
              key={question}
              as="div"
              className="w-[600px] max-w-[600px]"
            >
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex h-12 w-full items-center justify-between border-t border-[#eaeaea] px-4 py-8 text-left text-sm font-medium">
                    <span>{question}</span>
                    <ChevronUpIcon
                      className={`transition-transform ${
                        open ? "rotate-180" : ""
                      } h-5 w-5`}
                    />
                  </Disclosure.Button>
                  <Transition
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel className="px-4 pb-2 pt-0 text-sm text-gray-500">
                      {answer}
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          ))}
        </div>
      </div>

      <CTA />

      <Footer />

      <VideoRecordModal />
    </>
  );
}
