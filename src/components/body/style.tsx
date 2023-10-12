import styled from "styled-components";
import background from "../../assets/images/chat-background.png";

export const ContainerBody = styled.div`
    background-image: url(${background});
    overflow: auto;
    height: 100vh;
    width: 1000px;
    background-color: rgba(239, 234, 226, 0.6);
    /* Outros estilos do seu contêiner aqui */
`;
