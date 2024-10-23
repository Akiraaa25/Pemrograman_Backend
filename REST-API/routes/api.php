<?php
use App\Http\Controllers\AnimalController;

Route::get('/animals', [AnimalController::class, 'index']);
Route::post('/animals', [AnimalController::class, 'store']);
Route::put('/animals', [AnimalController::class, 'update']);
Route::delete('/animals', [AnimalController::class, 'destroy']);
