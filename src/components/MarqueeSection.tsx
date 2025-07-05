'use client';

import React from 'react';
import { clientLogos } from '@/data/clientLogos';

const MarqueeSection: React.FC = () => {
    return (
        <section className="relative py-8 sm:py-12 lg:py-16 bg-gradient-to-b from-gray-900 to-black overflow-hidden group">
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-all duration-700 flex items-center justify-center z-20 backdrop-blur-[2px]">
                <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light tracking-wider text-center px-4 transform transition-transform group-hover:scale-105 duration-500">
                    I&apos;ve worked with amazing clients
                </p>
            </div>

            {/* Marquee Content */}
            <div className="relative flex flex-col gap-8 sm:gap-12 lg:gap-16 py-6 sm:py-8 lg:py-12">
                {/* First Row */}
                <div className="flex animate-marquee-infinite">
                    <div className="flex gap-8 sm:gap-12 md:gap-20 lg:gap-32 min-w-full">
                        {clientLogos.map((client) => (
                            <div
                                key={client.name}
                                className="flex-none h-10 sm:h-12 md:h-16 lg:h-20 filter grayscale hover:grayscale-0 hover:scale-110 transition-all duration-500"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="h-full w-auto object-contain hover:brightness-125"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-8 sm:gap-12 md:gap-20 lg:gap-32 min-w-full">
                        {clientLogos.map((client) => (
                            <div
                                key={`${client.name}-duplicate`}
                                className="flex-none h-10 sm:h-12 md:h-16 lg:h-20 filter grayscale hover:grayscale-0 hover:scale-110 transition-all duration-500"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="h-full w-auto object-contain hover:brightness-125"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Second Row (Reverse Direction) */}
                <div className="flex animate-marquee-infinite-reverse">
                    <div className="flex gap-8 sm:gap-12 md:gap-20 lg:gap-32 min-w-full">
                        {[...clientLogos].reverse().map((client) => (
                            <div
                                key={`${client.name}-reverse`}
                                className="flex-none h-10 sm:h-12 md:h-16 lg:h-20 filter grayscale hover:grayscale-0 hover:scale-110 transition-all duration-500"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="h-full w-auto object-contain hover:brightness-125"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                    <div className="flex gap-8 sm:gap-12 md:gap-20 lg:gap-32 min-w-full">
                        {[...clientLogos].reverse().map((client) => (
                            <div
                                key={`${client.name}-reverse-duplicate`}
                                className="flex-none h-10 sm:h-12 md:h-16 lg:h-20 filter grayscale hover:grayscale-0 hover:scale-110 transition-all duration-500"
                            >
                                <img
                                    src={client.logo}
                                    alt={client.name}
                                    className="h-full w-auto object-contain hover:brightness-125"
                                    loading="lazy"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Gradient Overlays - Responsive */}
            <div className="absolute inset-y-0 left-0 w-20 sm:w-32 lg:w-40 bg-gradient-to-r from-gray-900 via-gray-900/90 to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-20 sm:w-32 lg:w-40 bg-gradient-to-l from-gray-900 via-gray-900/90 to-transparent z-10" />
        </section>
    );
};

export default MarqueeSection;