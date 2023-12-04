import { StyledHeadCard } from "./style"

export const HeadCard = () => {
    return(
        <StyledHeadCard>
            <section className="name"><h3>Nome</h3></section>
            <section className="email"><h3>Email</h3></section>
            <section className="phone"><h3>Telefone</h3></section>
            <section className="actions"><h3>Ações</h3></section>
        </StyledHeadCard>
    )
}