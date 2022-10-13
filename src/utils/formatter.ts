export const dateFomatter = new Intl.DateTimeFormat('pt-BR');

export const priceFomatter = new Intl.NumberFormat('pt-BR',{
    style: 'currency',
    currency: 'BRL',
});