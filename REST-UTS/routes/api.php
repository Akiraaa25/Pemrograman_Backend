<?php
use App\Http\Controllers\NewsController;
use Illuminate\Support\Facades\Route;


Route::middleware('auth:sanctum')->group(function () {
    Route::apiResource('news', NewsController::class);
});
