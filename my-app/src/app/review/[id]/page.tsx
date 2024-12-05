import FormReview from "@/components/formReview/FormReview";

const citas = [
  { id: 'idcita001', cliente: 'Juan Pérez', fecha: '2024-12-05' },
  { id: 'idcita002', cliente: 'Ana López', fecha: '2024-12-06' },
];


const ReviewPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  
  const resolvedParams = await params;
  const { id } = resolvedParams;


  const cita = citas.find((cita) => cita.id === id);


  if (!cita) {
    return <div className="text-black text-center  text-xl " >Cita no encontrada</div>;
  }

  // Renderiza los detalles de la cita
  return (
    <div className="mt-20">
      <FormReview citaId={id}/>
    </div>
  );
};

export default ReviewPage;
