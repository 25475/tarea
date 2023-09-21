interface Pago {
    id: number;
    monto: number;
    fecha: string;
    metodoPago: string;
  }
  
  const pagos: Pago[] = [
    { id: 1, monto: 20, fecha: '2023-08-15', metodoPago: 'transferencia bancaria' },
    { id: 2, monto: 1, fecha: '2023-08-20', metodoPago: 'tarjeta de crédito' },
    { id: 3, monto: 15, fecha: '2023-08-15', metodoPago: 'tarjeta de crédito' },
    { id: 4, monto: 5, fecha: '2023-08-25', metodoPago: 'transferencia bancaria' },
    { id: 5, monto: 30, fecha: '2023-08-07', metodoPago: 'transferencia bancaria' }
  ];
  
  // Recorriendo y mostrando los elementos
  //usando for if
  console.log('Recorriendo con for y if:');
for (let i = 0; i < pagos.length; i++) {
  const pago = pagos[i];
  if (pago.metodoPago === 'transferencia bancaria') {
    console.log(pago);
  }
}
  // Usando forEach
  console.log('Recorriendo con forEach:');
  pagos.forEach((pago) => {
    console.log(pago);
  });
  
  // Usando for...of
  console.log('Recorriendo con for...of:');
  for (let pago of pagos) {
    console.log(pago);
  }
  