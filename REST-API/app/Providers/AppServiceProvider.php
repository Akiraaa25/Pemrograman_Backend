<?php

namespace App\Providers;

use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * The path to the "home" route for your application.
     *
     * @var string
     */
    public const HOME = '/home';

    /**
     * Define your route model bindings, pattern filters, and more.
     *
     * @return void
     */
    public function boot()
    {
        $this->configureRateLimiting();

        $this->routes(function () {
            // API routes
            Route::prefix('api')
                ->middleware('api')
                // ->namespace($this->namespace) // Optional, bisa dihapus jika tidak diperlukan
                ->group(base_path('routes/api.php'));

            // Web routes
            Route::middleware('web')
                // ->namespace($this->namespace) // Optional, bisa dihapus jika tidak diperlukan
                ->group(base_path('routes/web.php'));
        });
    }

    /**
     * Configure the rate limiters for the application.
     *
     * @return void
     */
    protected function configureRateLimiting()
    {
        // Konfigurasi rate limiting (bisa diabaikan untuk kasus ini)
    }
}
