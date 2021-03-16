const formatValue = (value: number): string =>
  Intl.NumberFormat('pr-BR', { style: 'currency', currency: 'BRL' }).format(
    value,
  );

export default formatValue;
