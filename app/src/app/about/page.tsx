import Image from "next/image";

export default function About() {
    return (
        <main className="flex min-h-screen flex-col items-center p-24">
            {/* header */}
            <section className="z-10 mb-16">
                <a href="/">
                    <Image src="/logo.png" alt="Thread Therapy Logo" width={200} height={200} priority />
                </a>
            </section>
            {/* body */}
            <section className="w-full px-4 lg:w-2/3">
                <div className="mt-10 lg:mt-0">
                    <span className="block mb-4 text-lg font-semibold text-primary">
                        Thread P*rn
                    </span>
                    <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px] uppercase">
                        Plan your knitting streak
                    </h2>
                    <div className="mb-5 text-base text-body-color dark:text-dark-6">
                        <ul>
                            <li>I want to knit/crochet cute stuffs.</li>
                            <li>I want to buy thread which is necessary.</li>
                            <li>I want to recalculate based on yarn size.</li>
                            <li>I also want to learn React + Tailwind + NextJs.</li>
                        </ul>
                    </div>
                    <div className="mb-8 text-base text-body-color dark:text-dark-6">
                        <ul>
                            <li>So presenting a cute organized way of searching patterns found accross the web.</li>
                            <li>Hope this helps me more than the effort spent in building this web app.</li>
                        </ul>
                    </div>
                    <a
                        href="/"
                        className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-brown border border-transparent rounded-md px-7 bg-lemon hover:bg-yellow"
                    >
                        Get Started 🧶
                    </a>
                </div>
            </section>
        </main>
    );
}
