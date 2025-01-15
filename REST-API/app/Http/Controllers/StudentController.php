<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $students = Student::all();

        $response = [
            'message' => 'Success Showing All Students Data',
            'data' => $students
        ];

        return response()->json($response, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
       $input = [
        'name' => $request->name,
        'nim' => $request->nim,
        'email' => $request->email,
        'majority' => $request->majority
       ];

       $students = Student::create($input);

       $response = [
        'message' => 'Successfully created new student',
        'data' => $students
       ];

       return response()->json($response, 201);
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $student = Student::find($id);

        if ($student) {
            $response = [
                'message' => 'Student found',
                'data' => $student
            ];
            return response()->json($response, 200);
        } else {
            return response()->json(['message' => 'Student not found'], 404);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // Validasi data yang diterima
        $request->validate([
            'name' => 'required|string|max:255',
            'nim' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'majority' => 'required|string|max:255',
        ]);

        // Mencari siswa berdasarkan ID
        $student = Student::find($id);

        if (!$student) {
            return response()->json(['message' => 'Student not found'], 404);
        }

        // Memperbarui data siswa
        $student->update($request->all());

        $response = [
            'message' => 'Successfully updated student',
            'data' => $student
        ];

        return response()->json($response, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // Mencari siswa berdasarkan ID
        $student = Student::find($id);

        if (!$student) {
            return response()->json(['message' => 'Student not found'], 404);
        }

        // Menghapus siswa
        $student->delete();

        return response()->json(['message' => 'Student successfully deleted'], 200);
    }

}
