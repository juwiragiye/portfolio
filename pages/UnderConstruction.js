import Link from 'next/link'

const UnderConstruction = () => {
  return (
    <div className="flex h-screen p-0 items-center justify-center">
      <div className="">
        <h2 className="text-7xl tracking-tight text-blue-800">
          Website under construction
        </h2>
        <Link href="/homePage">
          <a className="inline-block text-xl hover:text-emerald-700 font-bold uppercase mt-4 text-emerald-900">
            Continue <span className="text-xl font-bold">&rarr;</span>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default UnderConstruction
