import Image from "next/image";

export default function Home() {
  const listOfCategories = [
    {
      "link": "/1",
      "title": "Category 1",
      "caption": "Category 1 line description.",
    }, {
      "link": "/2",
      "title": "Category 2",
      "caption": "Category 2 line description.",
    }, {
      "link": "/3",
      "title": "Category 3",
      "caption": "Category 3 line description.",
    }, {
      "link": "/4",
      "title": "Category 4",
      "caption": "Category 4 line description.",
    }, {
      "link": "/5",
      "title": "Category 5",
      "caption": "Category 5 line description.",
    }, {
      "link": "/6",
      "title": "Category 6",
      "caption": "Category 6 line description.",
    }
  ]
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      {/* header */}
      <div className="z-10 mb-16">
        <a href="/about">
          <Image src="/logo.png" alt="Thread Therapy Logo" width={200} height={200} priority />
        </a>
      </div>
      {/* list of link cards */}
      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-12 lg:grid-cols-4 lg:text-left">
        {listOfCategories.map((category, index) => (
          <a href={category.link} key={index}
            className="group rounded-lg border border-transparent px-5 py-4 mb-8 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
            // target="_blank" rel="noopener noreferrer"
            >
            <h2 className={`mb-3 text-2xl font-semibold`}>
              {category.title}{" "}
              <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                -&gt;
              </span>
            </h2>
            <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
              {category.caption}
            </p>
          </a>
        ))}
      </div>
    </main>
  );
}
