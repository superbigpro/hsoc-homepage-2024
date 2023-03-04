import base85 from 'base85';


const encoder = new TextEncoder();

const encode = (data: string) => {
    const encodedName = encoder.encode(data);
    const binaryData = base85.encode(`${encodedName}`);
    return binaryData;
}