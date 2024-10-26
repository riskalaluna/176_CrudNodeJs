const express = require('express');
const router = express.Router();

// Membuat objek data mahasiswa dengan atribut NIM, Nama, Angkatan, Kelas, dan Alamat
let todos = [
    { NIM: "20220140170", Nama: "Dhea Kania", Angkatan: 2022, Kelas: "TI-D", Alamat: "Subang, Jawa Barat" },
    { NIM: "20220140176", Nama: "Laluna Riska", Angkatan: 2022, Kelas: "TI-D", Alamat: "Mukomuko, Bengkulu" },
    { NIM: "20220140179", Nama: "Dina Amalia", Angkatan: 2022, Kelas: "TI-D", Alamat: "Kebumen, Jawa Tengah" },
];

// Mendapatkan semua data mahasiswa
router.get('/', (req, res) => {
    res.json(todos);
});

// Menambahkan data mahasiswa baru
router.post('/', (req, res) => {
    const { NIM, Nama, Angkatan, Kelas, Alamat } = req.body;

    const newStudent = {
        NIM: NIM,
        Nama: Nama,
        Angkatan: Angkatan,
        Kelas: Kelas,
        Alamat: Alamat
    };

    todos.push(newStudent);
    res.status(201).json(newStudent);
});

// Mengupdate data mahasiswa berdasarkan NIM
router.put('/:NIM', (req, res) => {
    const studentNIM = req.params.NIM;
    const { Nama, Angkatan, Kelas, Alamat } = req.body;

    const studentIndex = todos.findIndex(student => student.NIM === studentNIM);

    if (studentIndex !== -1) {
        todos[studentIndex] = {
            ...todos[studentIndex],
            Nama: Nama !== undefined ? Nama : todos[studentIndex].Nama,
            Angkatan: Angkatan !== undefined ? Angkatan : todos[studentIndex].Angkatan,
            Kelas: Kelas !== undefined ? Kelas : todos[studentIndex].Kelas,
            Alamat: Alamat !== undefined ? Alamat : todos[studentIndex].Alamat
        };
        res.json({ message: 'Data mahasiswa berhasil diperbarui', student: todos[studentIndex] });
    } else {
        res.status(404).json({ message: 'Mahasiswa dengan NIM tersebut tidak ditemukan' });
    }
});

// Menghapus data mahasiswa berdasarkan NIM
router.delete('/:NIM', (req, res) => {
    const studentNIM = req.params.NIM;
    const studentIndex = todos.findIndex(student => student.NIM === studentNIM);

    if (studentIndex !== -1) {
        const deletedStudent = todos.splice(studentIndex, 1);
        res.json({ message: 'Data mahasiswa berhasil dihapus', student: deletedStudent[0] });
    } else {
        res.status(404).json({ message: 'Mahasiswa dengan NIM tersebut tidak ditemukan' });
    }
});

module.exports = router;