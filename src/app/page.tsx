import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8 md:p-16">
        {/* Left Column: Text Content */}
        <div className="flex flex-col justify-center items-start space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            TRAIN WITH MOVE WITH AMAN DANCE COMPANY ONLINE!
          </h1>
          <p className="text-base md:text-lg">
            TRAIN ONLINE in Salsa On2 Social Dance with MoveWithAman Dance Company,
             Experience full classes with a UNIQUE
            point of view and a REAL student perspective by training online as if you were
            INSIDE the classroom environment as an EXCLUSIVE MEMBER of MoveWithAman
            Dance Company!
          </p>
          <p className="text-base md:text-lg">
            LEVEL UP in both solo work and partner work by exploring lead and follow
            relationship, body movement vocabulary and alignment, turn + spin technique,
            musicality, drills and SO MUCH MORE!
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>✅ NEW LESSONS UPLOADED AND ADDED TO THE LIBRARY MONTHLY</li>
            <li>✅ UP-CLOSE POV FORMAT (in-class, student point of view)</li>
            <li>✅ SPECIAL DISCOUNT CODES TO THE TROPIK VYBE SHOP AND MORE</li>
          </ul>
          <div>Next Event: [Date and Time]</div>
        </div>

        {/* Right Column: Image */}
        <div className="relative h-[600px] overflow-hidden">
          <Image
            src="/p1.jpg"
            alt="MoveWithAman Virtual Team Training"
            fill={true}
            style={{ objectFit: 'cover' }}
            className="rounded-2xl shadow-lg"
            priority
          />
        </div>
      </div>
    </div>
  );
}
