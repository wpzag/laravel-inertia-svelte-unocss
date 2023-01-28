<?php

namespace App\Actions;

    use App\Models\User;
    use Illuminate\Support\Facades\Redirect;
    use Lorisleiva\Actions\Action;

    class UpdateUser extends Action
    {
        public function authorize(): bool
        {
            return true;
        }

        public function rules(): array
        {
            return [
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users,email,'.request()->id],
            ];
        }

        public function handle(User $user)
        {
            Redirect::route('users.index')->with('data', ['user' => tap($user)->update(request()->all())]);
        }
    }
