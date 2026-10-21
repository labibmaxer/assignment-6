import React from 'react';
import userImg from '../assets/products/user.png';
import packageImg from '../assets/products/package.png';
import rocketImg from '../assets/products/rocket.png';

const steps = [
  {
    num: '01',
    img: userImg,
    title: 'Create Account',
    desc: 'Sign up for free in seconds. No credit card required to get started.',
  },
  {
    num: '02',
    img: packageImg,
    title: 'Choose Products',
    desc: 'Browse our catalog and select the tools that fit your needs.',
  },
  {
    num: '03',
    img: rocketImg,
    title: 'Start Creating',
    desc: 'Download and start using your premium tools immediately.',
  },
];

const Steps = () => {
  return (
    <section className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Get Started In 3 Steps
          </h2>
          <p className="text-sm text-gray-500">
            Start using premium digital tools in minutes, not hours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative rounded-xl bg-white p-8 text-center shadow-sm"
            >
              <span className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-purple-600 text-xs font-semibold text-white">
                {step.num}
              </span>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100">
                <img src={step.img} alt={step.title} className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{step.title}</h3>
              <p className="mx-auto max-w-xs text-sm text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Steps;