<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Always available
Route::get('/', fn () => Inertia::render('Home'))->name('home');
Route::get('/about', fn () => Inertia::render('About'))->name('about');

Route::get('/approach', fn () => Inertia::render('Approach'))->name('approach');

Route::get('/who-we-support', fn () => Inertia::render('WhoWeSupport'))->name('who-we-support');

Route::get('/pricing', fn () =>  Inertia::render('Pricing'))->name('pricing');

Route::get('/contact', fn () => Inertia::render('Contact'))->name('contact');

Route::get('/contact-sales', fn () => Inertia::render('ContactSales'))->name('contact-sales');

Route::get('/book-a-demo', fn () =>  Inertia::render('BookDemo'))->name('book-a-demo');

