import Image from "next/image";
export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            {/* header */}
            <div className="z-10 mb-16">
                <a href="/about">
                    <Image src="/logo.png" alt="Thread Therapy Logo" width={200} height={200} priority />
                </a>
            </div>
            {/* body */}
            <div className="grid place-content-center">
                <div className="text-center">

                    <h1 className="text-9xl font-black text-gray-200 dark:text-lemon">404</h1>
                    <p className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                        Uh-oh!
                    </p>
                    <p className="mt-4 text-gray-500 dark:text-gray-400">We can't find that page.</p>
                    <a
                        href="/"
                        className="mt-6 inline-block rounded bg-brown px-5 py-3 text-sm font-bold text-lemon hover:bg-yellow hover:text-brown focus:outline-none focus:ring"
                    >
                        Go Back Home
                    </a>
                </div>

            </div>
        </main>
    )
}