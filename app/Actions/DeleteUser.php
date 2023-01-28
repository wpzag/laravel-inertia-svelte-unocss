<?php

namespace App\Actions;

    use App\Models\User;
    use Illuminate\Support\Facades\Redirect;
    use Lorisleiva\Actions\Action;

    class DeleteUser extends Action
    {
        public function authorize(): bool
        {
            return true;
        }

        public function rules(): array
        {
            return [];
        }

        public function handle(User $user)
        {
            $user->delete();
            Redirect::route('users.index');
        }
    }
