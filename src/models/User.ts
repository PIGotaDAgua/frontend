interface User{
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    foto?: string | null;
    dataNascimento: string;
}

export default User;