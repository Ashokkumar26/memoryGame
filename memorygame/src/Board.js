import React from 'react'

function Board({ row, column, images }) {
    images = images.concat(images);
    images.sort(() => Math.random() - 0.5);
    var a = [];
    let ptr = 0;
    for (let c = 0; c < row; c++) {
        let col = []
        for (let i = 0; i < column; i++) {
            col.push(<td><img src={images[ptr]}/></td>);
            ptr++;
        }
        a.push(<tr>{col}</tr>)
    }
    
    return (
        <div>
            <table>
                <tbody>
                    {a}
                </tbody>
            </table>
        </div>
    )
}

export default Board
