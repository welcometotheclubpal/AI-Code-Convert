import React from 'react';

export const AboutUs = () => {
    return (
        <div className="pl-6 pr-6 pt-10 pb-10 mt-80 md:pl-20 md:pr-20 bg-black">
            <div id="about" className="text-color-info-light">
                <div className="text-2xl">About Us</div>
                <ul className="mt-4 list-disc list-inside">
                    <li className="mb-2">AICodeConvert(AI Code Converter | Code Converter AI) simplifies coding with AI by integrating AI Code Translator and AI Code Generator. </li>
                    <li className="mb-2">It efficiently translates existing code into different programming languages (AI Code Translator) and automatically generates high-quality code snippets and templates (AI Code Generator). </li>
                    <li className="mb-2">This powerful combination makes AICodeConvert an indispensable tool for developers,
                        providing a convenient and intelligent coding experience.</li>
                    <li className="mb-2">All for free(AI Code Convert | AI Code Converter).</li>
                    <li className="mb-2">Your Best AI Code Helper.</li>
                </ul>
            </div>
            <div id="contact" className="text-color-info-light pt-4">
                <div className="text-2xl">Contact</div>
                <div className="flex justify-start items-center mb-2 space-y-2 mt-2 flex-wrap">
                    <a href="https://ko-fi.com/audi_guzz" className="px-2 bg-[#f6db4b] cursor-pointer rounded-full mr-4 py-1">
                        <div className="flex justify-center items-center">
                            <p className="ml-2 mr-2 text-black font-semibold">Buy me a Coffee</p>
                            <svg width="30" height="30" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#eab308" d="M208 80H32a8 8 0 0 0-8 8v48a96.3 96.3 0 0 0 32.54 72H32a8 8 0 0 0 0 16h176a8 8 0 0 0 0-16h-24.54a96.59 96.59 0 0 0 27-40.09A40 40 0 0 0 248 128v-8a40 40 0 0 0-40-40Zm24 48a24 24 0 0 1-17.2 23a95.78 95.78 0 0 0 1.2-15V97.38A24 24 0 0 1 232 120ZM112 56V24a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0Zm32 0V24a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0Zm-64 0V24a8 8 0 0 1 16 0v32a8 8 0 0 1-16 0Z"/>
                            </svg>
                        </div>
                    </a>
                
                </div>
            </div>
        </div>
    );
};
