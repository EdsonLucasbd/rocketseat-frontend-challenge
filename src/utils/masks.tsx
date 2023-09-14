export function cardNumberMask(number: string) {
  const digitsOnly = number.replace(/\D/g, '');

  const formattedValue = digitsOnly.match(/.{1,4}/g)?.join(' ');

  return formattedValue || '';
}

export function validityMask(validity: string) {
  return validity.replace(/\D/g, '').replace(/^(0[1-9]|1[0-2])(\d{2})$/, '$1/$2')
}

export function zipCodeMask(zipCode: string) {
  return zipCode.replace(/^(\d{5})([\s.]?)(\d{3})$/, '$1-$3')
}