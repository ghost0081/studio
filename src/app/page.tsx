import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center relative">
        <Image
          src="https://i.ibb.co/37879Q3/Whats-App-Image-2024-07-02-at-12-05-48-PM.jpg"
          alt="MoveWithAman"
          width={500}
          height={500}
          className="rounded-full mb-4"
        />
        <p className=" text-lg md:text-xl lg:text-2xl font-semibold">
          TRAIN ONLINE in Salsa On2 Social Dance with MovewithAMAN Dance
          Company, directed by ...... Experience full classes with a UNIQUE
          point of view and a REAL student perspective by training online as if
          you were INSIDE the classroom environment as an EXCLUSIVE MEMBER of
          MovewithAMAN Dance Company!
        </p>
        <p className=" text-base md:text-lg mt-4">
          LEVEL UP in both solo work and partner work by exploring lead and
          follow relationship, body movement vocabulary and alignment, turn +
          spin technique, musicality, drills and SO MUCH MORE!
        </p>
        <ul className=" text-sm md:text-base mt-4 list-disc list-inside">
          <li>✅ NEW LESSONS UPLOADED AND ADDED TO THE LIBRARY MONTHLY</li>
          <li>✅ UP-CLOSE POV FORMAT (in-class, student point of view)</li>
          <li>✅ SPECIAL DISCOUNT CODES TO THE TROPIK VYBE SHOP AND MORE</li>
        </ul>
      </main>
    </div>
  );
}

