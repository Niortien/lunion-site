"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import HomeTitle from "../home/HomeTitle";

// Définition des produits avec couleur titre, couleur sur carte sélectionnée et URL
const products = [
  {
    id: 1,
    name: "Lunion Booking",
    description: "Révolutionnez votre gestion immobilière",
    mainImage: "/assets/images/all-img/bulding.jpg",
    dashboardImage: "/assets/images/all-img/systeme.png",
    mockupImage: "/assets/images/produits/moockup.png",
    cardImage: "/assets/images/produits/product2.png",
    cardBg: "bg-gray-100",
    cardText: "text-gray-700",
    cardBtn: "text-gray-600",
    titleColor: "text-[#e83d5f]",
    highlightBg: "bg-[#e83d5f]",
    url: "https://lunionbooking.com",
  },
  {
    id: 2,
    name: "Lunion Educ",
    description: "Révolutionnez votre gestion  la gestion immobilière",
    mainImage: "/assets/images/all-img/educ_building.jpg",
    dashboardImage: "/assets/images/all-img/educ_system.png",
    mockupImage: "/assets/images/produits/mockup_educ.png",
    cardImage: "/assets/images/produits/product1.png",
    cardBg: "bg-gray-100",
    cardText: "text-gray-900",
    cardBtn: "text-gray-600",
    titleColor: "text-[#d14b4c]",
    highlightBg: "bg-[#d14b4c]",
    url: "https://lunioneduc.com",
  },
  {
    id: 3,
    name: "Lunion Secure",
    description: "Révolutionnez la gestion des ressources humaines",
    mainImage: "/assets/images/all-img/secure_building.jpg",
    dashboardImage: "/assets/images/all-img/secu_system.png",
    mockupImage: "/assets/images/produits/mockup_secu.png",
    cardImage: "/assets/images/produits/produit3.png",
    cardBg: "bg-gray-100",
    cardText: "text-gray-900",
    cardBtn: "text-gray-600",
    titleColor: "text-[#792dcb]",
    highlightBg: "bg-[#792dcb]",
    url: "https://luniosecure.com",
  },
];

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Titre de section */}
        <div className="flex  flex justify-center items-center gap-3 mb-12">
        
          <h2 className="text-3xl font-bold text-purple-700">
            <HomeTitle text="Nos produits" />
          </h2>
        </div>

        {/* Cartes Produits */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {products.map((product) => {
            const isSelected = selectedProduct.id === product.id;
            return (
              <div
                key={product.id}
                className={`${
                  isSelected ? product.highlightBg : product.cardBg
                } ${product.cardText} overflow-hidden p-6 rounded-t-2xl relative flex items-end min-h-[180px] cursor-pointer transition-all duration-300`}
                onClick={() => setSelectedProduct(product)}
              >
                <a
                  href={product.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`absolute top-4 right-4 ${product.cardBtn}`}
                  onClick={(e) => e.stopPropagation()} // empêche le click de changer la sélection
                >
                  <ExternalLink size={18} />
                </a>
                <p className="font-semibold">{product.name}</p>
                <Image
                  src={product.cardImage}
                  alt={product.name}
                  width={120}
                  height={60}
                  className="absolute bottom-2 right-2 lg:-bottom-2 lg:right-[0.5]"
                />
              </div>
            );
          })}
        </div>

        {/* Mockup tablette + téléphone */}
        <div className="flex justify-center mb-16">
          <div className="relative flex items-end gap-6">
            <Image
              src={selectedProduct.mockupImage}
              alt="Tablet Mockup"
              width={600}
              height={400}
              className="rounded-xl"
            />
          </div>
        </div>

        {/* Bloc descriptif */}
        <section>
          <main className="min-h-screen flex items-center justify-center p- md:p-12">
            <section className="max-w-[1400px] w-full grid grid-cols-12 gap-6 md:gap-8 items-stretch">
              {/* Colonne gauche (contenus) */}
              <div className="col-span-12 lg:col-span-8 flex flex-col gap-6">
                <div className="flex flex-wrap justify-center lg:justify-between gap-6">
                  {/* Bloc blanc gauche */}
                  <article className="bg-white rounded-2xl p-6 md:p-8 shadow-sm flex flex-col justify-center max-w-md flex-1">
                    <h2
                      className={`text-2xl md:text-3xl font-extrabold ${selectedProduct.titleColor} text-center lg:text-left`}
                    >
                      {selectedProduct.name}
                    </h2>
                    <p className="mt-4 text-lg md:text-2xl text-gray-600 leading-snug text-center lg:text-left">
                      {selectedProduct.description}
                    </p>
                  </article>

                  {/* Image maison */}
                  <article className="rounded-t-2xl rounded-br-2xl overflow-hidden shadow-xl max-w-sm flex-1">
                    <div className="relative w-full h-[180px] sm:h-[220px] md:h-[300px]">
                      <Image
                        src={selectedProduct.mainImage}
                        alt={selectedProduct.name}
                        fill
                        className="object-cover rounded-t-2xl"
                      />
                    </div>
                  </article>
                </div>

                {/* Ligne suivante */}
                <div className="flex-1">
                  <article className="relative bg-[#f0ad47] rounded-t-3xl rounded-br-3xl p-4 md:p-12 text-white shadow-xl h-[280px] sm:h-[300px] overflow-hidden">
                    <h3 className="text-xl sm:text-2xl md:text-2xl font-semibold leading-tight">
                      Gérez efficacement vos biens, réservations et clients en
                      un seul endroit.
                    </h3>

                    {/* Décors images en bas */}
                    <div className="absolute bottom-2 right-0 flex gap-2 sm:gap-4 items-end p-2 md:p-0">
                      <div className="relative lg:w-36 sm:w-24 lg:h-36 w-32 h-32 sm:h-24  translate-y-4">
                        <Image
                          src="/assets/images/all-img/doc_icone.png"
                          alt="Décor 1"
                          fill
                          className="object-over rounded-2xl"
                        />
                      </div>
                      <div className="relative lg:w-36 sm:w-24 lg:h-36 w-32 h-32 sm:h-24 translate-y-4">
                        <Image
                          src="/assets/images/all-img/cube_icone.png"
                          alt="Décor 2"
                          fill
                          className="object-cver rounded-2xl"
                        />
                      </div>
                      <div className="relative lg:w-36 sm:w-24 lg:h-36 w-32 h-32 sm:h-24  translate-y-4">
                        <Image
                          src="/assets/images/all-img/agenda_icone.png"
                          alt="Décor 3"
                          fill
                          className="object-covr rounded-2xl"
                        />
                      </div>
                    </div>
                  </article>
                </div>
              </div>

              {/* Colonne droite (dashboard image) */}
              <aside className="col-span-12 lg:col-span-4 flex justify-center lg:justify-end">
                <div className="hidden lg:block relative w-full max-w-[420px] h-full rounded-3xl overflow-hidden drop-shadow-2xl">
                  <Image
                    src={selectedProduct.dashboardImage}
                    alt="Dashboard large"
                    fill
                    className=" w-full h-full"
                  />
                </div>
              </aside>
            </section>
          </main>
        </section>
      </div>
    </section>
  );
}
