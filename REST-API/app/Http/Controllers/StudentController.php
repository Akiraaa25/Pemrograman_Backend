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
        // Validation to ensure all fields are provided
        $request->validate([
            'name' => 'required|string|max:255',
            'nim' => 'required|string|max:20',
            'email' => 'required|email|max:255|unique:students,email',
            'majority' => 'required|string|max:255',
        ]);

        // Create a new student record if validation passes
        $student = Student::create($request->all());

        return response()->json([
            'message' => 'Student data added successfully',
            'data' => $student
        ], 201);
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
    public function update(Request $request, $id)
    {
        // Find the student by ID
        $student = Student::find($id);
        if (!$student) {
            return response()->json(['message' => 'Student not found'], 404);
        }

        // Validate only if fields are present
        $validatedData = $request->validate([
            'name' => 'sometimes|nullable|string|max:255',
            'nim' => 'sometimes|nullable|string|max:20',
            'email' => 'sometimes|nullable|email|max:255|unique:students,email,' . $id,
            'majority' => 'sometimes|nullable|string|max:255',
        ]);

        // Update with validated data only
        $student->update($validatedData);

        return response()->json([
            'message' => 'Student data successfully updated',
            'data' => $student
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        // Find the student by ID
        $student = Student::find($id);

        if (!$student) {
            return response()->json(['message' => 'Student not found'], 404);
        }

        // Delete the student
        $student->delete();

        return response()->json(['message' => 'Student successfully deleted'], 200);
    }
}
