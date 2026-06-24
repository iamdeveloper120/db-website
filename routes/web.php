<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Always available
Route::get('/', fn () => Inertia::render('Home'))->name('home');
Route::get('/about', fn () => Inertia::render('About'))->name('about');

// Pages controlled by PAGES_LOCKED in .env
// Set PAGES_LOCKED=false to make these live
Route::get('/approach', function () {
    return env('PAGES_LOCKED', true) ? redirect('/') : Inertia::render('Approach');
})->name('approach');

Route::get('/who-we-support', function () {
    return env('PAGES_LOCKED', true) ? redirect('/') : Inertia::render('WhoWeSupport');
})->name('who-we-support');

Route::get('/pricing', function () {
    return env('PAGES_LOCKED', true) ? redirect('/') : Inertia::render('Pricing');
})->name('pricing');

Route::get('/contact', function () {
    return env('PAGES_LOCKED', true) ? redirect('/') : Inertia::render('Contact');
})->name('contact');

Route::get('/contact-sales', function () {
    return env('PAGES_LOCKED', true) ? redirect('/') : Inertia::render('ContactSales');
})->name('contact-sales');

Route::get('/book-a-demo', function () {
    return env('PAGES_LOCKED', true) ? redirect('/') : Inertia::render('BookDemo');
})->name('book-a-demo');
