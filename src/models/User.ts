interface User{
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto?: string | null;
    dataNascimento: Date;
}

export default User;