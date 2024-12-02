import React from 'react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: 'Consulting',
    description: 'Get expert advice to shape your business strategies and achieve sustainable growth.',
    icon: '📊',
    action: 'Learn More',
    link: '/consulting',
  },
  {
    title: 'Development',
    description:
      'We build scalable, secure, and user-friendly software tailored to your unique needs.',
    icon: '💻',
    action: 'Get Started',
    link: '/development',
  },
  {
    title: 'UI/UX Design',
    description:
      'Crafting beautiful and intuitive designs that reflect your brand identity and captivate your users.',
    icon: '🎨',
    action: 'Explore',
    link: '/design',
  },
  {
    title: 'Digital Marketing',
    description:
      'Expand your reach with data-driven strategies, SEO, and targeted campaigns.',
    icon: '📈',
    action: 'Discover More',
    link: '/marketing',
  },
  {
    title: 'Data Analytics',
    description:
      'Leverage your data with actionable insights to drive smarter business decisions.',
    icon: '📊',
    action: 'Find Out More',
    link: '/analytics',
  },
  {
    title: 'Cloud Solutions',
    description:
      'Accelerate your business transformation with secure and scalable cloud solutions.',
    icon: '☁️',
    action: 'See Details',
    link: '/cloud',
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 text-center">
        {/* Section Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-green-900">
          Our Services
        </h2>
        <p className="mt-4 text-lg text-green-700 max-w-2xl mx-auto">
          Empowering businesses with innovative, tailored solutions that drive
          success in a competitive landscape.
        </p>

        {/* Service Cards */}
        <div className="mt-12 grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              action={service.action}
              link={service.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
