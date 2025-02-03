import * as yup from "yup";


export interface IFormValues {
  [key: string]: string;
}

export const fields = [
  { name: "purchaseDate", label: "Fecha de compra", type: "date" },
  { name: "orderNumber", label: "Número de pedido", type: "text" },
  { name: "clientName", label: "Nombre de cliente", type: "text" },
  { name: "clientNumber", label: "Número del cliente (teléfono)", type: "text" },
  { name: "advisor", label: "Asesora", type: "text" },
  { name: "advisorNumber", label: "Número de la asesora", type: "text" },
  { name: "clientType", label: "Tipo de cliente", type: "select", options: ["Nuevo", "Antiguo zona nueva", "Antiguo reinicio", "Continuidad recupero", "Continuidad"] },
  { name: "service", label: "Servicio", type: "select", options:["DEPILACIÓN", "BLANQUEAMIENTO", "LIMPIEZA FACIAL", "CORPORAL 360", "LIPOPAPADA", "HOLLYWOOD PEEL", "MELASMA", "ACNE ACTIVO","ROSACEA", "BLUESKIN"] },
  { name: "promotion", label: "Promoción", type: "select", options:["RUMBO VERANO", "PROMOCION CYBER NOW + CUPÓN 8%", "PROMOCIONES CYBER DAYS", "BLACK FRIDAY"] },
  { name: "promotionCoupon", label: "Cupón de promociones", type: "text"},
  { name: "sede", label: "Sede", type: "select", options:["SURCO", "MEGAPLAZA", "PUEBLO LIBRE"] },
  { name: "appointmentDate", label: "Fecha de cita", type: "date" },
  { name: "appointmentHour", label: "Hora de citas", type: "time" },
  { name: "observation", label: "Observación", type: "text" },
];


const validateForm: yup.ObjectSchema<IFormValues> = yup.object(
  fields.reduce((schema, field) => {
    schema[field.name] = yup.string().required(`${field.label} es obligatorio`);
    return schema;
  }, {} as Record<string, yup.StringSchema<string>>)
);

export default validateForm;

