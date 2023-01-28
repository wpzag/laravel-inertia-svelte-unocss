<?php

    use App\Actions\DeleteUser;
    use App\Actions\GetUsers;
    use App\Actions\StoreUser;
    use App\Actions\UpdateUser;
    use Illuminate\Support\Facades\Route;
    use Inertia\Inertia;

    /*
    |--------------------------------------------------------------------------
    | Web Routes
    |--------------------------------------------------------------------------
    |
    | Here is where you can register web routes for your application. These
    | routes are loaded by the RouteServiceProvider within a group which
    | contains the "web" middleware group. Now create something great!
    |
    */

    Route::get('/', function () {
        return Inertia::render('Welcome', [
            'app' => [
                'laravel' => app()->version(),
                'php' => phpversion(),
                'name' => config('app.name'),
                'env' => config('app.env'),
                'debug' => config('app.debug'),
                'url' => config('app.url'),
            ],
        ]);
    });

    Route::group(['middleware' => ['auth:sanctum', 'verified']], function () {
        Route::get('/dashboard', function () {
            return Inertia::render('Dashboard');
        })->name('dashboard');

        Route::get('users', GetUsers::class)->name('users.index');
        Route::post('users', StoreUser::class)->name('users.store');
        Route::patch('users/{user}', UpdateUser::class)->name('users.update');
        Route::delete('users/{user}', DeleteUser::class)->name('users.destroy');
    });

    require __DIR__.'/auth.php';
