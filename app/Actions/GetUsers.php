<?php

namespace App\Actions;

    use App\Models\User;
    use Inertia\Inertia;
    use Lorisleiva\Actions\Action;
    use Lorisleiva\Actions\ActionRequest;

    class GetUsers extends Action
    {
        public function handle(ActionRequest $request)
        {
            return Inertia::render('Users', [
                'users' => User::when(fn () => request()->sortDirection && request()->sortBy, function ($query) {
                    return $query->orderBy(request('sortBy'), request('sortDirection'));
                })->latest()
                    ->paginate(request()->per_page ?? 4),
            ]);
        }
    }
