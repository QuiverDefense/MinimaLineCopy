import React from "react";
import styled from "styled-components";

function Categ () {
    return (
        <Container>
            <div className='item'>box-1</div>
            <div className='item'>box-2</div>
            <div className='item'>box-3</div>
            <div className='item'>box-4</div>
            <div className='item'>box-5</div>
            <div className='item'>box-6</div>
            <div className='item'>box-1</div>
            <div className='item'>box-2</div>
            <div className='item'>box-3</div>
            <div className='item'>box-4</div>
            <div className='item'>box-5</div>
            <div className='item'>box-6</div>
            <div className='item'>box-1</div>
            <div className='item'>box-2</div>
            <div className='item'>box-3</div>
            <div className='item'>box-4</div>
            <div className='item'>box-5</div>
            <div className='item'>box-6</div>
            <div className='item'>box-5</div>
            <div className='item'>box-6</div>
            <div className='item'>box-1</div>
            <div className='item'>box-2</div>
            <div className='item'>box-3</div>
            <div className='item'>box-4</div>
            <div className='item'>box-5</div>
            <div className='item'>box-6</div>
        </Container>
    );
};

const Container = styled.div`
    max-height: 120px;
    border: 1px solid #ddd;
    display: flex;
    overflow-x: auto;
    position: absolute;
    width: 90%;

    .item{
        min-width:110px;
        heigh: 110px;
        line-height: 110px;
        text-align: center;
        background-color: #ddd;
        margin-right: 2px;
    }
`

export default Categ;