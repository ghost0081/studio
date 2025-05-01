import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center min-h-screen p-8 bg-background text-foreground">
      {/* Image Section */}
      <div className="md:w-1/2 relative h-96 md:h-auto md:mr-8" data-ai-hint="dancer">
        <Image
          src="https://i.ibb.co/ZJLHp6C/about-us-image.jpg"
          alt="Aitor Barredo"
          fill={true}
          style={{ objectFit: 'contain' }}
          className="rounded-2xl shadow-lg"
          priority
        />
      </div>

      {/* Text Content Section */}
      <div className="md:w-1/2 flex flex-col items-start justify-center space-y-4">
        <h1 className="text-3xl font-bold">Get to Know Me</h1>
        <p className="text-lg">
          Aman is a dynamic and passionate dance instructor specializing in Salsa On2 social dance. With years of experience,
          Aman is based in [Your City], Aman brings a unique blend of skill, energy, and cultural appreciation to every class.
        </p>
        <p className="text-lg">
          Aman's teaching philosophy focuses on creating a fun, inclusive, and challenging environment where students can grow
          both technically and artistically. Whether you're a beginner or an experienced dancer, Aman's classes offer something for everyone.
        </p>
      </div>
    </div>
  );
}
