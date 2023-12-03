const cpfMask = (data) => {
    if (data === undefined) {return data}
    return data
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
    // 976.199.000-00
}

const rgMask = (data) => {
    if (data === undefined || data === null ) {return data}
    return data
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d)/, '$1.$2')
        .replace(/(\d{3})(\d{1,2})/, '$1-$2')
        .replace(/(-\d{2})\d+?$/, '$1')
    // 51.111.111-11
}

const dateMask = (data) => {
    if (data === undefined || data === null ) {return data}
    return data
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{2})(\d)/, '$1/$2')
        .replace(/(\d{4})\d+?$/, '$1')
    // 29/07/1980
}

const phoneMask = (data) => {
    if (data === undefined || data === null ) {return data}
    return data
    .replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{1})(\d{4})(\d)/, '$1 $2-$3');
    // (53) 9 9873-3612
}






