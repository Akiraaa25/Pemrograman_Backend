<?php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;


class NewsController extends Controller
{
    // Get All Resource
    public function index() {
        $news = News::all();

        if ($news->isEmpty()) {
            return response()->json(['message' => 'Data is empty'], 200);
        }

        return response()->json([
            'message' => 'Get All Resource',
            'data' => $news
        ], 200);
    }

    // Add Resource
    public function store(Request $request) {
        $validated = $request->validate([
            'title' => 'required|string',
            'author' => 'required|string',
            'description' => 'required|string',
            'content' => 'required|string',
            'url' => 'required|url|unique:news',
            'url_image' => 'nullable|url',
            'published_at' => 'nullable|date',
            'category' => 'required|string',
        ]);

        $news = News::create($validated);

        return response()->json([
            'message' => 'Resource is added successfully',
            'data' => $news
        ], 201);
    }

    // Get Detail Resource
    public function show($id) {
        $news = News::find($id);

        if (!$news) {
            return response()->json(['message' => 'Resource not found'], 404);
        }

        return response()->json([
            'message' => 'Get Detail Resource',
            'data' => $news
        ], 200);
    }

    // Edit Resource
    public function update(Request $request, $id) {
        $news = News::find($id);

        if (!$news) {
            return response()->json(['message' => 'Resource not found'], 404);
        }

        $news->update($request->all());

        return response()->json([
            'message' => 'Resource is updated successfully',
            'data' => $news
        ], 200);
    }

    // Delete Resource
    public function destroy($id) {
        $news = News::find($id);

        if (!$news) {
            return response()->json(['message' => 'Resource not found'], 404);
        }

        $news->delete();

        return response()->json(['message' => 'Resource is deleted successfully'], 200);
    }

    // Search Resource by Title
    public function search($title) {
        $news = News::where('title', 'like', "%$title%")->get();

        if ($news->isEmpty()) {
            return response()->json(['message' => 'Resource not found'], 404);
        }

        return response()->json([
            'message' => 'Get searched resource',
            'data' => $news
        ], 200);
    }

    // Get Resources by Category
    public function category($category) {
        $news = News::where('category', $category)->get();

        if ($news->isEmpty()) {
            return response()->json(['message' => 'Resource not found'], 404);
        }

        return response()->json([
            'message' => "Get $category resource",
            'total' => $news->count(),
            'data' => $news
        ], 200);
    }
}
