"use client";
import { Suspense, useEffect, useState } from "react";

export default function Home() {
  const [cep, setCep] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://cep.awesomeapi.com.br/json/05407002"
        );
        const data = await response.json();
        console.log(data);
        setCep(data);
      } catch (error) {
        console.error("Error fetching CEP:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <main className="space-y-12">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:scale-105 transition-all duration-300">
            <div className="text-center sm:text-left">
              <h1 className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-6 animate-gradient">
                Alan Ramalho
              </h1>
              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-200 mb-8">
                Arquiteto de Soluções
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl leading-relaxed mb-8">
                Especialista em arquitetura de software e soluções tecnológicas, com
                foco em desenvolvimento de sistemas escaláveis e eficientes.
              </p>
              <div className="inline-flex items-center space-x-2 text-lg text-gray-600 dark:text-gray-300">
                <span>Cidade:</span>
                <Suspense fallback={<span className="animate-pulse">Carregando..</span>}>
                  <span className="font-medium">{cep.city}</span>
                </Suspense>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center sm:justify-start">
            <a
              href="#contato"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-lg transition-all duration-300 hover:scale-110 hover:shadow-lg focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800"
            >
              Entre em Contato
            </a>
            <a
              href="#portfolio"
              className="px-8 py-4 rounded-full border-2 border-gray-200 dark:border-gray-700 text-gray-800 dark:text-gray-200 font-medium text-lg transition-all duration-300 hover:scale-110 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-lg focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700"
            >
              Ver Portfólio
            </a>
          </div>
        </main>

        <footer className="mt-24">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <a
              href="https://www.linkedin.com/in/alan-silva-ramalho/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <span className="text-lg">LinkedIn</span>
            </a>
            <a
              href="https://github.com/raioramalho"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              <span className="text-lg">GitHub</span>
            </a>
            <a
              href="mailto:ramalho.sit@gmail.com"
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2 text-gray-600 dark:text-gray-300 hover:text-red-600 dark:hover:text-red-400"
            >
              <span className="text-lg">Email</span>
            </a>
          </div>
        </footer>
      </div>
    </div>
  );
}
