import Image from "next/image";
import AreaGraph from "./AreaGraph";
import { Container } from "./Container";

import lexiAvatar from "@/images/avatars/lexi.webp";
import Link from "next/link";
import { RiExternalLinkLine } from "@remixicon/react";

export default function CaseStudy() {
  return (
    <section id="case-study" className="relative overflow-clip bg-emerald-600  pb-28 pt-20 sm:py-32">
      <Container className="relative">
        <div className="mx-auto max-w-2xl md:text-center">
          <h2 className="font-display text-3xl tracking-tight text-white sm:text-4xl">
            Featured success story
          </h2>
          <p className="mt-4 text-lg tracking-tight text-emerald-100">
            Get online in days, not months. We build industry-focused websites to help you experience growth and start driving organic traffic. The process is simple:
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 mt-16 md:grid-cols-2">
          <div className="flex flex-col justify-center gap-4">
            <div className="flex flex-col pb-10 sm:pb-16 lg:pb-0 sm:px-12">
            <figure className="py-4 flex flex-auto flex-col justify-between">
              <blockquote className="text-lg leading-8 text-emerald-100">
                <p>
                  &quot;Pure Cleaning Victoria has experienced exponential growth since implementing this website. It has been the key component in lead generation, instrumental in attracting new customers and expanding our reach. Every aspect is carefully curated to our niche, and is undoubtedly the reason for our rapid success as a new company in the space&quot;
                </p>
              </blockquote>
                <figcaption className="mt-10 flex items-center gap-x-6">
                  <div className="relative overflow-clip h-14 w-14 rounded-full bg-gray-50">
                    <Image
                      className="object-cover inset-0"
                      src={lexiAvatar}
                      alt="A headshot of of a woman laughing outside"
                      width={56}
                      height={56}
                    />
                </div>
                <div className="text-base">
                    <div className="font-semibold text-white">Lexi Vindisch</div>
                    <div className="mt-1 text-emerald-100">Owner at <Link className="font-medium text-white hover:opacity-50 transition-opacity" href="https://www.purecleaningvictoria.com">Pure Cleaning Victoria <span><RiExternalLinkLine size={16} className="inline" /></span></Link></div>
                </div>
              </figcaption>
            </figure>
          </div>
          </div>
          <AreaGraph />
        </div>
      </Container>
    </section>
  )
}