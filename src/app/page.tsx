import Image from 'next/image'
import { IoLogoInstagram, IoLogoYoutube } from 'react-icons/io'
import { AiOutlineVideoCamera } from 'react-icons/ai'

export default function Home() {
  return (
    <div className="relative w-full h-screen bg-banner-ps bg-repeat">
      <header className="relative top-0 left-0 right-0 h-40 md:h-48 lg:h-56 xl:h-60 2xl:h-64 max-w-7xl mx-auto border-0 xl:border-x-8 xl:border-solid xl:border-outline xl:border-y-0">
        <Image
          // shadow-blurred-banner
          className=""
          src="/images/dogm_nabash_banner.jpg"
          layout="fill"
          objectFit="cover"
          objectPosition="center"
          alt="Dogm Nabash - دگم نباش"
          priority
        />
      </header>

      <div className="fixed bottom-0 left-0">
        <AiOutlineVideoCamera color="black" size="48" />
      </div>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start max-w-7xl mx-auto bg-table-ps bg-repeat p-4 border-0 border-t-2 xl:border-8 xl:border-solid xl:border-outline">
        <div className="w-full flex items-center justify-between">
          <div className="relative rounded-full overflow-hidden w-24 h-24 md:h-32 md:w-32 shadow-2xl">
            <Image
              src="/images/dogm_nabash_logo.jpg"
              layout="fill"
              objectFit="cover"
              objectPosition="center"
              alt="dogm_nabash_logo"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h1 className="text-surface-on font-extrabold text-2xl">Dogm Nabash - دگم نباش</h1>
            {/* <h2></h2> */}
            <span className="text-black">Coming soon ...</span>

            <div className="w-auto flex gap-2">
              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4 p-2"
                href="https://instagram.com/thekouman"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoInstagram color="black" size={24} />
              </a>

              <a
                className="flex items-center gap-2 hover:underline hover:underline-offset-4 p-2"
                href="https://youtube.com/@dogmnabash?si=HvklkymemjkBS0vA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IoLogoYoutube color="black" size={24} />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
