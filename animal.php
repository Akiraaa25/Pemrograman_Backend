<?php

class Animal {
    public $animals;

    public function __construct() {
        $this->animals = ['Kucing', 'Anjing', 'Burung'];
    }

    public function index() {
        return $this->animals;
    }

    public function store($animal) {
        $this->animals[] = $animal;
        return "Hewan baru berhasil ditambahkan!";
    }

    public function update($index, $newAnimal) {
        if (isset($this->animals[$index])) {
            $this->animals[$index] = $newAnimal;
            return "Data hewan berhasil diperbarui!";
        }
        return "Hewan tidak ditemukan untuk diperbarui.";
    }

    public function destroy($index) {
        if (isset($this->animals[$index])) {
            unset($this->animals[$index]);
            $this->animals = array_values($this->animals);
            return "Data hewan berhasil dihapus!";
        }
        return "Hewan tidak ditemukan untuk dihapus.";
    }

    public function display() {
        echo "Daftar Hewan:<br>";
        foreach ($this->animals as $key => $animal) {
            echo ($key + 1) . ". $animal<br>";
        }
    }
}

// Contoh penggunaan
$animal = new Animal();
$animal->display();
echo "<br>";

echo $animal->store('Kuda') . "<br>";
$animal->display();
echo "<br>";

echo $animal->update(1, 'Ikan') . "<br>";
$animal->display();
echo "<br>";

echo $animal->destroy(0) . "<br>";
$animal->display();
