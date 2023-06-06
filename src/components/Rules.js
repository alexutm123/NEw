import styled from 'styled-components';
// import { Link } from 'react-router-dom';
import { useContext } from 'react';


const invisibleStyle = {
    display: "none",
}
const visibleStyle = {
    display: "block",
}

function Rules(props){
    const context = useContext(props.context);
    
    return (
        <Container>
            <Title>Перенаправьте коня на <Highlighted>выделенный квадрат</Highlighted></Title>
            
        <span style={{ ...context.exercise < 3 ? visibleStyle : invisibleStyle, color: "black" }}>

  Цель состоит в том, чтобы переместить коня по порядку.
  <OrderRoute ascending={context.exercise !== 1} />, с ограничением
  что вы не можете переместить его на контролируемые квадраты черными фигурами.
        </span>

            <span style={context.exercise>=3? visibleStyle: invisibleStyle}>
                Двигай коня
            </span>
        </Container>
    )
}

function OrderRoute(props){
    const ascending = props.ascending;
    return (
        <span>
            {ascending? " слева направо, снизу вверх": "справа налево, сверху вниз"}
        </span>
    )
}

export default Rules;



const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin: 2%;
    max-width: 300px;
    margin-bottom: 40px;
    @media (max-width: 900px) { 
        order: 5;
      }
`;

const Title = styled.h3`
    text-align: center;
`;

const Highlighted = styled.span`
    color: #4183c4;
    text-decoration: none;
    font-weight: bold;
    display: inline-block;
    width: fit-content;
`;