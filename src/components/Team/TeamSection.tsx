import React from 'react';
import TeamMemberCard from './TeamMemberCard';

const teamMembers = [
  {
    name: 'John Doe',
    title: 'CEO & Co-Founder',
    bio: 'John is a visionary leader with a passion for innovation and business growth. With over a decade of experience, he ensures the company stays ahead in the market.',
    image: 'https://via.placeholder.com/300x300', // Replace with actual image
  },
  {
    name: 'Jane Smith',
    title: 'CTO & Co-Founder',
    bio: 'Jane is a tech enthusiast and the driving force behind our technological advancements. She has a knack for solving complex problems and leading successful projects.',
    image: 'https://via.placeholder.com/300x300', // Replace with actual image
  },
];

const TeamSection: React.FC = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-6 text-center">
        {/* Section Title */}
        <h2 className="text-4xl font-bold text-gray-800">Our Team</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-xl mx-auto">
          Meet the visionaries who lead our company to new heights.
        </p>

        {/* Team Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
          {teamMembers.map((member, index) => (
            <TeamMemberCard
              key={index}
              name={member.name}
              title={member.title}
              bio={member.bio}
              image={member.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
