import React from 'react';
import styled from "styled-components";

const StoreBlog = () => {
    return (
        <Doc>
            <h4>YOUR GUIDE TO WRITING TECHNICAL DOCUMENTATION</h4>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, atque. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi doloribus dolorem, reprehenderit sit incidunt itaque error rerum! Dolore, facilis modi?</p>
        </Doc>
    )
}

const Doc = styled.div`
    margin-left: 7px;
    margin-bottom: 10px;
    margin-right: 10px;
    background-color: lightgrey;
    border-radius:10px;
    h4{
        font-size:20px;
        font-weight: bold;
        display: flex;
        justify-content: center;
    }
    p{
        font-size:16px;
        color: grey;
    }
    &:hover{
        cursor: pointer;
      -webkit-box-shadow: 9px 9px 8px -4px rgba(117,115,117,1);
      -moz-box-shadow: 9px 9px 8px -4px rgba(117,115,117,1);
      box-shadow: 9px 9px 8px -4px rgba(117,115,117,1);
    }
`;

export default StoreBlog