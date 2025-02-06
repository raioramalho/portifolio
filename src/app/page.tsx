import { headers } from "next/headers";

async function getData() {
  try {
    const response = await fetch("https://cep.awesomeapi.com.br/json/20521100", {
      headers: {
        "Content-Type": "application/json",        
      },
      method: "GET",
      next: {
        revalidate: 30,
        tags: ["cep"],
      }
    });
    return response.json();
  } catch (error) {
    console.error("Error fetching CEP:", error);
    return {};
  }
}

export default async function Home() {
  const cep = await getData();
  console.log(cep);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="text-center sm:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Alan Ramalho</h1>
          <h2 className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-6">
            Arquiteto de Soluções
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl">
            Especialista em arquitetura de software e soluções tecnológicas, com
            foco em desenvolvimento de sistemas escaláveis e eficientes.
          </p>

          <p>Address: {cep.address}</p>
          <p>City: {cep.city}</p>
          <p>State: {cep.state}</p>
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="#contato"
          >
            Entre em Contato
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="#portfolio"
          >
            Ver Portfólio
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/alan-silva-ramalho/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/raioramalho"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:ramalho.sit@gmail.com"
        >
          Email
        </a>
      </footer>
    </div>
  );
}