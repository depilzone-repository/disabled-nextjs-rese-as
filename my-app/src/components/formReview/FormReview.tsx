"use client"
import { useState } from 'react';
import { IFormReview } from './types';
import Modal from '../modals/Modal';

const ReviewForm = () => {
  const [formData, setFormData] = useState<IFormReview>({
    name: '',
    calification: '0', 
    description: '',
  });

  const [error, setError] = useState<string>(''); 
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleRatingChange = (newRating: number) => {
    setFormData({
      ...formData,
      calification: newRating.toString(),
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.calification || !formData.description) {
      setError('Por favor, completa todos los campos.');
      return;
    }


    setIsModalVisible(true);
    setError('');
  };

  const handleModalClose = () => {
   
    setFormData({
      name: '',
      calification: '0',
      description: '',
    });
    setIsModalVisible(false);
  };

  return (
    <form onSubmit={handleSubmit} className="px-6 pb-20 bg-white max-w-md mx-auto ">
      <h1 className="tracking-wider text-black p-8 text-center text-2xl font-bold">¡Nos encantaría saber tu opinión!</h1>

      <h2 className="text-black p-2 text-center text-xl mb-8">Ayúdanos a mejorar dejando una reseña sobre tu cita.</h2>

      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Tu nombre"
        className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-black"
      />
      <p className='text-black text-center p-4 text-xl'>¿Cómo calificarías tu experiencia del 1 al 5?</p>
    
      <div className="flex justify-center items-center mb-4">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => handleRatingChange(star)} 
            className={`text-6xl ${parseInt(formData.calification) >= star ? 'text-yellow-500' : 'text-yellow-500'} transition-colors duration-300`} 
          >
            {parseInt(formData.calification) >= star ? '★' : '☆'} 
          </button>
        ))}
      </div>

      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Escribe aquí tu reseña..."
        rows={4}
        className="w-full p-3 mt-4 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 text-black"
      />

      {error && <p className="text-red-500 mt-2 text-center">{error}</p>}

      <button
        type="submit"
        className="w-full mt-4 font-bold bg-cyan-500 text-white py-3 rounded-lg hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 tracking-wide"
      >
        ENVIAR RESEÑA
      </button>

      
      <Modal
        message="¡Gracias por compartir tu experiencia con nosotros!"
        show={isModalVisible}
        onClose={handleModalClose}
      />
    </form>
  );
};

export default ReviewForm;
