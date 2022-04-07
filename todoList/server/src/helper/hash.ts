import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';

const scrypt = promisify(_scrypt);

export function getSalt(){
    return randomBytes(8).toString('hex');
}

export async function getHashString(content: string, salt: string, byte: number = 32 ){
    const hash = (await scrypt(content, salt, 32)) as Buffer;
    return hash.toString('hex')
}