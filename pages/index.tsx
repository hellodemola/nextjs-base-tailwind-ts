import type { NextPage } from 'next';

const Home: NextPage = () => (
  <div className="grid content-center h-screen border">
    <div className="flex justify-center text-center">
      <div>
        <h1 className="leading-normal text-2xl">NextJs Boilerplate project</h1>
        <h2 className="text-5xl font-bold leading-relaxed">Tailwind & TypeScript</h2>
        <h3 className="tracking-wider font-light leading-normal">
          by
          {' '}
          <a href="https://github.com/hellodemola/" className="underline italic" target="_blank" rel="noopener noreferrer">hellodemola</a>
        </h3>
        <div className="m-8">
          <a href="https://github.com/hellodemola/nextjs-base-tailwind-ts.git" className="underline text-red-900">
            Repo
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
