fetch('http://localhost:6061/pipes')
    .then((data) =>{ //data is in json format
        //console.log(data)
        return data.json(); //convert data to jobject
    })
    .then((object) => { //object is a var representing our converted json data
        //console.log(object);
        let tableData = '';
        object.map((values) => {
            tableData += `
                <tr>
                    <td>${values.ID}</td>
                    <td>${values.Node1}</td>
                    <td>${values.Node2}</td>
                    <td>${values.Length}</td>
                    <td>${values.Diameter}</td>
                    <td>${values.Roughness}</td>
                    <td>${values.MinorLoss}</td>
                    <td>${values.Status}</td>
                </tr>
            `;
        });
        document.getElementById('table_body')
            .innerHTML = tableData;
    })
    .catch((err) => {
        console.log('error')
    })

    fetch('http://localhost:6061/junctions')
    .then((dataJunction) =>{ //data is in json format
        //console.log(data)
        return dataJunction.json(); //convert data to jobject
    })
    .then((objectJunctions) => { //object is a var representing our converted json data
        //console.log(object);
        let tableData2 = '';
        objectJunctions.map((values2) => {
            tableData2 += `
                <tr>
                    <td>${values2.ID}</td>
                    <td>${values2.Elevation}</td>
                    <td>${values2.Demand}</td>
                    <td>${values2.Pattern}</td>
                </tr>
            `;
        });
        document.getElementById('table_body2')
            .innerHTML = tableData2;
    })
    .catch((err) => {
        console.log('error')
    })

    fetch('http://localhost:6061/reservoirs')
    .then((dataReservoir) =>{ //data is in json format
        //console.log(data)
        return dataReservoir.json(); //convert data to jobject
    })
    .then((objectReservoir) => { //object is a var representing our converted json data
        //console.log(object);
        let tableData3 = '';
        objectReservoir.map((values3) => {
            tableData3 += `
                <tr>
                    <td>${values3.ID}</td>
                    <td>${values3.Head}</td>
                </tr>
            `;
        });
        document.getElementById('table_body3')
            .innerHTML = tableData3;
    })
    .catch((err) => {
        console.log('error')
    })

    fetch('http://localhost:6061/coordinates')
    .then((dataCoord) =>{ //data is in json format
        //console.log(data)
        return dataCoord.json(); //convert data to jobject
    })
    .then((objectCoord) => { //object is a var representing our converted json data
        //console.log(object);
        let tableData4 = '';
        objectCoord.map((values4) => {
            tableData4 += `
                <tr>
                    <td>${values4.Node}</td>
                    <td>${values4.Xcoord}</td>
                    <td>${values4.Ycoord}</td>
                </tr>
            `;
        });
        document.getElementById('table_body4')
            .innerHTML = tableData4;
    })
    .catch((err) => {
        console.log('error')
    })