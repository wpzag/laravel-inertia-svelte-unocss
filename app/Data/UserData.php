<?php

namespace App\Data;

    use Spatie\LaravelData\Data;
    use Spatie\TypeScriptTransformer\Attributes\TypeScript;

    #[TypeScript]
    class UserData extends Data
    {
        public function __construct(
            public string $name,
            public string $email,
            public string $created_at,
            public string $updated_at,

        ) {
        }
    }
