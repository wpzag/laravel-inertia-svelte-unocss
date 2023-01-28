<?php

namespace App\Actions;

    use App\Data\UserData;
    use App\Models\User;
    use Illuminate\Support\Facades\Redirect;
    use Lorisleiva\Actions\Action;
    use Lorisleiva\Actions\ActionRequest;

    class StoreUser extends Action
    {
        public function authorize(): bool
        {
            return true;
        }

        public function rules(): array
        {
            return [
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                'password' => ['required', 'string', 'min:8', 'confirmed'],
            ];
        }

        public function handle(ActionRequest $request)
        {
            $request['password'] = bcrypt($request['password']);
            $user = User::create($request->validated());
            Redirect::route('users.index')->with('data', ['user' => UserData::from($user)]);
        }
    }
