<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AnimalController extends Controller
{
    private $animals = ['Singa', 'Harimau', 'Gajah'];

    public function index()
    {
        return response()->json($this->animals);
    }

    public function store(Request $request)
    {
        $newAnimal = $request->input('name');
        array_push($this->animals, $newAnimal);
        return response()->json($this->animals);
    }

    public function update(Request $request)
    {
        $index = $request->input('index');
        $newName = $request->input('name');
        if(isset($this->animals[$index])) {
            $this->animals[$index] = $newName;
            return response()->json($this->animals);
        }
        return response()->json(['message' => 'Animal not found'], 404);
    }

    public function destroy(Request $request)
    {
        $index = $request->input('index');
        if(isset($this->animals[$index])) {
            array_splice($this->animals, $index, 1);
            return response()->json($this->animals);
        }
        return response()->json(['message' => 'Animal not found'], 404);
    }
}

