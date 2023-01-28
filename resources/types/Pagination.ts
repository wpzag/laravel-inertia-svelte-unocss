// laravel pagination
declare namespace App.Data {
    export interface PaginationResponse<T> {
        meta: {
            total: number;
            per_page: number;
            current_page: number;
            last_page: number;
            first_page_url: string;
            last_page_url: string;
            next_page_url: string;
            prev_page_url: string;
            from: number;
            to: number;
        };
        data: T[];
    }
}
