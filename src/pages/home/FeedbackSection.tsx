import React, { useState } from 'react';
import GenericCarousel from '@/components/ui/GenericCarousel';
import FeedbackCard from '@/components/ui/FeedbackCard';
import { X, Star } from 'lucide-react';
import { feedbacks, Feedback } from '@/data/feedbacks'; // Assumindo que o arquivo e o tipo existem

const FeedbackSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFeedback, setSelectedFeedback] = useState<Feedback | null>(null);

  const handleFeedbackClick = (feedback: Feedback) => {
    setSelectedFeedback(feedback);
    setIsModalOpen(true);
  };

  const closeModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(false);
    setSelectedFeedback(null);
  };

  return (
    <section className="w-full h-auto py-[48px] px-[16px] bg-surface flex flex-col items-center justify-center gap-[32px]
                        lg:py-[64px] lg:px-[144px] lg:gap-[40px]">
      <h1 className="heading-h1 text-title text-center">
        Veja o que os nossos clientes têm a dizer sobre nós
      </h1>

      <GenericCarousel
        items={feedbacks}
        renderItem={(feedback: Feedback, index: number, isCenter: boolean) => (
          <FeedbackCard
            key={feedback.id}
            feedback={feedback}
            isCenter={isCenter}
            onClick={() => {
              // Apenas o card central abre o modal ao ser clicado!
              if (isCenter) {
                handleFeedbackClick(feedback);
              }
            }}
          />
        )}
        className="w-full"
        heightClass="h-[180px] lg:h-[220px]" // Adicionando a classe de altura
      />

      {/* Modal Customizado */}
      {isModalOpen && selectedFeedback && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fadeIn"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-lg bg-surface-light border-2 border-subtle rounded-[20px] shadow-[0_4px_4px_rgba(0,0,0,0.25)] p-6 flex flex-col gap-4 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão de Fechar */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 rounded-[10px] border border-strong bg-button-primary text-button-text cursor-pointer hover:opacity-80 transition-opacity"
              aria-label="Fechar modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Cabeçalho do Modal */}
            <h3 className="heading-h4 text-body pr-8">{selectedFeedback.authorName}</h3>

            {/* Estrelas no Modal */}
            <div className="flex flex-row items-center gap-1">
              {[...Array(5)].map((_, i) => {
                const isFilled = i < selectedFeedback.rating;
                return (
                  <Star
                    key={i}
                    className={`w-6 h-6 lg:w-[28px] lg:h-[28px] ${
                      isFilled
                        ? 'text-[var(--cream-100)] fill-[var(--cream-100)]'
                        : 'text-muted'
                    }`}
                  />
                );
              })}
            </div>

            {/* Texto Completo do Feedback */}
            <p className="body-text-responsive text-body text-justify whitespace-pre-line leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              {selectedFeedback.comment}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default FeedbackSection;
