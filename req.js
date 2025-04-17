const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

let requests = []; // Simpan data sementara (gunakan database dalam produksi)

app.post('/api/submit', (req, res) => {
    const { service, username, details } = req.body;
    requests.push({ service, username, details, date: new Date() });
    res.status(201).send({ message: 'Permintaan berhasil disimpan!' });
});

app.get('/api/requests', (req, res) => {
    res.send(requests); // Kirim semua permintaan ke admin
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server berjalan di port ${PORT}`));