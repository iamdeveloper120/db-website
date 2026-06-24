<?php

namespace App\Providers;

use Illuminate\Support\Facades\Vite;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        // Use root-relative paths for built assets so they work on any domain
        // (local Valet, ngrok tunnels, staging, production) without hardcoding a hostname.
        Vite::createAssetPathsUsing(fn (string $path) => '/' . $path);
    }
}
