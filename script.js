function obtenerRadioVisual(ponderacion) {
    const minR = 4;
    const maxR = 22;
    return minR + Math.sqrt(ponderacion / 100) * (maxR - minR);
}
 
new Chart(document.getElementById("dispersion"), {
    type: "scatter",
    data: {
        datasets: [
            {
                label: "Scatter Dataset",
                data: [
                    {
                        name: "BACHILLERATO EN ARTES, ARQUITECTURA Y DISEÑO EN LA UNIVERSIDAD FINIS TERRAE",
                        x: 5,
                        y: 7200000,
                    },
                    { name: "BACHILLERATO EN DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 10364360 },
                    { name: "DISEÑO EN LA UNIVERSIDAD AUSTRAL DE CHILE", x: 6, y: 5887000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD CATÓLICA DE TEMUCO", x: 5, y: 5276000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE CHILE", x: 7, y: 6486700 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE LA SERENA", x: 5, y: 4071000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE LAS AMERICAS", x: 5, y: 4730000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE PLAYA ANCHA DE CIENCIAS DE LA EDUCACION", x: 5, y: 4305000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE TALCA", x: 6, y: 5887000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE VALPARAISO", x: 6, y: 5713000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE VIÑA DEL MAR", x: 4, y: 4277000 },
                    {
                        name: "DISEÑO DE EXPERIENCIAS INMERSIVAS Y VIDEOJUEGOS EN LA UNIVERSIDAD GABRIELA MISTRAL",
                        x: 4,
                        y: 4814000,
                    },
                    {
                        name: "DISEÑO DE IMAGEN ESPECIALIDAD MODA  EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION",
                        x: 3,
                        y: 4210000,
                    },
                    {
                        name: "DISEÑO DE INTERIORES Y AMBIENTES  EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION",
                        x: 3,
                        y: 4030000,
                    },
                    { name: "DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7136000 },
                    { name: "DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 5069000 },
                    { name: "DISEÑO DE MODA Y MANAGEMENT EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7320000 },
                    { name: "DISEÑO DE VESTUARIO Y TEXTIL EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7148000 },
                    { name: "DISEÑO DE VIDEOJUEGOS EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    { name: "DISEÑO EN ANIMACIÓN DIGITAL  EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    {
                        name: "DISEÑO EN COMUNICACIÓN VISUAL  EN LA UTEM - UNIVERSIDAD TECNOLOGICA METROPOLITANA",
                        x: 4,
                        y: 4763300,
                    },
                    { name: "DISEÑO EN COMUNICACION VISUAL EN LA UNIVERSIDAD DE SANTIAGO DE CHILE", x: 7, y: 6552000 },
                    { name: "DISEÑO EN INTERACCION DIGITAL  EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    { name: "DISEÑO EN LA PONTIFICIA UNIVERSIDAD CATÓLICA DE CHILE", x: 7, y: 8080000 },
                    { name: "DISEÑO EN LA PONTIFICIA UNIVERSIDAD CATÓLICA DE VALPARAÍSO", x: 7, y: 6915000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DE LAS AMÉRICAS", x: 5, y: 4730000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 9754692 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 6056038 },
                    { name: "DISEÑO EN LA UNIVERSIDAD DIEGO PORTALES", x: 6, y: 7597000 },
                    { name: "DISEÑO EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7320000 },
                    { name: "DISEÑO EN MARKETING DIGITAL EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                    { name: "DISEÑO GRÁFICO EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7065000 },
                    { name: "DISEÑO GRÁFICO EN LA UNIVERSIDAD DEL BÍO-BÍO", x: 5, y: 4307000 },
                    {
                        name: "DISEÑO GRÁFICO ESPECIALIDAD MULTIMEDIA EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION",
                        x: 3,
                        y: 4210000,
                    },
                    {
                        name: "DISEÑO GRÁFICO MENCIÓN DISEÑO ESTRATÉGICO EN LA UNIVERSIDAD DE ANTOFAGASTA",
                        x: 5,
                        y: 5120000,
                    },
                    { name: "DISEÑO INDUSTRIAL EN LA UNIVERSIDAD DE SANTIAGO DE CHILE", x: 7, y: 4989000 },
                    { name: "DISEÑO INDUSTRIAL EN LA UTEM - UNIVERSIDAD TECNOLOGICA METROPOLITANA", x: 4, y: 4891000 },
                    { name: "DISEÑO INDUSTRIAL EN LA UNIVERSIDAD DEL BÍO-BÍO", x: 5, y: 4434000 },
                    { name: "DISEÑO MENCION INDUSTRIAL/GRÁFICO/AMBIENTES EN LA UNIVERSIDAD MAYOR", x: 5, y: 7214218 },
                    { name: "DISEÑO MULTIMEDIA EN LA UNIVERSIDAD DE TARAPACA", x: 6, y: 6555000 },
                    { name: "DISEÑO TEATRAL EN LA UNIVERSIDAD DE CHILE", x: 7, y: 5492400 },
                    {
                        name: "INGENIERIA EN DISEÑO DE PRODUCTOS EN LA UNIVERSIDAD TÉCNICA FEDERICO SANTA MARIA",
                        x: 6,
                        y: 6000000,
                    },
                    { name: "INGENIERIA EN DISEÑO EN LA UNIVERSIDAD ADOLFO IBAÑEZ", x: 6, y: 9754692 },
                    {
                        name: "INGENIERIA EN FABRICACION Y DISEÑO INDUSTRIAL EN LA UNIVERSIDAD TÉCNICA FEDERICO SANTA MARIA",
                        x: 6,
                        y: 5180000,
                    },
                    {
                        name: "INGENIERIA EN REALIDAD VIRTUAL Y DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD BERNARDO O'HIGGINS",
                        x: 5,
                        y: 5900000,
                    },
                ],
                backgroundColor: "rgba(241,142,45,.75)",
                pointRadius: 5,
                pointHoverRadius: 5,
            },
            {
                label: "Línea de referencia",
                type: "line",
                data: [
                    { x: 3, y: 4030000 },
                    { x: 7, y: 8080000 },
                ],
                borderColor: "rgba(102,102,102,.2)",
                borderWidth: 1,
                pointRadius: 0,
                pointHoverRadius: 0,
                fill: false,
                tension: 0,
            },
        ],
    },
    options: {
        scales: {
            x: {
                type: "linear",
                position: "bottom",
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#ccc" },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return Number.isInteger(value) ? value + " años" : null;
                    },
                },
            },
            y: {
                grid: { color: "rgba(0,0,0,0.06)" },
                border: { color: "#bbb", dash: [4, 4] },
                ticks: {
                    font: { family: "'Georama', sans-serif", size: 11 },
                    color: "#999",
                    callback: function (value) {
                        return "$ " + value.toLocaleString("es-CL");
                    },
                },
            },
        },
        plugins: {
            legend: { display: false },
            tooltip: {
                backgroundColor: "#fff",
                borderColor: "#ddd",
                borderWidth: 1,
                titleColor: "#111",
                bodyColor: "#555",
                titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                bodyFont: { family: "'Georama', sans-serif", size: 11 },
                padding: 10,
                filter: function (item) {
                    return item.datasetIndex === 0;
                },
                callbacks: {
                    label: function (context) {
                        const point = context.raw;
                        return [
                            point.name,
                            "Universidad acreditada por " + point.x + " años",
                            "Arancel $ " + point.y.toLocaleString("es-CL"),
                        ];
                    },
                },
            },
        },
    },
});
new Chart(document.getElementById("otro"), {
    type: 'bubble',
    data: {
            datasets: [
                {
                    label: 'Universidades Estatales (CRUCH)',
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgb(54, 162, 235)',
                    borderWidth: 1,
                    data: [
                        { x: 5, y: 5120000, r: obtenerRadioVisual(40), ranking: 40, label: 'U. de Antofagasta - Diseño Gráfico Mención Diseño Estratégico' },
                        { x: 7, y: 5492400, r: obtenerRadioVisual(20), ranking: 20, label: 'U. de Chile - Diseño Teatral' },
                        { x: 7, y: 6486700, r: obtenerRadioVisual(30), ranking: 30, label: 'U. de Chile - Diseño' },
                        { x: 5, y: 4071000, r: obtenerRadioVisual(20), ranking: 20, label: 'U. de La Serena - Diseño' },
                        { x: 5, y: 4305000, r: obtenerRadioVisual(30), ranking: 30, label: 'UPLA - Diseño' },
                        { x: 7, y: 4989000, r: obtenerRadioVisual(40), ranking: 40, label: 'USACH - Diseño Industrial' },
                        { x: 7, y: 6552000, r: obtenerRadioVisual(40), ranking: 40, label: 'USACH - Diseño en Comunicación Visual' },
                        { x: 6, y: 5887000, r: obtenerRadioVisual(30), ranking: 30, label: 'U. de Talca - Diseño' },
                        { x: 6, y: 6555000, r: obtenerRadioVisual(40), ranking: 40, label: 'U. de Tarapacá - Diseño Multimedia' },
                        { x: 6, y: 5713000, r: obtenerRadioVisual(40), ranking: 40, label: 'U. de Valparaíso - Diseño' },
                        { x: 5, y: 4307000, r: obtenerRadioVisual(30), ranking: 30, label: 'U. del Bío-Bío - Diseño Gráfico' },
                        { x: 5, y: 4434000, r: obtenerRadioVisual(40), ranking: 40, label: 'U. del Bío-Bío - Diseño Industrial' },
                        { x: 4, y: 4763300, r: obtenerRadioVisual(40), ranking: 40, label: 'UTEM - Diseño en Comunicación Visual' },
                        { x: 4, y: 4891000, r: obtenerRadioVisual(35), ranking: 35, label: 'UTEM - Diseño Industrial' }
                    ]
                },
                {
                    label: 'Universidades Privadas / Privadas CRUCH',
                    backgroundColor: 'rgba(255, 99, 132, 0.6)',
                    borderColor: 'rgb(255, 99, 132)',
                    borderWidth: 1,
                    data: [
                        { x: 6, y: 9754692, r: obtenerRadioVisual(0), ranking: 0, label: 'UAI - Ingeniería en Diseño' },
                        { x: 6, y: 5069000, r: obtenerRadioVisual(10), ranking: 10, label: 'UNAB - Diseño de Juegos Digitales (Conce)' },
                        { x: 6, y: 7065000, r: obtenerRadioVisual(10), ranking: 10, label: 'UNAB - Diseño Gráfico' },
                        { x: 6, y: 7136000, r: obtenerRadioVisual(10), ranking: 10, label: 'UNAB - Diseño de Juegos Digitales' },
                        { x: 6, y: 7148000, r: obtenerRadioVisual(10), ranking: 10, label: 'UNAB - Diseño de Vestuario y Textil' },
                        { x: 5, y: 5900000, r: obtenerRadioVisual(25), ranking: 25, label: 'UBO - Ingeniería en Realidad Virtual y Diseño de Juegos Digitales' },
                        { x: 3, y: 4030000, r: obtenerRadioVisual(0), ranking: 0, label: 'UNIACC - Diseño de Interiores y Ambientes' },
                        { x: 3, y: 4210000, r: obtenerRadioVisual(0), ranking: 0, label: 'UNIACC - Diseño de Imagen Especialidad Moda' },
                        { x: 3, y: 4210000, r: obtenerRadioVisual(0), ranking: 0, label: 'UNIACC - Diseño Gráfico Especialidad Multimedia' },
                        { x: 3, y: 4580000, r: obtenerRadioVisual(0), ranking: 0, label: 'UNIACC - Comunicación Digital Esp. Diseño y Des. de Videojuegos' },
                        { x: 5, y: 4730000, r: obtenerRadioVisual(40), ranking: 40, label: 'UDLA - Diseño' },
                        { x: 4, y: 4277000, r: obtenerRadioVisual(40), ranking: 40, label: 'UVM - Diseño' },
                        { x: 6, y: 6056038, r: obtenerRadioVisual(10), ranking: 10, label: 'UDD - Diseño (Concepción)' },
                        { x: 6, y: 9754692, r: obtenerRadioVisual(25), ranking: 25, label: 'UDD - Diseño (Stgo)' },
                        { x: 6, y: 10364360, r: obtenerRadioVisual(10), ranking: 10, label: 'UDD - Bachillerato en Diseño' },
                        { x: 5, y: 7200000, r: obtenerRadioVisual(30), ranking: 30, label: 'U. Finis Terrae - Bachillerato en Artes, Arquitectura y Diseño' },
                        { x: 5, y: 7320000, r: obtenerRadioVisual(25), ranking: 25, label: 'U. Finis Terrae - Diseño' },
                        { x: 5, y: 7320000, r: obtenerRadioVisual(20), ranking: 20, label: 'U. Finis Terrae - Diseño de Moda y Management' },
                        { x: 4, y: 4814000, r: obtenerRadioVisual(0), ranking: 0, label: 'UGM - Diseño de Experiences Inmersivas y Videojuegos' },
                        { x: 4, y: 4814000, r: obtenerRadioVisual(40), ranking: 40, label: 'UGM - Diseño de Videojuegos' },
                        { x: 4, y: 4814000, r: obtenerRadioVisual(40), ranking: 40, label: 'UGM - Diseño en Animación Digital' },
                        { x: 4, y: 4814000, r: obtenerRadioVisual(40), ranking: 40, label: 'UGM - Diseño en Interacción Digital' },
                        { x: 4, y: 4814000, r: obtenerRadioVisual(40), ranking: 40, label: 'UGM - Diseño en Marketing Digital' },
                        { x: 5, y: 7214218, r: obtenerRadioVisual(30), ranking: 30, label: 'U. Mayor - Diseño Mención Industrial/Gráfico/Ambientes' },
                        { x: 7, y: 8080000, r: obtenerRadioVisual(25), ranking: 25, label: 'PUC - Diseño' },
                        { x: 7, y: 6915000, r: obtenerRadioVisual(20), ranking: 20, label: 'PUCV - Diseño' },
                        { x: 6, y: 5887000, r: obtenerRadioVisual(40), ranking: 40, label: 'U. Austral de Chile - Diseño' },
                        { x: 5, y: 5276000, r: obtenerRadioVisual(50), ranking: 50, label: 'U. Católica de Temuco - Diseño' },
                        { x: 6, y: 7597000, r: obtenerRadioVisual(30), ranking: 30, label: 'UDP - Diseño' },
                        { x: 6, y: 5180000, r: obtenerRadioVisual(20), ranking: 20, label: 'UTFSM - Ingeniería en Fabricación y Diseño Industrial' },
                        { x: 6, y: 6000000, r: obtenerRadioVisual(20), ranking: 20, label: 'UTFSM - Ingeniería en Diseño de Productos (Muestra 1)' },
                        { x: 6, y: 6000000, r: obtenerRadioVisual(20), ranking: 20, label: 'UTFSM - Ingeniería en Diseño de Productos (Muestra 2)' }
                    ]
                }
            ]
        },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    
                    subtitle: {
                        display: true,
                        text: 'El tamaño de cada burbuja es en función al % de Ponderación del Ranking Solicitado',
                        color: '#555',
                        font: { size: 13, style: 'italic' },
                        padding: { bottom: 15 }
                    },
                    
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                let item = context.raw;
                                return item.label + 
                                       ' | Acreditación: ' + item.x + ' años' +
                                       ' | Arancel: $' + item.y.toLocaleString() + 
                                       ' | Ponderación Ranking: ' + item.ranking + '%';
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Años de Acreditación Institucional',
                            font: { weight: 'bold' }
                        },
                        min: 2,
                        max: 8,
                        ticks: {
                            stepSize: 1,
                            callback: function(value) { return value + ' Años'; }
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Arancel Anual ($ CLP)',
                            font: { weight: 'bold' }
                        },
                        min: 3000000,
                        max: 11000000,
                        ticks: {
                            callback: function(value) { return '$' + value.toLocaleString(); }
                        }
                    }
                }
            }
});
