const express = require('express');
const app = express();
app.use(express.static('public'))
const PORT = 6061;

//fire up the port
app.listen(
    PORT, () => console.log(`App started on ${PORT}`)
)

const cors = require("cors");
const corsOptions = {
   origin:'*',
   credentials: true,           //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}
 app.use(cors(corsOptions)) // Use this after the variable declaration


app.get('/pipes', (req, res) =>{
    res.status(200).send([
        {"ID":"1","Node1":1,"Node2":2,"Length":101.8227,"Diameter":1032.5788,"Roughness":132.0315,"MinorLoss":0,"Status":"Open"},
        {"ID":"10","Node1":10,"Node2":11,"Length":987.5174,"Diameter":781.0109,"Roughness":117.0064,"MinorLoss":0,"Status":"Open"},
        {"ID":"11","Node1":11,"Node2":12,"Length":1238.7269,"Diameter":801.7894,"Roughness":134.9172,"MinorLoss":0,"Status":"Open"},
        {"ID":"12","Node1":12,"Node2":13,"Length":3352.5162,"Diameter":610.0255,"Roughness":129.3119,"MinorLoss":0,"Status":"Open"},
        {"ID":"13","Node1":10,"Node2":14,"Length":801.1631,"Diameter":432.5173,"Roughness":142.5197,"MinorLoss":0,"Status":"Open"},
        {"ID":"14","Node1":14,"Node2":15,"Length":522.6046,"Diameter":410.2378,"Roughness":137.8775,"MinorLoss":0,"Status":"Open"},
        {"ID":"15","Node1":15,"Node2":16,"Length":550.52,"Diameter":293.9906,"Roughness":135.7511,"MinorLoss":0,"Status":"Open"},
        {"ID":"16","Node1":17,"Node2":16,"Length":2858.3929,"Diameter":369.3999,"Roughness":131.5999,"MinorLoss":0,"Status":"Open"},
        {"ID":"17","Node1":17,"Node2":18,"Length":1773.9333,"Diameter":514.2606,"Roughness":137.0129,"MinorLoss":0,"Status":"Open"},
        {"ID":"18","Node1":18,"Node2":19,"Length":782.5734,"Diameter":605.5914,"Roughness":120.8565,"MinorLoss":0,"Status":"Open"},
        {"ID":"19","Node1":19,"Node2":3,"Length":403.2065,"Diameter":586.4745,"Roughness":132.9782,"MinorLoss":0,"Status":"Open"},
        {"ID":"2","Node1":2,"Node2":3,"Length":1337.5068,"Diameter":950.9962,"Roughness":120.4167,"MinorLoss":0,"Status":"Open"},
        {"ID":"20","Node1":3,"Node2":20,"Length":2252.8315,"Diameter":950.7895,"Roughness":121.7172,"MinorLoss":0,"Status":"Open"},
        {"ID":"21","Node1":20,"Node2":21,"Length":1443.3665,"Diameter":552.3491,"Roughness":124.3549,"MinorLoss":0,"Status":"Open"},
        {"ID":"22","Node1":21,"Node2":22,"Length":506.56,"Diameter":313.5412,"Roughness":120.6469,"MinorLoss":0,"Status":"Open"},
        {"ID":"23","Node1":20,"Node2":23,"Length":2714.0274,"Diameter":1046.6808,"Roughness":118.6827,"MinorLoss":0,"Status":"Open"},
        {"ID":"24","Node1":23,"Node2":24,"Length":1193.2357,"Diameter":756.5249,"Roughness":141.5037,"MinorLoss":0,"Status":"Open"},
        {"ID":"25","Node1":24,"Node2":25,"Length":1256.2352,"Diameter":737.6673,"Roughness":127.0521,"MinorLoss":0,"Status":"Open"},
        {"ID":"26","Node1":26,"Node2":25,"Length":825.7778,"Diameter":477.4439,"Roughness":132.1164,"MinorLoss":0,"Status":"Open"},
        {"ID":"27","Node1":27,"Node2":26,"Length":285.6935,"Diameter":274.3641,"Roughness":131.8654,"MinorLoss":0,"Status":"Open"},
        {"ID":"28","Node1":16,"Node2":27,"Length":773.1004,"Diameter":313.1806,"Roughness":131.7228,"MinorLoss":0,"Status":"Open"},
        {"ID":"29","Node1":23,"Node2":28,"Length":1556.4,"Diameter":418.5538,"Roughness":134.4003,"MinorLoss":0,"Status":"Open"},
        {"ID":"3","Node1":3,"Node2":4,"Length":942.114,"Diameter":942.9965,"Roughness":142.5124,"MinorLoss":0,"Status":"Open"},
        {"ID":"30","Node1":28,"Node2":29,"Length":1997.2368,"Diameter":412.2381,"Roughness":126.4847,"MinorLoss":0,"Status":"Open"},
        {"ID":"31","Node1":29,"Node2":30,"Length":1553.082,"Diameter":294.2326,"Roughness":121.5079,"MinorLoss":0,"Status":"Open"},
        {"ID":"32","Node1":30,"Node2":31,"Length":153.1708,"Diameter":318.5912,"Roughness":130.3373,"MinorLoss":0,"Status":"Open"},
        {"ID":"33","Node1":32,"Node2":31,"Length":892.1622,"Diameter":441.3251,"Roughness":126.9478,"MinorLoss":0,"Status":"Open"},
        {"ID":"34","Node1":25,"Node2":32,"Length":970.7698,"Diameter":492.1122,"Roughness":119.2366,"MinorLoss":0,"Status":"Open"},
        {"ID":"4","Node1":4,"Node2":5,"Length":1177.5737,"Diameter":1046.3161,"Roughness":139.6072,"MinorLoss":0,"Status":"Open"},
        {"ID":"5","Node1":5,"Node2":6,"Length":1451.7704,"Diameter":1090.5739,"Roughness":140.6532,"MinorLoss":0,"Status":"Open"},
        {"ID":"6","Node1":6,"Node2":7,"Length":437.3368,"Diameter":1039.9756,"Roughness":129.394,"MinorLoss":0,"Status":"Open"},
        {"ID":"7","Node1":7,"Node2":8,"Length":837.9012,"Diameter":1056.0821,"Roughness":127.8199,"MinorLoss":0,"Status":"Open"},
        {"ID":"8","Node1":8,"Node2":9,"Length":857.5721,"Diameter":1038.2016,"Roughness":125.6884,"MinorLoss":0,"Status":"Open"},
        {"ID":"9","Node1":9,"Node2":10,"Length":815.7009,"Diameter":992.5071,"Roughness":132.6997,"MinorLoss":0,"Status":"Open"}
    ])
});

app.get('/junctions', (req, res) =>{
    res.status(200).send([
        {"ID":"10","Elevation":30,"Demand":155.7758,"Pattern":"P_10"},
        {"ID":"11","Elevation":30,"Demand":135.7103,"Pattern":"P_11"},
        {"ID":"12","Elevation":30,"Demand":158.9334,"Pattern":"P_12"},
        {"ID":"13","Elevation":30,"Demand":295.1782,"Pattern":"P_13"},
        {"ID":"14","Elevation":30,"Demand":181.9995,"Pattern":"P_14"},{"ID":"15","Elevation":30,"Demand":68.2253,"Pattern":"P_15"},{"ID":"16","Elevation":30,"Demand":85.6041,"Pattern":"P_16"},{"ID":"17","Elevation":30,"Demand":224.8992,"Pattern":"P_17"},{"ID":"18","Elevation":30,"Demand":427.1321,"Pattern":"P_18"},{"ID":"19","Elevation":30,"Demand":15.9995,"Pattern":"P_19"},{"ID":"2","Elevation":30,"Demand":280.1757,"Pattern":"P_2"},{"ID":"20","Elevation":30,"Demand":331.2483,"Pattern":"P_20"},{"ID":"21","Elevation":30,"Demand":243.4385,"Pattern":"P_21"},{"ID":"22","Elevation":30,"Demand":123.1402,"Pattern":"P_22"},{"ID":"23","Elevation":30,"Demand":256.1853,"Pattern":"P_23"},{"ID":"24","Elevation":30,"Demand":248.6517,"Pattern":"P_24"},{"ID":"25","Elevation":30,"Demand":49.527,"Pattern":"P_25"},{"ID":"26","Elevation":30,"Demand":263.5467,"Pattern":"P_26"},{"ID":"27","Elevation":30,"Demand":112.818,"Pattern":"P_27"},{"ID":"28","Elevation":30,"Demand":83.0625,"Pattern":"P_28"},{"ID":"29","Elevation":30,"Demand":96.7124,"Pattern":"P_29"},{"ID":"3","Elevation":30,"Demand":220.8291,"Pattern":"P_3"},{"ID":"30","Elevation":30,"Demand":105.3621,"Pattern":"P_30"},{"ID":"31","Elevation":30,"Demand":25.608,"Pattern":"P_31"},{"ID":"32","Elevation":30,"Demand":248.0802,"Pattern":"P_32"},{"ID":"4","Elevation":30,"Demand":34.1677,"Pattern":"P_4"},{"ID":"5","Elevation":30,"Demand":222.6056,"Pattern":"P_5"},{"ID":"6","Elevation":30,"Demand":319.1373,"Pattern":"P_6"},{"ID":"7","Elevation":30,"Demand":360.9283,"Pattern":"P_7"},{"ID":"8","Elevation":30,"Demand":169.1325,"Pattern":"P_8"},{"ID":"9","Elevation":30,"Demand":139.5633,"Pattern":"P_9"}])
});

app.get('/reservoirs', (req, res) => {
    res.status(200).send([{"ID":"1","Head":100}])
});

app.get('/coordinates', (req, res) => {
    res.status(200).send([
        {"Node":"24","Xcoord":3977.8,"Ycoord":7172.9},
        {"Node":"25","Xcoord":3954.44,"Ycoord":7990.65},
        {"Node":"26","Xcoord":4410.05,"Ycoord":7990.65},
        {"Node":"27","Xcoord":4818.93,"Ycoord":7990.65},
        {"Node":"20","Xcoord":4550.23,"Ycoord":5969.63},
        {"Node":"21","Xcoord":4550.23,"Ycoord":5303.74},
        {"Node":"22","Xcoord":4550.23,"Ycoord":4591.12},
        {"Node":"23","Xcoord":3977.8,"Ycoord":5969.63},
        {"Node":"28","Xcoord":3405.37,"Ycoord":5969.63},
        {"Node":"29","Xcoord":2716.12,"Ycoord":6004.67},
        {"Node":"1","Xcoord":5251.17,"Ycoord":4485.98},
        {"Node":"3","Xcoord":5227.8,"Ycoord":5969.63},
        {"Node":"2","Xcoord":5251.17,"Ycoord":5268.69},
        {"Node":"5","Xcoord":6676.4,"Ycoord":5969.63},
        {"Node":"4","Xcoord":6068.93,"Ycoord":5969.63},
        {"Node":"7","Xcoord":7260.51,"Ycoord":6600.47},
        {"Node":"6","Xcoord":7260.51,"Ycoord":5969.63},
        {"Node":"9","Xcoord":7260.51,"Ycoord":7990.65},
        {"Node":"8","Xcoord":7260.51,"Ycoord":7301.4},
        {"Node":"11","X-coord":6793.22,"Ycoord":8551.4},
        {"Node":"10","Xcoord":6793.22,"Ycoord":7990.65},
        {"Node":"13","Xcoord":6150.7,"Ycoord":8960.28},
        {"Node":"12","Xcoord":6793.22,"Ycoord":8960.28},
        {"Node":"15","Xcoord":5683.41,"Ycoord":7990.65},
        {"Node":"14","Xcoord":6302.57,"Ycoord":7990.65},
        {"Node":"17","Xcoord":5216.12,"Ycoord":7535.05},
        {"Node":"16","Xcoord":5216.12,"Ycoord":7990.65},
        {"Node":"19","Xcoord":5227.8,"Ycoord":6542.06},
        {"Node":"18","Xcoord":5227.8,"Ycoord":7137.85},
        {"Node":"31","Xcoord":2716.12,"Ycoord":7990.65},
        {"Node":"30","Xcoord":2716.12,"Ycoord":6904.21},
        {"Node":"32","Xcoord":3405.37,"Ycoord":7990.65}])
});