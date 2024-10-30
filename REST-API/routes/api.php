<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AnimalController;
use App\Http\Controllers\StudentController;

// Rute untuk AnimalController
Route::get('/animals', [AnimalController::class, 'index']);
Route::post('/animals', [AnimalController::class, 'store']);
Route::put('/animals', [AnimalController::class, 'update']);
Route::delete('/animals', [AnimalController::class, 'destroy']);

// Rute untuk StudentController dengan apiResource
Route::apiResource('students', StudentController::class);
Route::post('/students', [StudentController::class, 'store']);
Route::put('/students/{student}', [StudentController::class, 'update']);
