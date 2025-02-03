/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useState } from 'react';
import StarReview from './StarReview';

const FormReseña = () => {
  const [formData, setFormData] = useState({
    name: '',
    shift: '',
    specialist: '',
    califications: {
      service: 0,
      information: 0,
      recommendation: 0,
    },
    comment: '' 
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleRatingChange = (newRating: number, question: string) => {
    setFormData({
      ...formData,
      califications: {
        ...formData.califications,
        [question]: newRating,
      },
    });
  };

  const especialistasMañana = [
    'Melanie',
    'Karla M',
    'Diana',
    'Ruth Llaja',
    'Karla Arroyo',
    'Karolay',
    'Esperanza',
    'Karito',
    'Zoe',
    'Sharoll',
    'Silvana',
    'Dairi',
    'Lucia',
    'Verónica',
    'Martha',
    'Gandy',
    'Ruth H'
  ];

  const especialistasTarde = [
    'Daniela',
    'Jasmin',
    'Elizabeth',
    'Belen',
    'Cristina',
    'Patricia',
    'Betney',
    'Candy',
    'Aissa',
    'Carmen',
    'Cecibel',
    'Lembercy',
    'Ana',
    'Noemi',
    'Nathaly',
    'Shantell',
    'Susana'
  ];

  return (
    <form className="px-6 pb-20 bg-white max-w-xl mx-auto">
      {/* Logo de la empresa */}
      <div className="text-center mb-4">
        <img src="logo.png" alt="Logo de la empresa" className="mx-auto w-auto " />
      </div>

      {/* Descripción del cliente */}
      <div className="text-center mb-6">
        <span className='font-semibold'>Estimado(a) cliente.</span>
        <p className="text-black">Gracias por elegir nuestro centro estético. Para nosotros es muy importante conocer tu opinión para seguir mejorando nuestros servicios. Tus respuestas serán tratadas de manera confidencial.</p>
        <p className='font-semibold'>Por favor, marca la opción que mejor refleje tu opinión y responde las preguntas abiertas de manera honesta</p>
      </div>
      
      {/* Campo de nombre */}
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Tu nombre"
        className="w-full p-3 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-black text-base"
      />

      
      {/* Campo de turno */}
      <div className="mb-4   text-center">
        <label className="block text-black mb-4 text-base">Selecciona tu turno</label>
        <div className="inline-flex items-center">
          <input
            type="radio"
            name="shift"
            value="mañana"
            checked={formData.shift === 'mañana'}
            onChange={handleChange}
            className="form-radio"
          />
          <span className="ml-2 text-black text-base">Turno mañana 🕘</span>
        </div>
        <div className="inline-flex items-center ml-4 mb-5">
          <input
            type="radio"
            name="shift"
            value="tarde"
            checked={formData.shift === 'tarde'}
            onChange={handleChange}
            className="form-radio"
          />
          <span className="ml-2 text-black text-base ">Turno tarde 🌙</span>
        </div>
      </div>

      {/* Campo de especialista */}
      {formData.shift && (
        <select
          name="specialist"
          value={formData.specialist}
          onChange={handleChange}
          className="w-full p-3 mb-8 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-black text-base"
        >
          <option value="" disabled>Selecciona el especialista</option>
          {(formData.shift === 'mañana' ? especialistasMañana : especialistasTarde).map((especialista) => (
            <option key={especialista} value={especialista}>{especialista}</option>
          ))}
        </select>
      )}

      {/* Pregunta de calificación con estrellas */}
      <StarReview
        question="¿Cómo calificas el servicio que acabas de recibir del 1 al 10?"
        value={formData.califications.service}
        onChange={(newRating) => handleRatingChange(newRating, 'service')}
        maxRating={10}
      />
      <StarReview
        question="¿Qué tan satisfecho(a) se sintió con la información brindada sobre el tratamiento y sus cuidados del 1 al 10?"
        value={formData.califications.information}
        onChange={(newRating) => handleRatingChange(newRating, 'information')}
        maxRating={10}
      />
      <StarReview
        question="¿Cuáles son las posibilidades de que recomiendes nuestro servicio a familiares y amigos del 1 al 10?"
        value={formData.califications.recommendation}
        onChange={(newRating) => handleRatingChange(newRating, 'recommendation')}
        maxRating={10}
      />

       {/* Campo de comentario */}
       <p>¿Cómo podemos mejorar su experiencia?</p>
       <textarea
        name="comment"
        value={formData.comment}
        onChange={handleChange}
        placeholder="Deja tu comentario aquí"
        className="w-full p-3 mb-5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-black text-base"
      />

      {/* Botón de enviar */}
      <button
        type="submit"
        className="w-full mt-4 font-bold bg-cyan-500 text-white py-3 rounded-lg hover:bg-cyan-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 tracking-wide text-base"
      >
        ENVIAR ENCUESTA
      </button>
    </form>
  );
};

export default FormReseña;
